import Guess from './Guess';
import { range } from '../../utils';

export default function GuessResults({ guesses, answer }) {
  const blankRows = 6 - guesses.length;
  return (
    <div className="guess-results">
      {guesses.map((guess, i) => (
        <Guess key={i} guess={guess} answer={answer}/>
      ))}
      {range(blankRows).map((i) => (
        <Guess key={i} guess={'     '} answer={answer}/>
      ))}
    </div>
  )
}