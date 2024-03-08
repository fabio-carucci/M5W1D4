import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function Welcome() {
  const [showAlert, setShowAlert] = useState(false);

  function handleButtonClick() {
    setShowAlert(true);
  };

  return (
    <div>
        <Button variant="primary" onClick={handleButtonClick}>
            {showAlert ? 'Alert mostrato' : 'Mostra Alert'}
        </Button>

        {showAlert && (
            <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                This is a success alert—check it out!
            </Alert>
        )}
    </div>
  );
}