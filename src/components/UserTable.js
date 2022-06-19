import React, { useState } from 'react';
import Filter from './Filter';

function UserTable({ data, handleSearch, loading, handleFilters }) {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className="bg-white rounded-2xl p-10 py-6 my-5">
      <div className="md:flex items-center justify-between">
        <h1 className="font-heading font-bold text-lg">User Records</h1>
        <div className="flex justify-between mt-2 md:mt-0 space-x-3 items-center">
          <div className="hidden md:flex justify-between items-center bg-inputGrey p-1 px-3 rounded-xl">
            <input
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search in table..."
              className="outline-none placeholder:text-secondaryText bg-transparent w-full "
            />
            <i className="fa fa-search text-secondaryText"></i>
          </div>
          <div className="relative">
            <button
              className="text-secondaryText border border-secondaryText py-1 px-3 rounded-lg"
              onClick={() => setShowFilters(!showFilters)}
            >
              <i className="fa-solid fa-filter"></i> Filter
            </button>
            {showFilters && (
              <Filter
                handleHideFilter={() => setShowFilters(false)}
                handleFilters={handleFilters}
              />
            )}
          </div>
          <button className="text-white bg-primary py-1 px-5 rounded-lg">
            <i className="fa-thin fa-plus"></i> Add
          </button>
        </div>
      </div>
      <div className="my-4">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : data.length > 0 ? (
          data.map((user) => (
            <div
              className="flex md:grid md:grid-cols-7 lg:grid-cols-6 justify-between items-center bg-userGrey mb-5 px-3 py-2 rounded-lg"
              key={user.id}
            >
              <div className="col-span-1">
                <img
                  src={user.profileImage}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>
              <div className="col-span-1">
                <h1>{user.name}</h1>
              </div>
              <div className="hidden md:block col-span-2 md:col-span-3 lg:col-span-2">
                <h1>{user.email}</h1>
              </div>
              <div className="col-span-1">
                <h1>{user.gender}</h1>
              </div>
              <div className="col-span-1">
                <h1>{user.role}</h1>
              </div>
            </div>
          ))
        ) : (
          <h1>No Users Found</h1>
        )}
      </div>
      <div className="flex justify-end space-x-2">
        <button className="p-1 px-2 rounded-xl border border-fieldColor  hover:bg-fieldColor">
          <i className="fa-solid fa-angle-left"></i>
        </button>
        {[1, 2, 3, 4, 5].map((item) => (
          <button
            className="p-1 px-2 rounded-xl border border-fieldColor  hover:bg-fieldColor"
            key={item}
          >
            {item}
          </button>
        ))}
        <button className="p-1 px-2 rounded-xl border border-fieldColor hover:bg-fieldColor">
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

export default UserTable;
