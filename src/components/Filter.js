import React, { useState } from 'react';

function Filter({ handleHideFilter, handleFilters }) {
  const [gender, setGender] = useState('All');
  const [role, setRole] = useState('All');
  function handleFilterSubmit(e) {
    e.preventDefault();
    handleFilters({ gender, role });
    handleHideFilter();
  }

  return (
    <div className="bg-white rounded-2xl p-6 py-4 absolute top-10 left-0 shadow-md z-10">
      <h1 className="font-heading font-bold text-lg mb-5">Filters</h1>
      <form onSubmit={handleFilterSubmit}>
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-8">
            <label className="font-bold text-md" htmlFor="gender">
              Gender:
            </label>
            <select
              name="gender"
              id="gender"
              value={gender}
              className="outline-none"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="flex items-center justify-between mt-2">
            <label className="font-bold text-md" htmlFor="">
              Role:
            </label>
            <select
              name="role"
              id="role"
              value={role}
              className="outline-none"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>
          <div className="flex justify-end mt-2">
            <button
              className="text-white bg-primary py-1 px-5 rounded-lg"
              type="submit"
            >
              Done
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filter;
