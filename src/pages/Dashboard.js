import React from 'react';
import DaysSchedule from '../components/DaysSchedule';
import InsightCards from '../components/InsightCards';
import Layout from '../components/Layout';
import LineGraph from '../components/LineGraph';
import PieChart from '../components/PieChart';

function Dashboard() {
  return (
    <Layout title={'Dashboard'}>
      <InsightCards />
      <LineGraph />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <PieChart />
        <DaysSchedule />
      </section>
    </Layout>
  );
}

export default Dashboard;
