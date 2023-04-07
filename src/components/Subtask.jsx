import { useEffect, useRef } from "react";

export const Subtask = ({ subtask }) => {
  const { name, done } = subtask;
  const checkboxRef = useRef();

  useEffect(() => {
    checkboxRef.current.checked = done;
  }, []);

  return (
    <div className="subtask">
      <input type="checkbox" ref={checkboxRef} id="checkbox_id" value="value" />
      <label>{name}</label>
      <span></span>
      <div>x</div>
    </div>
  );
};
