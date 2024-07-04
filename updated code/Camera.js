import React, { useState, useEffect } from 'react';

function ARScene() {
  useEffect(() => {
    const loadScripts = async () => {
      const aframeScript = document.createElement('script');
      aframeScript.src = 'https://aframe.io/releases/1.0.4/aframe.min.js';
      document.head.appendChild(aframeScript);

      await new Promise(resolve => aframeScript.onload = resolve);

      const arjsScript = document.createElement('script');
      arjsScript.src = 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js';
      document.head.appendChild(arjsScript);

      await new Promise(resolve => arjsScript.onload = resolve);

      console.log('AR scripts loaded');
    };

    loadScripts();
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-marker preset="hiro">
          <a-box position="0 0.5 0" material="color: yellow;"></a-box>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

function Camera() {
  const [isARMode, setIsARMode] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (window.location.protocol !== 'https:') {
      setError("AR requires HTTPS. Please use a secure connection.");
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setError("Your browser doesn't support camera access");
    }
  }, []);

  const enterARMode = () => {
    if (error) return;

    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => setIsARMode(true))
      .catch(err => setError("Failed to access camera: " + err.message));
  };

  if (isARMode) {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <ARScene />
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button
        style={styles.button}
        onClick={enterARMode}
        disabled={!!error}
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