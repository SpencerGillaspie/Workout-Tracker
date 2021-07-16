import { useState, useEffect } from "react"
import WorkoutForm from "./WorkoutForm";

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
        return (<div>
            <p>
                Workout Name: {workout.name}{'\n'}
                Number of sets: {workout.numberOfSets}{'\n'}
                Number of reps per set: {workout.numberOfReps}{'\n'}
                Weight used: {workout.weight} lbs.{'\n'}
            </p>

            <button onClick={() => {
                setShouldDelete(true);
            }}>Press here to delete an exercise

            </button>

            <button onClick={() => setShouldShowForm(true)}>
                Press here to edit an exercise
            </button>
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