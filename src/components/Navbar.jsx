import { MdOutlineTrackChanges } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { handleLogout } from "../firebase/authFunctions";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-white text-black hover:bg-slate-400 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-slate-400 hover:text-white rounded-md px-3 py-2";

  const onLogoutClick = async () => {
    await handleLogout();
    navigate("/");
  };

  return (
    <nav className="bg-black border-b border-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink
              className="flex flex-shrink-0 items-center mr-4"
              to="/home"
            >
              <MdOutlineTrackChanges className="h-10 w-auto text-white" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Job Tracker
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/home" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={linkClass}>
                  Add Job
                </NavLink>
                <button
                  onClick={onLogoutClick}
                  className="text-white hover:bg-slate-400 hover:text-white rounded-md px-3 py-2"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
