import React from 'react';

function DeliveryStatus({ status }) {
  let message;

  switch (status) {
    case 'processing':
      message = 'Your order is being processed.';
      break;
    case 'shipped':
      message = 'Your order has been shipped.';
      break;
    case 'delivered':
      message = 'Your order has been delivered!';
      break;
    default:
      message = 'Unknown status';
  }

  return <p>{message}</p>;
}

export default DeliveryStatus;