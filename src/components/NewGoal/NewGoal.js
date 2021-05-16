import React, { useState } from "react";

import "./NewGoal.css";

const NewGoal = (props) => {
  const [userInput, setUserInput] = useState("");

  const addGoalHandler = (e) => {
    //This prevents the submitting of the form to the server.

    e.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: userInput,
    };

    setUserInput("");

    console.log(newGoal);

    props.onAddGoal(newGoal);
  };

  const textChangedHandler = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={userInput} onChange={textChangedHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
