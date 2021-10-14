import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { deleteTask, editTask } from '../../redux';

export const Todo = ({ task }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const setFormState = (state) => history.push('/createTodo', state);

  const changeStatus = (task) => dispatch(editTask({ ...task, completed: !task.completed }));

  return (
    <div>
      <div>{JSON.stringify(task)}</div>

      <button onClick={() => setFormState(task)}> Edit</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      <button onClick={() => changeStatus(task)}>Change status</button>
    </div>
  );
};
