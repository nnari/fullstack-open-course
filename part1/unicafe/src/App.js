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
      <h1>Give feedback</h1>
      <button onClick={() => handleFeedbackClick("good")}>Good</button>
      <button onClick={() => handleFeedbackClick("neutral")}>Neutral</button>
      <button onClick={() => handleFeedbackClick("bad")}>Bad</button>
      <Statistics stats={feedback} />
    </>
  );
};

const Statistics = ({ stats }) => (
  <>
    <h1>Statistics</h1>
    {Object.entries(stats).map(([key, value]) => (
      <p>
        {key} {value}
      </p>
    ))}
  </>
);

export default App;
