import { useState, useEffect } from "react"
import WorkoutForm from "./WorkoutForm"
import "./Styles.css"

// Takes a Workout Object and onDelete function as props
const Workout = ({workout, onDelete, onEdit}) => {
    const [shouldDelete, setShouldDelete] = useState(false);
    const [shouldShowForm, setShouldShowForm] = useState(false);

    // Delete the current component when the state variable is flipped
    useEffect(() => {
        if (shouldDelete){
            setShouldDelete(false);
            onDelete(workout.id);
        }
    }, [shouldDelete, setShouldDelete, workout.id, onDelete]);

    // Show the exercise object and the appropriate buttons to modify the exercise object
    const showWorkout = () => {
        return (
        <div className="exercise">
            <p style={{display: "inline-block", fontFamily: "Helvetica"}}>
                Workout Name: <text className="user_data">{workout.name}</text><br />
                Number of Sets: <text className="user_data">{workout.numberOfSets}</text><br />
                Number of Reps: <text className="user_data">{workout.numberOfReps}</text><br />
                Weight: <text className="user_data">{workout.weight} lbs.</text><br />
            </p>

            <div style={{display: "inline-block"}}>
                <button className="button" onClick={() => {
                    setShouldDelete(true);
                }}>Delete

                </button>

                <br />

                <button className="button" onClick={() => setShouldShowForm(true)}>
                Edit
                </button>
            </div>
            
        </div>)
    }

    // Show the form for user to input exercise
    const showForm = () => {
        return <WorkoutForm onSubmitFunc={(object) => {
        onEdit(object);
        setShouldShowForm(false);
        }} oldWorkoutObject={workout}/>
    };

    return (
        <div key={workout.id}>
            {
                shouldShowForm ? showForm() : showWorkout()
            }
        </div>
    );
}

export default Workout;