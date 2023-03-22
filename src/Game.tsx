import { useState, useEffect } from "react";
import "./styles.css";
import Result from "./result";

const Game = ({
  answer,
  current,
  disabled,
  setCurrent,
  pickedColor,
  setShowModal,
  setIsWin
}) => {
  const [showSubmit, setShowSubmit] = useState(false);
  const [color, setColor] = useState(["white", "white", "white", "white"]);
  const [result, setResult] = useState(["white", "white", "white", "white"]);

  const handleClick = (index) => {
    const copyColor = [...color];
    copyColor[index] = pickedColor || "white";
    setColor(copyColor);
  };
  useEffect(() => {
    setShowSubmit(color.every((c) => c !== "white"));
  }, [color]);
  const handleSubmit = () => {
    // let copyOfAnswer = [...answer];
    let remainColor = [];
    let correct = [],
      partialCorrect = 0;
    for (let i = 0; i < 4; i++) {
      if (color[i] === answer[i]) {
        correct.push(i);
      } else {
        remainColor.push(answer[i]);
      }
    }
    for (let i = 0; i < 4; i++) {
      if (!correct.includes(i) && remainColor.includes(color[i])) {
        partialCorrect++;
        const index = remainColor.indexOf(color[i]);
        remainColor[index] = null;
      }
    }
    setResult((res) => res.fill("black", 0, correct.length));
    setResult((res) =>
      res.fill("white", correct.length, correct.length + partialCorrect)
    );
    setResult((res) => res.fill("cross", correct.length + partialCorrect));
    setShowSubmit(false);
    setCurrent(current + 1);
    if (correct.length === 4) {
      setIsWin(true);
      setShowModal(true);
    }
  };

  return (
    <div className="game">
      <div>
        {color &&
          color.map((c, index) => (
            <button
              disabled={disabled}
              onClick={() => handleClick(index)}
              style={{
                backgroundColor: c,
                height: "40px",
                width: "40px",
                borderRadius: "40px"
              }}
            ></button>
          ))}
      </div>
      {showSubmit && (
        <button className="submitBtn" onClick={handleSubmit}>
          ✅
        </button>
      )}
      <Result result={result} />
    </div>
  );
};

export default Game;
