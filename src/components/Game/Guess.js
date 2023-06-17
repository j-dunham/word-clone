import { checkGuess } from "../../game-helpers";

export default function Guess({ guess, answer }) {
  const letterResults = checkGuess(guess, answer);

  return (
    <>
      <p className="guess">
        {letterResults.map((result, i) => {
          return (
            <span  key={i} className={`cell ${result.status}`}>
              {result.letter}
            </span>
          );
        })}
      </p>
    </>
  );
}
