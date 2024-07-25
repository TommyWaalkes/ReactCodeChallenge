
import * as fs from 'fs';
import path from 'path';
import { musician, musicType } from './musician';

export class musicianDb {
  musicians: musician[] = [
    {
      id: 1,
      name: 'John Doe',
      location: 'New York, NY',
      image: 'https://example.com/images/john.jpg',
      biography: 'John is an experienced musician with a passion for jazz and blues.',
      instrumentRange: ['guitar', 'piano'],
      vocalInterest: ['tenor'],
      genre: ['jazz', 'blues'],
      type: musicType.Instrumentalist
    },
    {
      id: 2,
      name: 'Jane Smith',
      location: 'Los Angeles, CA',
      image: 'https://example.com/images/jane.jpg',
      biography: 'Jane is a versatile vocalist and instrumentalist with a love for pop and rock music.',
      instrumentRange: ['vocals', 'keyboard'],
      vocalInterest: ['soprano'],
      genre: ['pop', 'rock'],
      type: musicType.Vocalist
    },
    {
      id: 3,
      name: 'Emily Johnson',
      location: 'Chicago, IL',
      image: 'https://example.com/images/emily.jpg',
      biography: 'Emily is a talented saxophonist and flutist known for her energetic performances.',
      instrumentRange: ['saxophone', 'flute'],
      vocalInterest: ['alto'],
      genre: ['soul', 'funk'],
      type: musicType.Instrumentalist
    },
    {
      id: 4,
      name: 'Michael Brown',
      location: 'Austin, TX',
      image: 'https://example.com/images/michael.jpg',
      biography: 'Michael is a skilled drummer and percussionist with a background in rock and country music.',
      instrumentRange: ['drums', 'percussion'],
      vocalInterest: ['baritone'],
      genre: ['rock', 'country'],
      type: musicType.Instrumentalist
    },
    {
      id: 5,
      name: 'Sarah Davis',
      location: 'Nashville, TN',
      image: 'https://example.com/images/sarah.jpg',
      biography: 'Sarah is a singer-songwriter with a powerful voice and a knack for storytelling.',
      instrumentRange: ['guitar', 'vocals'],
      vocalInterest: ['soprano'],
      genre: ['country', 'folk'],
      type: musicType.Vocalist
    },
    {
      id: 6,
      name: 'David Lee',
      location: 'San Francisco, CA',
      image: 'https://example.com/images/david.jpg',
      biography: 'David is a classical pianist known for his expressive performances.',
      instrumentRange: ['piano'],
      vocalInterest: [],
      genre: ['classical'],
      type: musicType.Instrumentalist
    },
    {
      id: 7,
      name: 'Laura Martin',
      location: 'Seattle, WA',
      image: 'https://example.com/images/laura.jpg',
      biography: 'Laura is a jazz vocalist with a soulful voice and a love for improvisation.',
      instrumentRange: ['vocals'],
      vocalInterest: ['alto'],
      genre: ['jazz', 'blues'],
      type: musicType.Vocalist
    },
    {
      id: 8,
      name: 'Chris Evans',
      location: 'Boston, MA',
      image: 'https://example.com/images/chris.jpg',
      biography: 'Chris is a talented guitarist and vocalist with a background in rock and metal music.',
      instrumentRange: ['guitar', 'vocals'],
      vocalInterest: ['tenor'],
      genre: ['rock', 'metal'],
      type: musicType.Instrumentalist
    },
    {
      id: 9,
      name: 'Anna Kim',
      location: 'Toronto, ON',
      image: 'https://example.com/images/anna.jpg',
      biography: 'Anna is a versatile violinist known for her performances in classical and pop genres.',
      instrumentRange: ['violin'],
      vocalInterest: [],
      genre: ['classical', 'pop'],
      type: musicType.Instrumentalist
    },
    {
      id: 10,
      name: 'James Wilson',
      location: 'Miami, FL',
      image: 'https://example.com/images/james.jpg',
      biography: 'James is a skilled bassist with a background in jazz and funk music.',
      instrumentRange: ['bass'],
      vocalInterest: ['baritone'],
      genre: ['jazz', 'funk'],
      type: musicType.Instrumentalist
    },
    {
      id: 11,
      name: 'Olivia White',
      location: 'Denver, CO',
      image: 'https://example.com/images/olivia.jpg',
      biography: 'Olivia is a singer-songwriter with a passion for folk and indie music.',
      instrumentRange: ['guitar', 'vocals'],
      vocalInterest: ['soprano'],
      genre: ['folk', 'indie'],
      type: musicType.Vocalist
    },
    {
      id: 12,
      name: 'Ethan Garcia',
      location: 'Houston, TX',
      image: 'https://example.com/images/ethan.jpg',
      biography: 'Ethan is a multi-instrumentalist with a love for experimental and electronic music.',
      instrumentRange: ['keyboard', 'synthesizer'],
      vocalInterest: [],
      genre: ['electronic', 'experimental'],
      type: musicType.Instrumentalist
    },
    {
      id: 13,
      name: 'Sophia Martinez',
      location: 'Phoenix, AZ',
      image: 'https://example.com/images/sophia.jpg',
      biography: 'Sophia is a vocalist and percussionist with a background in Latin and jazz music.',
      instrumentRange: ['vocals', 'percussion'],
      vocalInterest: ['alto'],
      genre: ['latin', 'jazz'],
      type: musicType.Vocalist
    },
    {
      id: 14,
      name: 'Lucas Anderson',
      location: 'Portland, OR',
      image: 'https://example.com/images/lucas.jpg',
      biography: 'Lucas is a guitarist and singer known for his blues and rock performances.',
      instrumentRange: ['guitar', 'vocals'],
      vocalInterest: ['baritone'],
      genre: ['blues', 'rock'],
      type: musicType.Instrumentalist
    },
    {
      id: 15,
      name: 'Mia Thompson',
      location: 'Philadelphia, PA',
      image: 'https://example.com/images/mia.jpg',
      biography: 'Mia is a talented cellist with a passion for classical and film music.',
      instrumentRange: ['cello'],
      vocalInterest: [],
      genre: ['classical', 'film'],
      type: musicType.Instrumentalist
    }
  ];

  getById(id: number) {
    return this.musicians.filter(m => m.id === id)[0];
  }
}