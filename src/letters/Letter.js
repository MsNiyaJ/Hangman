import React from 'react';

const disableButton = (button) => {
  button.classList.add('disabled');
  button.disabled = true;
};

const validateLetter = (e) => {
  let button = e.target;
  disableButton(button);

  const letters = Array.from(document.querySelectorAll('.invisible'));

  letters.forEach((letter) => {
    if (button.textContent.toLowerCase() === letter.textContent.toLowerCase()) {
      console.log(letter);
      letter.classList.remove('invisible');
    }
  });
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
