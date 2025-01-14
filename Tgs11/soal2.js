import { useState } from 'react';

function useTaskStatus() {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  const toggleTaskStatus = () => {
    setIsTaskCompleted(!isTaskCompleted);
  };

  return { isTaskCompleted, toggleTaskStatus };
}

export default useTaskStatus;

// import React from 'react';
// import useTaskStatus from './useTaskStatus';

// function Task() {
//   const { isTaskCompleted, toggleTaskStatus } = useTaskStatus();

//   return (
//     <div>
//       <h1>{isTaskCompleted ? "✓ Task Completed" : "✗ Task Not Completed"}</h1>
//       <button onClick={toggleTaskStatus}>Toggle Task</button>
//     </div>
//   );
// }

// export default Task;             