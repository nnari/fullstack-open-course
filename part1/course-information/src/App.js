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
      <Header text={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </>
  );
};

const Header = ({ text }) => <h1>{text}</h1>;
const Content = ({ parts, exercises }) =>
  parts.map((el, idx) => (
    <p>
      {el} {exercises[idx]}
    </p>
  ));
const Total = ({ exercises }) => (
  <p>Number of exercises {exercises.reduce((acc, cur) => (acc += cur))}</p>
);

export default App;
