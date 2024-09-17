import React from 'react';
import { useTrafficLight } from '../TrafficLightContext';

const GreenLight = () => {
  const { state } = useTrafficLight();
  return (
    <div className={`light green ${state.currentLight === 'green' ? 'active' : ''}`}>
      {state.currentLight === 'green' && <span>{state.timer}</span>}
    </div>
  );
};

export default GreenLight;
