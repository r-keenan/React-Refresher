import React from "react";

import "./NewGoal.css";

const NewGoal = (props) => {
  const addGoalHandler = (e) => {
    //This prevents the submitting of the form to the server.
    e.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: "My new goal!",
    };
    console.log(newGoal);

    props.onAddGoal(newGoal);
  };
  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;