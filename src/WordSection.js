import React from 'react';
import data from './data/data';

const categories = ['Fast Food', 'Animals', 'Countries', 'Movies'];

// A random number allows us to select random categories and words
const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const WordSection = () => {
  let i = rand(0, categories.length - 1);
  let category = categories[i];

  let j = rand(0, data[category].length);
  let word = data[category][j];

  // Split the word by characters
  let charArr = word.split('');

  return (
    <div className="word-section">
      <div data-testid="category" className="category">
        Category: {category}
      </div>
      <div data-testid="word" className="word">
        {/* Loop through each character and display a line */}
        {charArr.map((char, index) => {
          return char === ' ' ? (
            <div key={index} className="px-1"></div>
          ) : (
            <div key={index}>
              <div className="invisible">{char}</div>
              <hr className="w-full"></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WordSection;
