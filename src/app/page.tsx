'use client';
import { useEffect, useState } from "react";
import { musician, musicianToMusician, musicType } from "./musician";
import { matcher } from "./matcher";
import { musicianDb } from "./musicianDb";

let db = new musicianDb();
let musicians: musician[] = db.musicians;
let activeRequests: musicianToMusician[] = [];
let acceptedRequests: musicianToMusician[] = [];
activeRequests.push({ id: 0, id1: 1, id2: 2, senderAccepted: true, recieverAccepted: undefined, rating: 5 });

export default function Home() {
  const [id, setId] = useState(undefined);
  const [seeRequests, setSeeRequests] = useState(false);

  if (id === undefined) {
    return <PickUser setId={setId} musicians={musicians} />;
  } else if (!seeRequests) {
    return (
      <>
        <LogOutUser setId={setId} setSeeRequests={setSeeRequests} />
        <Match id={id} others={musicians} />
        <br />
        {activeRequests.length > 0 && (
          <button onClick={() => setSeeRequests(true)}>See who swiped right on you</button>
        )}
      </>
    );
  } else {
    return (
      <>
        <LogOutUser setId={setId} setSeeRequests={setSeeRequests} />
        <DisplayRequests id={id} />
      </>
    );
  }
}

export function Match({ id, others }) {
  let user = db.getById(id);
  let matchMaker = new matcher();
  let m2m = matchMaker.getAllRatings(user, others);
  const [matches, setMatches] = useState(m2m);
  const [currentindex, setIndex] = useState(0);
  let match: musician;
  if (currentindex < matches.length) {
    match = m2m[currentindex].reciever as musician;
  }
  else {
    let randIndex = Math.floor(Math.random() * (musicians.length + 1));
    match = musicians[randIndex]
  }

  function nextIndex() {
    setIndex(currentindex + 1);
  }

  function sendMatchRequest(match) {
    match.senderAccepted = true;

    if (!match.recieverAccepted) {
      alert('Request sent to ' + match.reciever.name);
      activeRequests.push(match);
      nextIndex();
    } else {
      acceptedRequests.push(match);
      let index = activeRequests.indexOf(match);
      if (index > -1) {
        activeRequests.splice(index, 1);
      }

      alert('You may now chat with ' + match.reciever.name + '. Their phone number is 555-5555');
    }
  }

  return (
    <>
      <h2>Musician {user.name}</h2>
      <MusicianView musician={match} />
      <SwipeButtons onSwipeLeft={nextIndex} onSwipeRight={() => sendMatchRequest(m2m[currentindex])} />
      <br />
    </>
  );
}

export function SwipeButtons({ onSwipeLeft, onSwipeRight }) {
  return (
    <>
      <button onClick={onSwipeLeft}>Swipe left</button>
      <button onClick={onSwipeRight}>Swipe right</button>
    </>
  );
}

export function MusicianView({ musician }) {
  let typeDisplay = musicType[musician.type];
  return (
    <>
      <p>Match:</p>
      <p>{musician.name}</p>
      <p>{musician.biography}</p>
      <p>{musician.genre.join(', ')}</p>
      <p>{typeDisplay}</p>
      <br />
    </>
  );
}

export function DisplayRequests({ id }) {
  let user = db.getById(id);
  let output = <button>Back to matches</button>;
  if (!user) {
    return <p>No active requests for musician with ID {id}</p>;
  }
  let requests = activeRequests.filter(r => r.id2 === id);
  const [currentindex, setIndex] = useState(0);
  const [currentRequests, setRequests] = useState(requests);

  function nextIndex(request) {
    let index = currentRequests.indexOf(request);
    if (index > -1) {
      let updatedRequests = [...currentRequests];
      updatedRequests.splice(index, 1);
      setRequests(updatedRequests);
    }
  }

  function sendMatchRequest(request) {
    request.recieverAccepted = true;
    acceptedRequests.push(request);
    let index = currentRequests.indexOf(request);
    if (index > -1) {
      let updatedRequests = [...currentRequests];
      updatedRequests.splice(index, 1);
      setRequests(updatedRequests);
    }

    let sender = db.getById(request.id1);
    alert('You may now chat with ' + sender.name + '. Their phone number is 555-5555');
  }

  return (
    <>
      {currentRequests.length > 0 ? (
        currentRequests.map((request, index) => (
          <div key={index}>
            <MusicianView musician={db.getById(request.id1)} />
            <SwipeButtons onSwipeLeft={() => nextIndex(request)} onSwipeRight={() => sendMatchRequest(request)} />
          </div>
        ))
      ) : (
        <p>No active requests for musician {user.name}</p>
      )}
    </>
  );
}

export function PickUser({ setId, musicians }) {
  const [selectedUserId, setSelectedUserId] = useState(musicians[0].id);

  const handleSelectChange = (event) => {
    setSelectedUserId(Number(event.target.value));
  };

  return (
    <>
      <select className="text-black" value={selectedUserId} onChange={handleSelectChange}>
        {musicians.map((musician) => (
          <option value={musician.id} key={musician.id}>
            {musician.name}
          </option>
        ))}
      </select>
      <button onClick={() => setId(selectedUserId)}>Login</button>
    </>
  );
}
export function LogOutUser({ setId, setSeeRequests }) {
  function logOut() {
    setId(undefined);
    setSeeRequests(false);
  }
  return <button onClick={logOut}>Log Out</button>;
}

export function Friended(reciever) {
  return (
    <>
      <p>Chat with {reciever.name}</p>
      <p>Phone number: 555-555-5555</p>
    </>
  );
}
