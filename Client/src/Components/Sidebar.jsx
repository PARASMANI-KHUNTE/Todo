import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCalendar, faStar, faBook , faUser , faPlus} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
      <div className="w-64 bg-green-50 p-4 rounded-md shadow-md">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.pinimg.com/736x/0c/00/30/0c0030b91a654d4e1aa5fd9af6adabb2.jpg" // Replace with your image URL
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <h2 className="mt-2 text-lg font-medium text-gray-800">Kemio Chan</h2>
        </div>
  
        {/* Navigation */}
        <nav className="mt-6">
          <ul className="space-y-2">
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100">
              <span className="text-gray-700">
                <FontAwesomeIcon icon={faClipboardList} />
              </span>
              <span className="font-medium">All Tasks</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100">
              <span className="text-gray-700">
                <FontAwesomeIcon icon={faCalendar} />
              </span>
              <span className="font-medium">Today</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100">
              <span className="text-gray-700">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="font-medium">Important</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100">
              <span className="text-gray-700">
                <FontAwesomeIcon icon={faBook} />
              </span>
              <span className="font-medium">Planned</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100">
              <span className="text-gray-700">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="font-medium">Assigned to me</span>
            </li>
          </ul>
  
          <button className="mt-4 w-full flex items-center gap-3 p-2 rounded-lg border border-green-200 text-green-700 hover:bg-green-100">
            <span className="text-gray-700">
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span className="font-medium">Add list</span>
          </button>
        </nav>
  
        {/* Task Progress */}
        <div className="mt-6 p-4 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-700">Today Tasks</h3>
          <div className="mt-3 flex items-center justify-center">
            <div className="relative">
              {/* Replace this with an actual chart library */}
              <div className="w-20 h-20 rounded-full border-4 border-green-600 border-t-transparent animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                11
              </div>
            </div>
          </div>
          <div className="mt-2 text-center">
            <span className="text-xs text-green-600">Pending</span> &nbsp;|&nbsp;
            <span className="text-xs text-gray-600">Done</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  