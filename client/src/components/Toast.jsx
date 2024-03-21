import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast() {
  const showToast = () => {
    toast.success('This is a success message!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      <ToastContainer />
    </div>
  );
}

export default Toast;
