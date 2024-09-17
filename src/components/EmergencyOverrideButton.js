import React from 'react';
import { useTrafficLight } from '../TrafficLightContext';

const EmergencyOverrideButton = () => {
  const { dispatch } = useTrafficLight();

  const handleEmergencyOverride = () => {
    dispatch({ type: 'EMERGENCY_OVERRIDE' });
  };

  return (
    <button className="emergency-button" onClick={handleEmergencyOverride}>
      Emergency Override
    </button>
  );
};

export default EmergencyOverrideButton;
