import React, { useState } from 'react';
import Switch from 'react-switch';

function SecurityDetails() {
  const [checked, setChecked] = useState(true);
  return (
    <div className="bg-white rounded-2xl p-10 py-6 md:p-5 lg:p-10 mb-10">
      <h1 className="font-heading font-bold text-lg mb-5">Security</h1>
      <div className="flex justify-between items-center">
        <h1>2-Step Verification</h1>
        <Switch
          onColor={'#88E15E'}
          checkedIcon={false}
          onChange={() => setChecked(!checked)}
          checked={checked}
        />
      </div>
    </div>
  );
}

export default SecurityDetails;
