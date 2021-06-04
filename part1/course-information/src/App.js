const App = () => {
  const course = "Half Stack application development";
  const parts = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component",
  ];
  const exercises = [10, 7, 14];
  return (
    <>
      <h1>{course}</h1>
      {parts.map((el, idx) => (
        <p>
          {el} {exercises[idx]}
        </p>
      ))}
      <p>Number of exercises {exercises.reduce((acc, cur) => (acc += cur))}</p>
    </>
  );
};

export default App;
