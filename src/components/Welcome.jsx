import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function Welcome() {
  const [showAlert, setShowAlert] = useState(false);

  function handleButtonClick() {
    setShowAlert(true);
  };

  return (
    <div className='my-3'>
      <div className='d-flex justify-content-center mb-3'>
        <Button variant={showAlert ? 'success' : 'info'} onClick={handleButtonClick}>
            {showAlert ? 'Alert mostrato' : 'Mostra Alert'}
        </Button>
      </div>

      {showAlert && (
        <div className='d-flex justify-content-center'>
          <Alert style={{ width: '50%' }} variant="success" onClose={() => setShowAlert(false)} dismissible>
              This is a success alert—check it out!
          </Alert>
        </div>
      )}
    </div>
  );
}