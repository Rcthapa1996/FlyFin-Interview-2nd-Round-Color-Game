import "./styles.css";

const Result = ({ result }) => {
  return (
    <div className="result">
      {result.map((r) => (
        <div className="resultItem">
          {r === "white" && "○"}
          {r === "black" && "⏺"}
          {r === "cross" && "˟"}
        </div>
      ))}
    </div>
  );
};
export default Result;
