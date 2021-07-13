import WorkoutForm from "./WorkoutForm.js"
import Workout from "./Workout.js"
import { useState } from "react"

const App = () => {
  const [workoutArray, setWorkoutArray] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Show the form for user to input exercise
  const presentForm = () => {
    return <WorkoutForm onSubmitFunc={(object) => {
      object.id = workoutArray.length;
      setWorkoutArray(arr => [...arr, object]);
      setShowForm(false);
    }} />
  };

  // Delete an exercise by id (called from child Workout component)
  const deleteExercise = (idToDelete) => {
    setWorkoutArray(workoutArray.filter(element => {
      return idToDelete !== element.id;
    }));
  }

  return (
    <div className="App">
      <h1>Workout Tracker</h1>
      {
        workoutArray.map(workout => <Workout key={workout.id} workout={workout} onDelete={deleteExercise}/>)
      }

      {
        showForm ? presentForm() : null
      }

      <button onClick={() => {
        setShowForm(true);
      }}>
        Press here to add an exercise
      </button>
    </div>
  );
}

export default App;
