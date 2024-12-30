import React, { useState } from 'react';

interface SettingsPopupProps {
  onClose: () => void;
  onSave: (countdownTime: number, teamTime: number) => void;
}

const SettingsPopup: React.FC<SettingsPopupProps> = ({ onClose, onSave }) => {
  const [countdownTime, setCountdownTime] = useState<number>(0);
  const [teamTime, setTeamTime] = useState<number>(0);

  const handleSave = () => {
    onSave(countdownTime, teamTime);
    onClose();
  };

  return (
    <div className="settings-popup">
      <div className="settings-popup-content">
        <h2>Settings</h2>
        <label>
          Countdown Time:
          <input
            type="number"
            value={countdownTime}
            onChange={(e) => setCountdownTime(Number(e.target.value))}
          />
        </label>
        <label>
          Team Time:
          <input
            type="number"
            value={teamTime}
            onChange={(e) => setTeamTime(Number(e.target.value))}
          />
        </label>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default SettingsPopup;
