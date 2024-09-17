import React from 'react';
import { useTrafficLight } from '../TrafficLightContext';

const RedLight = () => {
  const { state } = useTrafficLight();
  return (
    <div className={`light red ${state.currentLight === 'red' ? 'active' : ''}`}>
      {state.currentLight === 'red' && <span>{state.timer}</span>}
    </div>
  );
};

export default RedLight;
