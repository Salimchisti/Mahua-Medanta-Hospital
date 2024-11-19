// pages/Home.js
import Layout from '../components/Layout';
import Hero from '../Hero/hero';
import HeroPage from '../Hero/HeroPage';
import Excellence from './Excellence';
import Doctors from '../pages/Doctors'; // Import the Doctors component
import Specialities from './Specialities';


const Home = () => {
  return (
    <><Layout>
      <Hero />
      <Excellence />
      <HeroPage />
      <Specialities />
      <Doctors />
    </Layout>
    </>
  );
};

export default Home;
