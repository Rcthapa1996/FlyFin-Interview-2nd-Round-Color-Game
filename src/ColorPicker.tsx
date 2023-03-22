import "./styles.css";

const ColorPicker = ({ color, onPickedColor }) => {
  return (
    <div className="color-picker">
      {color.map((c) => (
        <button
          onClick={(e) => onPickedColor(c)}
          style={{
            backgroundColor: c,
            height: "40px",
            width: "40px",
            borderRadius: "40px"
          }}
        ></button>
      ))}
    </div>
  );
};

export default ColorPicker;
