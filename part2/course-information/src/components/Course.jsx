export const Course = ({ course }) => (
  <>
    <Header text={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
);

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