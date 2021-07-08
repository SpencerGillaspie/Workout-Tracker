import React from "react"

const WorkoutForm = ({ onSubmitFunc }) => {
    const [exercise, setExercise] = React.useState({
        id: -1,
        name: "",
        numberOfSets: 0,
        numberOfReps: 0,
        weight: 0
    });

    return (
        <form onSubmit={(event) => {
            setExercise({
                name: event.target[0].value,
                numberOfSets: event.target[1].value,
                numberOfReps: event.target[2].value,
                weight: event.target[3].value
            });

            //event.preventDefault();
            onSubmitFunc(exercise);
        }}>
            <label>
                Exercise Name {'\n'}
                <input type="text" />
            </label>
            <label>
                Number of sets {'\n'}
                <input type="text" />
            </label>
            <label>
                Number of reps {'\n'}
                <input type="text" />
            </label>
            <label>
                Weight {'\n'}
                <input type="text" />
            </label>
            <input type="submit" />
        </form>
    );
}

export default WorkoutForm;