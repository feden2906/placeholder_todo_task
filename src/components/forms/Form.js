import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";

import { editTask, setTask } from "../../redux";

export const Form = () => {
    const [formState, setFormState] = useState({ title: '', completed: false });

    const history = useHistory();
    const dispatch = useDispatch();
    const { state } = useLocation();

    useEffect(() => {
        if(state) {
            setFormState(state);
        }
    }, [state]);

    const taskToAdd = (e) => setFormState({...formState, [e.target.name]: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
        formState.id
            ? dispatch(editTask(formState))
            : dispatch(setTask(formState));

        setFormState({title: '', completed: false });
        if(formState.id) history.push('/todos');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type={'text'} name={'title'} value={formState.title} onChange={taskToAdd}/>
                {/*<input type={'text'} name={'completed'} value={formState.completed} onChange={taskToAdd}/>*/}
                <button>Save</button>
            </form>
        </div>
    );
}
