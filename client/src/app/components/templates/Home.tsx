import DressesList from 'app/pages/pageDresses/DressesList';
import React from 'react';
import NavigationComponent from '../molecules/navigation/Navigation';
import SideSearch from '../molecules/search/SideSearch';

const Home = () => {
  return (
    <div>
      <NavigationComponent />
      {/* <SideSearch /> */}
      <DressesList />
    </div>
  );
};

export default Home;
