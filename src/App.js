import React, { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Practice Coding",
      day: "October 16th at 12:00PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Create React Project",
      day: "October 17th at 7:00AM",
      reminder: false,
    },
    {
      id: 3,
      text: "Apply for jobs",
      day: "October 18th at 2:00PM",
      reminder: true,
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
