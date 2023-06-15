import { range } from '../../utils';

export default function GuessResult({ guesses }) {
  const getLetters = (guess) => {
    return guess.split('');
  }
  return (
    <div className="guess-results">
      {guesses.map((guess, i) => (
        <p key={i} className="guess">
          {getLetters(guess).map((letter, i) => {
            return <span key={i} className="cell">{letter}</span>
          })}
        </p>
      ))}
    </div>
  )
}