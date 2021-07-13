import { useState, useEffect } from "react"

// Takes a Workout Object and onDelete function as props
const Workout = ({workout, onDelete}) => {
    const [shouldDelete, setShouldDelete] = useState(false);

    // Delete the current component when the state variable is flipped
    useEffect(() => {
        if (shouldDelete){
            setShouldDelete(false);
            onDelete(workout.id);
        }
    }, [shouldDelete, setShouldDelete, workout.id, onDelete]);

    return (
        <div>
            <p>
                Workout Name: {workout.name}{'\n'}
                Number of sets: {workout.numberOfSets}{'\n'}
                Number of reps per set: {workout.numberOfReps}{'\n'}
                Weight used: {workout.weight} lbs.{'\n'}
            </p>

            <button onClick={() => {
                setShouldDelete(true);
            }}>Press here to delete an exercise</button>
        </div>
    );
}

export default Workout;