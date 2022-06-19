import React from 'react';

function AccountDetails() {
  return (
    <div className="bg-white rounded-2xl p-10 py-6 md:p-5 lg:p-10 mb-10">
      <h1 className="font-heading font-bold text-lg mb-5">Account</h1>
      <div>
        <form action="">
          <div className="mb-5 flex flex-col">
            <label className="mb-2" htmlFor="">
              Email Address
            </label>
            <input
              className="bg-inputGrey rounded-lg p-1 pl-3 outline-none"
              type="text"
              value={'suryawigunaa@gmail.com'}
            />
          </div>
          <div className="mb-5 flex flex-col">
            <label className="mb-2" htmlFor="">
              Current Password
            </label>
            <input
              className="bg-inputGrey rounded-lg p-1 pl-3 outline-none"
              type="password"
              value={'123456'}
            />
          </div>
          <div className="mb-5 flex flex-col">
            <label className="mb-2" htmlFor="">
              New Password
            </label>
            <input
              className="bg-inputGrey rounded-lg p-1 pl-3 outline-none"
              type="text"
              value={'123456'}
            />
          </div>
          <div className="flex justify-end">
            <button className="text-white bg-buttonBlue py-1 px-5 rounded-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountDetails;
