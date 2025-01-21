import  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleComplete, toggleImportant } from '../Redux/tasksSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';

const ToDo = () => {
  const dispatch = useDispatch();
  const { pending, completed } = useSelector((state) => state.tasks);
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(
        addTask({
          id: Date.now(),
          text: taskText,
          isImportant: false,
        })
      );
      setTaskText('');
    }
  };

  return (
    <div className="p-4   bg-green-50 rounded-md shadow-md w-full max-w-xxl mx-auto">
      {/* Add Task */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add A Task"
          className="flex-1 p-2 border rounded-lg"
        />
        <button
          onClick={handleAddTask}
          className="ml-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          <FontAwesomeIcon icon={faPlus} /> Add Task
        </button>
      </div>

      {/* Pending Tasks */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">Pending</h3>
        {pending.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-2 border-b hover:bg-green-100"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => dispatch(toggleComplete(task.id))}
              />
              <span>{task.text}</span>
            </div>
            <FontAwesomeIcon
              icon={faStar}
              className={`cursor-pointer ${task.isImportant ? 'text-yellow-500' : 'text-gray-400'}`}
              onClick={() => dispatch(toggleImportant(task.id))}
            />
          </div>
        ))}
      </div>

      {/* Completed Tasks */}
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Completed</h3>
        {completed.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-2 border-b hover:bg-green-100"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked
                onChange={() => dispatch(toggleComplete(task.id))}
              />
              <span className="line-through">{task.text}</span>
            </div>
            <FontAwesomeIcon
              icon={faStar}
              className={`cursor-pointer ${task.isImportant ? 'text-yellow-500' : 'text-gray-400'}`}
              onClick={() => dispatch(toggleImportant(task.id))}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
