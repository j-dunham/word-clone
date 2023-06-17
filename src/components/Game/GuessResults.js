import Guess from './Guess';
export default function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, i) => (
        <Guess key={i} guess={guess} answer={answer}/>
      ))}
    </div>
  )
}