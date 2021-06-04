import { Course } from './Course';

export const CourseGroup = ({ courses }) =>
  courses.map((course) => <Course course={course} />);
