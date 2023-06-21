import { checkGuess } from "../../game-helpers";

export default function Guess({ guess, answer }) {
  const letterResults = checkGuess(guess, answer);

  const getClasses = (result) => {
    if(result.letter === " "){
      return "cell";
    }

    return `cell ${result.status}`;
  }

  return (
    <>
      <p className="guess">
        {letterResults.map((result, i) => {
          return (
            <span  key={i} className={getClasses(result)}>
              {result.letter}
            </span>
          );
        })}
      </p>
    </>
  );
}
