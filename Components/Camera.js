import React, { useState } from 'react';
import ARDecorator from './ARDecorator';

function Camera() {
  const [isARMode, setIsARMode] = useState(false);

  if (isARMode) {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <ARDecorator />
        <button
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            padding: '10px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
          }}
          onClick={() => setIsARMode(false)}
        >
          Exit AR Mode
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1>Camera</h1>
      <button
        style={styles.button}
        onClick={() => setIsARMode(true)}
      >
        Enter AR Mode
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default Camera;