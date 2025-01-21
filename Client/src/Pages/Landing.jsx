import Sidebar from '../Components/Sidebar';
import ToDo from '../Components/ToDo';
import LandingNav from '../Components/LandingNav';
import { useSelector } from 'react-redux';

const Landing = () => {
  const { isMenu } = useSelector((state) => state.navBtn); // Access the menu state

  return (
    <div className="flex flex-col shadow-md w-full  h-screen" >
      <LandingNav />
      <div className="flex shadow-md w-full h-full">
        {isMenu && <Sidebar />} {/* Conditionally render Sidebar based on isMenu */}
        <ToDo />
      </div>
    </div>
  );
};

export default Landing;
