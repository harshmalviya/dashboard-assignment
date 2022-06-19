import React from 'react';

function DaysSchedule() {
  return (
    <div>
      <div className="bg-white rounded-xl col-span-1 p-5 px-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-heading font-bold text-xl">Today's Schedule</h1>
          </div>
          <div className="text-lightGrey text-sm">
            <h1>
              See All&nbsp;&nbsp;<i className="fa-solid fa-angle-right"></i>
            </h1>
          </div>
        </div>
        <div>
          <div className="border-l-4 border-lightGreen pl-3 my-4">
            <h1>Meeting with suppliers from Kuta Bali</h1>
            <h1 className="text-lightGrey">14:00 - 15:00</h1>
            <h1 className="text-lightGrey">at Sunset Road, Kuta Bali</h1>
          </div>
          <div className="border-l-4 border-primaryPurple pl-3">
            <h1>Check operation at Giga Factory 1</h1>
            <h1 className="text-lightGrey">18:00 - 20:00</h1>
            <h1 className="text-lightGrey">at Central Jakarta</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaysSchedule;
