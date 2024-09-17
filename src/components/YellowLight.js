import React from 'react';
import { useTrafficLight } from '../TrafficLightContext';

const YellowLight = () => {
  const { state } = useTrafficLight();
  return (
    <div className={`light yellow ${state.currentLight === 'yellow' ? 'active' : ''}`}>
      {state.currentLight === 'yellow' && <span>{state.timer}</span>}
    </div>
  );
};

export default YellowLight;
