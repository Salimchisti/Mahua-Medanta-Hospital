// pages/Home.js
import Layout from '../components/Layout';
import Hero from '../Hero/hero';
import HeroPage from '../Hero/HeroPage';
import Excellence from './Excellence';
import Doctors from '../pages/Doctors'; // Import the Doctors component
import DirectorPage from './DirectorPage'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Excellence />  
      <HeroPage />
      <Doctors />  
      <DirectorPage />
    </Layout>
  );
};

export default Home;
