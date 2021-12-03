import React from 'react';
import Letter from './Letter';

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const LettersSection = () => {
  return (
    <div className="w-full absolute bottom-0 mb-4">
      <div className="letter-section">
        {alphabet.map((letter, index) => {
          return (
            <div key={index}>
              <Letter letter={letter} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LettersSection;
