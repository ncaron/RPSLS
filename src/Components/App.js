import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Scoreboard from '../Containers/Scoreboard';
import Choices from '../Containers/Choices';

const App = () => {
  return (
    <div>
      <Header />
      <Choices />
      <Scoreboard />
      <Footer />
    </div>
  );
};

export default App;
