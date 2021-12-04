import React from 'react';

const validateLetter = (e) => {
  const button = e.target;
  button.classList.add('disabled');
  button.disabled = true;
};

const Letter = ({ letter }) => {
  return (
    <div>
      <button
        type="button"
        data-testid="letter"
        onClick={validateLetter}
        className="letter-button"
      >
        {letter}
      </button>
    </div>
  );
};

export default Letter;
