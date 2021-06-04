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
      <FeedbackButton handleClick={handleFeedbackClick} text="Good" />
      <FeedbackButton handleClick={handleFeedbackClick} text="Neutral" />
      <FeedbackButton handleClick={handleFeedbackClick} text="Bad" />
      <Statistics stats={feedback} />
    </>
  );
};

const FeedbackButton = ({ handleClick, text }) => (
  <button onClick={() => handleClick(text.toLowerCase())}>{text}</button>
);

const StatisticLine = ({ text, value, isBold = false, trailingChar = "" }) =>
  isBold ? (
    <p>
      <b>
        {text} {value} {trailingChar}
      </b>
    </p>
  ) : (
    <p>
      {text} {value} {trailingChar}
    </p>
  );

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
        <StatisticLine text={key} value={value} />
      ))}
      <StatisticLine text="total" value={total} isBold />
      <StatisticLine text="average" value={average} isBold />
      <StatisticLine
        text="positive"
        value={positivePercentage}
        isBold
        trailingChar="%"
      />
    </>
  );
};

export default App;
