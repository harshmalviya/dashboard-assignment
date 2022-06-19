import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import UserTable from '../components/UserTable';

function UsersPage() {
  const [userData, setUserData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchUserData() {
    setLoading(true);
    try {
      const response = await fetch(
        'https://api.npoint.io/458e7c77b0fbef87dc01'
      );
      const data = await response.json();
      setUserData(data.userData);
      setSearchResults(data.userData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  function handleSearch(enteredWord) {
    if (enteredWord === '') {
      setSearchResults(userData);
    }
    const filteredData = userData.filter((user) => {
      return user.name.toLowerCase().includes(enteredWord.toLowerCase());
    });
    setSearchResults(filteredData);
  }

  const handleFilters = (filters) => {
    if (filters.gender === 'All' && filters.role !== 'All') {
      let filteredData = userData.filter((user) => user.role === filters.role);
      setSearchResults(filteredData);
    } else if (filters.role === 'All' && filters.gender !== 'All') {
      let filteredData = userData.filter((user) => {
        return user.gender === filters.gender;
      });
      setSearchResults(filteredData);
    } else if (filters.role === 'All' && filters.gender === 'All') {
      fetchUserData();
    } else if (filters.role !== 'All' && filters.gender !== 'All') {
      let filteredData = userData.filter(
        (user) => user.gender === filters.gender
      );
      setSearchResults(
        filteredData.filter((user) => user.role === filters.role)
      );
    }
  };

  return (
    <Layout title={'Users'}>
      <UserTable
        data={searchResults}
        handleSearch={handleSearch}
        handleFilters={handleFilters}
        loading={loading}
      />
    </Layout>
  );
}

export default UsersPage;
