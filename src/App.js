import WorkoutForm from "./WorkoutForm.js"
import Workout from "./Workout.js"
import { useState } from "react"
import "./Styles.css"

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

  // Edit an exercise
  const editExercise = (workoutObject) => {
    var newArray = [...workoutArray];
    newArray[workoutObject.id] = workoutObject;
    setWorkoutArray(newArray);
  }

  return (
    <div className="App">
      <h1>Workout Tracker</h1>
      {
        workoutArray.map(workout => <Workout className="exercise" key={workout.id} workout={workout} onDelete={deleteExercise} onEdit={editExercise}/>)
      }

      {
        showForm ? presentForm() : 
        <button className="button" onClick={() => {
          setShowForm(true);
        }}>
          Add an Exercise
        </button>
      }
    </div>
  );
}

export default App;
