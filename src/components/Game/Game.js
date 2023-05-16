import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess: guess.toUpperCase() });
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess} onChange={(e) => setGuess(e.target.value)} pattern="[a-zA-z]{5}" title='5 letter word' />
    </form>
  )
}

export default Game;
