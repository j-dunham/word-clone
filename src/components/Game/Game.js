import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResult from './GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  const [isWinner, setIsWinner] = React.useState(false);
  const [isLoser, setIsLoser] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setGuess('');
    if (guess === answer) {
      setIsWinner(true);
    } else if (guesses.length >= 5) {
      setIsLoser(true);
    } else {
      setGuesses([...guesses, guess.toUpperCase()]);
    }
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          pattern="[a-zA-z]{5}"
          title='5 letter word'
          disabled={isWinner || isLoser}
        />
      </form>
      {isWinner &&
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        </div>
      }
      {isLoser &&
        <div class="sad banner">
          <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
        </div>}
    </>
  )
}

export default Game;
