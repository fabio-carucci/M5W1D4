import React, { useContext, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { ThemeContext } from '../context/ThemeContextProvider';

export default function Welcome() {
  const [showAlert, setShowAlert] = useState(false);

  const {value} = useContext(ThemeContext);

  function handleButtonClick() {
    setShowAlert(!showAlert);
  };

  return (
    <div className={`py-3 bg-${value}`}>
      <div className='d-flex justify-content-center mb-3'>
        <Button variant={showAlert ? 'success' : 'info'} onClick={handleButtonClick}>
            {showAlert ? 'SEI IL BENVENUTO' : 'WELCOME'}
        </Button>
      </div>

      {showAlert && (
        <div className='d-flex justify-content-center'>
          <Alert style={{ width: '75%' }} variant="success" onClose={() => setShowAlert(false)} dismissible>
              Questa è la pagina di libri che abbiamo creato insieme, grazie!
          </Alert>
        </div>
      )}
    </div>
  );
}