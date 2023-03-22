import { useState } from "react";
import "./styles.css";

const Answer = ({ answer, showAns, setShowAns }) => {
  return (
    <>
      <button onClick={() => setShowAns((pre) => !pre)}>
        {!showAns ? "Show Answer" : "Hide Answer"}
      </button>
      {showAns && (
        <div className="game">
          <div>
            {answer &&
              answer.map((c, index) => (
                <button
                  style={{
                    backgroundColor: c,
                    height: "40px",
                    width: "40px",
                    borderRadius: "40px"
                  }}
                ></button>
              ))}
          </div>
        </div>
      )}
      <hr />
    </>
  );
};

export default Answer;

// const Game = ({ answer, current, disabled, setCurrent, pickedColor }) => {
//   const [showSubmit, setShowSubmit] = useState(false);
//   const [color, setColor] = useState(["white", "white", "white", "white"]);
//   const [result, setResult] = useState(["white", "white", "white", "white"]);

//   const handleClick = (index) => {
//     const copyColor = [...color];
//     copyColor[index] = pickedColor || "white";
//     setColor(copyColor);
//   };
//   useEffect(() => {
//     setShowSubmit(color.every((c) => c !== "white"));
//   }, [color]);
//   const handleSubmit = () => {
//     let correct = 0,
//       partialCorrect = 0;
//     let copyOfAnswer = [...answer];
//     for (let i = 0; i < 4; i++) {
//       if (color[i] === answer[i]) {
//         const index = copyOfAnswer.indexOf(color[i]);
//         copyOfAnswer.splice(index, 1);
//         correct++;
//       }
//       if (copyOfAnswer.includes(color[i])) {
//         partialCorrect++;
//         const index = copyOfAnswer.indexOf(color[i]);
//         copyOfAnswer.splice(index, 1);
//       }
//     }
//     setResult((res) => res.fill("black", 0, correct));
//     setResult((res) => res.fill("white", correct, partialCorrect));
//     setResult((res) => res.fill("cross", correct + partialCorrect));
//     setShowSubmit(false);
//     setCurrent(current + 1);
//   };

//   return (

//   );
// };

// export default Game;
