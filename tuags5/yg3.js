import React from 'react';

function Notification({ priority }) {
  let message;

  switch (priority) {
    case 'low':
      message = 'No immediate action required.';
      break;
    case 'medium':
      message = 'Please address this issue soon.';
      break;
    case 'high':
      message = 'Immediate action required!';
      break;
    default:
      message = 'Unknown priority';
  }

  return <p className={priority}>{message}</p>;
}

export default Notification;