import { useState, useRef, useEffect } from "react"

// Takes an onSubmitFunc as props
const WorkoutForm = ({ onSubmitFunc }) => {
    const [exercise, setExercise] = useState({
        id: -1,
        name: "",
        numberOfSets: 0,
        numberOfReps: 0,
        weight: 0
    });

    const isInitialMount = useRef(true);

    /*
        Whenever the state variable changes (form is submitted), call
        onSubmitFunc. Without the if-else, the component calls
        onSubmitFunc whenver it first mounts.
    */
    useEffect(() => {
        if (isInitialMount.current){
            isInitialMount.current = false
        } else {
            onSubmitFunc(exercise);
        }
    }, [exercise, onSubmitFunc]);

    return (
        <form onSubmit={(event) => {
            setExercise({
                name: event.target[0].value,
                numberOfSets: event.target[1].value,
                numberOfReps: event.target[2].value,
                weight: event.target[3].value
            });

            event.preventDefault(); // To stop page from refreshing on submit
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