import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState(0);
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  ];

  const handleClick = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  const handleVote = () => {
    setVotes((prev) => ({
      ...prev,
      [selected]: prev[selected] + 1,
    }));
  };
  const [votes, setVotes] = useState(
    anecdotes.reduce((acc, _, idx) => {
      acc[idx] = 0;
      return acc;
    }, {})
  );

  const getMostVotedIndex = () =>
    Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b));

  return (
    <>
      <Anecdote anecdote={anecdotes[selected]} />
      <p>{votes[selected]} votes</p>
      <button onClick={handleClick}>
        {selected ? "Next anecdote" : "Get an anecdote"}
      </button>
      <button onClick={handleVote}>Upvote</button>
      <Anecdote anecdote={anecdotes[getMostVotedIndex()]} isMostVoted />
    </>
  );
};

const Anecdote = ({ anecdote, isMostVoted = false }) =>
  isMostVoted ? (
    <>
      <h1>Most upvoted anecdote</h1>
      <p>{anecdote}</p>
    </>
  ) : (
    <p>{anecdote}</p>
  );

export default App;
