import { useState, useRef, useEffect } from "react"
import "./Styles.css"

// Takes an onSubmitFunc as props
const WorkoutForm = ({ onSubmitFunc, oldWorkoutObject }) => {
    var initialObject = {
        id: -1,
        name: "",
        numberOfSets: 0,
        numberOfReps: 0,
        weight: 0
    }

    // If this is being called to edit an exercise
    if (oldWorkoutObject){
        initialObject = oldWorkoutObject;
    }

    const [exercise, setExercise] = useState(initialObject);

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
        <form style={{marginLeft: "auto", marginRight: "auto"}} className="exercise" onSubmit={(event) => {
            setExercise({
                id: exercise.id,
                name: event.target[0].value,
                numberOfSets: event.target[1].value,
                numberOfReps: event.target[2].value,
                weight: event.target[3].value
            });

            event.preventDefault(); // To stop page from refreshing on submit
        }}>
            <div>
                <label>
                    Exercise Name: 
                    <input className="input" type="text" defaultValue={exercise.name}/>
                </label>
                <br />
                <label>
                    Number of Sets: 
                    <input className="input" type="text" defaultValue={exercise.numberOfSets}/>
                </label>
                <br />
                <label>
                    Number of Reps: 
                    <input className="input" type="text" defaultValue={exercise.numberOfReps}/>
                </label>
                <br />
                <label>
                    Weight: 
                    <input className="input" type="text" defaultValue={exercise.weight} />
                    lbs.
                </label>
            </div>

            <input className="button" type="submit" />
        </form>
    );
}

export default WorkoutForm;