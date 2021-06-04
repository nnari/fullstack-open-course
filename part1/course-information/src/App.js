import { useState } from "react";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackClick = (keyName) =>
    setFeedback((prev) => ({
      ...prev,
      [keyName]: prev[keyName] + 1,
    }));
  return (
    <>
      <button onClick={() => handleFeedbackClick("good")}>Good</button>
      <button onClick={() => handleFeedbackClick("neutral")}>Neutral</button>
      <button onClick={() => handleFeedbackClick("bad")}>Bad</button>
      <p>
        {feedback.bad} {feedback.good}
      </p>
    </>
  );
};

export default App;
