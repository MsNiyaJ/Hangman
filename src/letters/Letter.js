import React from 'react';

const Letter = ({ letter }) => {
  return (
    <div>
      <button type="button" data-testid="letter" className="letter-button">
        <p className="button-text">{letter}</p>
      </button>
    </div>
  );
};

export default Letter;
