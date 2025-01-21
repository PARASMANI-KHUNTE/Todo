import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,  faThLarge, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsMenu, toggleIsTheme, toggleIsGrid, setSearch } from '../Redux/navBtnSlice'; // Import actions

const LandingNav = () => {
  const dispatch = useDispatch();

  // Get the state from Redux
  const { isMenu, theme, grid, search } = useSelector((state) => state.navBtn);

  const handleSidebar = () => {
    dispatch(toggleIsMenu()); // Toggle the menu state
  };

  const handleThemeToggle = () => {
    dispatch(toggleIsTheme()); // Toggle the theme state
  };

  const handleGridToggle = () => {
    dispatch(toggleIsGrid()); // Toggle the grid state
  };

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value)); // Update the search state
  };

  return (
    <>
      <nav className="flex items-center justify-between p-3 shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={handleSidebar}>
            <FontAwesomeIcon
              className={`h-5 ${isMenu ? 'text-green-500' : 'text-green-950'}`}
              icon={faBars}
            />
          </button>
          <img src="/logo.png" width={120} alt="Logo" />
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="p-2 border rounded-md"
          />
          <button onClick={handleGridToggle}>
            <FontAwesomeIcon
              className={`h-5 ${grid ? 'text-green-500' : 'text-green-950'}`}
              icon={faThLarge}
            />
          </button>
          <button onClick={handleThemeToggle}>
            <FontAwesomeIcon
              className={`h-5 ${theme ? 'text-yellow-500' : 'text-green-950'}`}
              icon={faMoon}
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export default LandingNav;
