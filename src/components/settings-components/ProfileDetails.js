import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../store/authContext';

function ProfileDetails() {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-white rounded-2xl p-10 lg:px-5 py-6">
      <h1 className="font-heading font-bold text-lg mb-5">Profile</h1>
      <div className="flex flex-col xl:flex-row gap-10">
        <div className="flex flex-col items-center space-y-2">
          <img
            src={
              user
                ? user.photoURL
                : 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            alt=""
            className="h-24 w-24 rounded-full object-cover"
          />
          <button className="text-secondaryText border border-secondaryText px-3 rounded-lg">
            Change
          </button>
        </div>
        <div>
          <form>
            <div className="flex flex-col sm:flex-row justify-between gap-5 mb-5">
              <div className="flex flex-col">
                <label className="mb-2" htmlFor="">
                  First Name
                </label>
                <input
                  className="bg-inputGrey rounded-lg p-1 pl-3 outline-none"
                  type="text"
                  value={'Surya'}
                />
              </div>
              <div className="flex flex-col justify-start">
                <label className="mb-2" htmlFor="">
                  Last Name
                </label>
                <input
                  className="bg-inputGrey rounded-lg p-1 pl-3 outline-none"
                  type="text"
                  value={'Wiguna'}
                />
              </div>
            </div>
            <div className="mb-5 flex flex-col">
              <label className="mb-2" htmlFor="">
                Date of Birth
              </label>
              <input
                className="bg-inputGrey rounded-lg p-1 pl-3 outline-none"
                type="text"
                value={'28 Feburary 1996'}
              />
            </div>
            <div className="mb-5 flex flex-col">
              <label className="mb-2" htmlFor="">
                Phone Number
              </label>
              <input
                className="bg-inputGrey rounded-lg p-1 pl-3 outline-none"
                type="text"
                value={'+1283716291'}
              />
            </div>
            <div className="mb-5 flex flex-col">
              <label className="mb-2" htmlFor="">
                Address
              </label>
              <input
                className="bg-inputGrey rounded-lg p-1 pl-3 outline-none"
                type="text"
                value={'323 Fifth Ave. Canandaigua, NY'}
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
    </div>
  );
}

export default ProfileDetails;
