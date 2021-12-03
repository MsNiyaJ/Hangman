import React from 'react';

const disableButton = (e) => {
  const button = e.target;
  button.classList.add('disabled');
  button.disabled = true;
  // console.log(e.target);
};

const Letter = ({ letter }) => {
  return (
    <div>
      <button
        type="button"
        data-testid="letter"
        onClick={disableButton}
        className="letter-button"
      >
        {letter}
      </button>
    </div>
  );
};

export default Letter;
