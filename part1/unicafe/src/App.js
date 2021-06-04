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

const Statistics = ({ stats }) => {
  const total = Object.values(stats).reduce((acc, cur) => (acc += cur));
  const average = (stats.good - stats.bad) / total;
  const positivePercentage = (stats.good / total) * 100;

  // Check all feedback values on stats
  if (Object.values(stats).every((val) => val === 0))
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    );

  return (
    <>
      <h1>Statistics</h1>
      {Object.entries(stats).map(([key, value]) => (
        <p>
          {key} {value}
        </p>
      ))}
      <p>
        <b>Total {Object.values(stats).reduce((acc, cur) => (acc += cur))}</b>
      </p>
      <p>
        <b>Average {average}</b>
      </p>
      <p>
        <b>Positive {positivePercentage}</b>
      </p>
    </>
  );
};

export default App;
