const GoTopButton = () => {
  const handleButtonClick = () => {
    window.scrollX = 0;
  };
  return <button onClick={handleButtonClick}>TOP</button>;
};

export default GoTopButton;
