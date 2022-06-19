import React from 'react';
import Layout from '../components/Layout';
import AccountDetails from '../components/settings-components/AccountDetails';
import DangerZone from '../components/settings-components/DangerZone';
import ProfileDetails from '../components/settings-components/ProfileDetails';
import SecurityDetails from '../components/settings-components/SecurityDetails';

function SettingsPage() {
  return (
    <Layout title={'Settings'}>
      <section className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-5 gap-10 my-8">
        <div className="lg:col-span-3 md:col-span-2">
          <ProfileDetails />
        </div>
        <div className="lg:col-span-2 md:col-span-1">
          <AccountDetails />
          <SecurityDetails />
          <DangerZone />
        </div>
      </section>
    </Layout>
  );
}

export default SettingsPage;
