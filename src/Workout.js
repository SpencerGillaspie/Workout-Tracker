// Takes a Workout Object as props
const Workout = (props) => {
    return (
        <p>
            Workout Name: {props.workout.Name}{'\n'}
            Number of sets: {props.workout.numberOfSets}{'\n'}
            Number of reps per set: {props.workout.numberOfReps}{'\n'}
            Weight used: {props.workout.weight} lbs.{'\n'}
        </p>
    );
}

export default Workout;