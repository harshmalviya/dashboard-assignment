import React from 'react';

function DangerZone() {
  return (
    <div className="bg-white rounded-2xl p-10 md:p-5 lg:p-10 py-6">
      <h1 className="font-heading font-bold text-lg mb-5 text-red-700">
        Danger Zone
      </h1>

      <button className="text-red-700 border border-red-700 p-1 w-full text-center rounded-lg">
        Delete My Account
      </button>
    </div>
  );
}

export default DangerZone;
