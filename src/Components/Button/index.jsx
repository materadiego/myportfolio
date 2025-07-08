const Button = ({ action, color, font, children }) => {
  return (
    <button
      onClick={action}
      className={`Button ${`Button__${color}`} ${`Button__${font}`}`}
    >
      {" "}
      {children}
    </button>
  );
};

export { Button };
