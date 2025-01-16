import { useState } from 'react';
import Stats from './Stats';
import Textarea from './Textarea';

export default function Content() {
  const [text, setText] = useState('');

  const stats = {
    numberOfWords: text.split(' ').filter((word) => word !== '').length,
    numberOfCharacters: text.length,
    numberOfIgCharacters: 280 - text.length,
    numberOfFbCharacters: 2200 - text.length,
  };
  return (
    <>
      <main className='container'>
        <Textarea text={text} setText={setText} />
        <Stats stats={stats} />
      </main>
    </>
  );
}
