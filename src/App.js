import WorkoutForm from "./WorkoutForm.js"
import Workout from "./Workout.js"
import React from "react"

function App() {
  const [workoutArray, setWorkoutArray] = React.useState([]);

  return (
    <div className="App">
      <h1>Workout Tracker</h1>
      <WorkoutForm onSubmitFunc={(object) => {
        object.id = workoutArray.length;
        setWorkoutArray(arr => [...arr, object]);
      }} />

      {
        workoutArray.map(workout => <Workout key={workout.id} workout={workout} />)
      }
    </div>
  );
}

export default App;
