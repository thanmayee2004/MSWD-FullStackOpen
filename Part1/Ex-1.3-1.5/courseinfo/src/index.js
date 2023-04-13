import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <p>{props.course}</p>;
};

const Content = (props) => {
  const part1 = props.parts[0];
  const part2 = props.parts[1];
  const part3 = props.parts[2];
  return (
    <div>
      <Part name={part1.name} number={part1.number}></Part>
      <Part name={part2.name} number={part2.number}></Part>
      <Part name={part3.name} number={part3.number}></Part>
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.number}
    </p>
  );
};
const APP = () => {
  const course = {
    name: "Half Stack Application development",
    parts: [
      {
        name: "Fundamental of React",
        number: 10,
      },
      {
        name: "Using props to pass data",
        number: 7,
      },
      {
        name: "State of a component",
        number: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      {props.parts[0].number + props.parts[1].number + props.parts[2].number}
    </p>
  );
};

ReactDOM.render(<APP />, document.getElementById("root"));
