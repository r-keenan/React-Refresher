import React, { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students in the Course Q&A" },
  ]);
  //This is a callback. Needs to be used when passing data from parent to child component.
  const addNewGoalHandler = (newGoal) => {
    // courseGoals.push(newGoal);
    // console.log(courseGoals);
    setCourseGoals(courseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      {/* Goals is the prop and value reference is courseGoals. Passes data from child to parent component */}
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
