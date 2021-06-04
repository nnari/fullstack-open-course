const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  return (
    <>
      <Header text={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

const Header = ({ text }) => <h1>{text}</h1>;

const Content = ({ parts }) => parts.map((p) => <Part part={p} />);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ parts }) => (
  <p>
    Number of exercises {parts.reduce((acc, cur) => (acc += cur.exercises), 0)}
  </p>
);

export default App;
