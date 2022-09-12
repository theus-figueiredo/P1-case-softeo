import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

export default function SuccessMsg(props) {
  const { showSuccess, setShowSuccess } = useContext(Context);

  function handleCloseClick () {
    setShowSuccess(false);
  }

  useEffect(() => {
    const dismissAlert = async () => {
      await setTimeout(handleCloseClick, 3500);
    };
    dismissAlert();
  });

  return (
    <div>
      {
        showSuccess &&
        <div class="alert alert-success alert-dismissible fade show">
          <strong>Sucesso!</strong> {props.message}
          <button type="button" class="btn-close" data-bs-dismiss="alert" onClick={ handleCloseClick }></button>
        </div>
      }
    </div>
  );
};
