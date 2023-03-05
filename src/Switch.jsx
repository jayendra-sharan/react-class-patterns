const Switch = ({ on, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={on ? "switch-on" : "switch-off"}
        type="button"
      >
        {on ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default Switch;
