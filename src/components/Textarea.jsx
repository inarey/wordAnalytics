import { useState } from 'react';

export default function Textarea() {
  const [text, setText] = useState('');
  return (
    <textarea
    value={text}
      onChange={(e) => {
        let newText = e.target.value;
        if (newText.includes('<script>')) {
          alert('No script tag allowwed!')
          newText = newText.replace('<script>', '');
        }
        setText(newText);
      }}
      className='textarea'
      placeholder='type your text here...'
    />
  );
}
