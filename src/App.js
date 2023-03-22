import { useEffect, useState } from "react";
import ColorPicker from "./ColorPicker";
import Game from "./Game";
import "./styles.css";
import Answer from "./Answer";
import Description from "./Description";
import { TOTAL_CHANCE, TOTAL_INPUT, COLOR_OPTIONS } from "./Constants";

export default function App() {
  const [startGame, setStartGame] = useState(false);
  const [pickedColor, setPickedColor] = useState(COLOR_OPTIONS[0]);
  const [current, setCurrent] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [answer, setAnswer] = useState([]);
  const [showAns, setShowAns] = useState(false);

  const totalChance = TOTAL_CHANCE;

  const generateAnswer = () => {
    const newAnswer = Array(TOTAL_INPUT)
      .fill(0)
      .map(
        () => COLOR_OPTIONS[Math.floor(Math.random() * COLOR_OPTIONS.length)]
      );
    setAnswer(newAnswer);
    setStartGame(true);
  };

  const handleNewGame = () => {
    setCurrent(0);
    setIsWin(false);
    setShowModal(false);
    setStartGame(false);
    setShowAns(false);
    setTimeout(generateAnswer, 0);
  };

  useEffect(() => {
    generateAnswer();
  }, []);

  useEffect(() => {
    if (current === totalChance) setShowModal(true);
  }, [current]);

  useEffect(() => {
    if (showModal) {
      const msg = isWin ? "Congratulation You Win" : "Better Luck Next Time";
      setShowAns(true);
      setTimeout(() => alert(msg), 100); // Adding 100ms delay so that showMsg should update
      setTimeout(handleNewGame, 3000);
    }
  }, [showModal]);

  return (
    <div className="container">
      <div className="game-container">
        <Description />
        <button onClick={handleNewGame}>New Game</button>
        {startGame && (
          <>
            <Answer answer={answer} setShowAns={setShowAns} showAns={showAns} />
            {[...Array(totalChance).keys()].map((val, index) => (
              <div className={index === current && "selectedInput"}>
                <Game
                  key={index}
                  current={current}
                  disabled={isWin || index !== current}
                  setCurrent={setCurrent}
                  pickedColor={pickedColor}
                  answer={answer}
                  setShowModal={setShowModal}
                  setIsWin={setIsWin}
                />
              </div>
            ))}
          </>
        )}
      </div>
      <ColorPicker color={COLOR_OPTIONS} onPickedColor={setPickedColor} />
    </div>
  );
}
