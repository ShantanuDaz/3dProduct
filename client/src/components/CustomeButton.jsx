import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
const CustomeButton = ({
  type = "filled",
  title = "",
  customeStyles = "",
  handleClick = () => {},
}) => {
  const snap = useSnapshot(state);
  const genrateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customeStyles}`}
      style={genrateStyle(type)}
      onClick={() => handleClick()}
    >
      {title}
    </button>
  );
};

export default CustomeButton;
