import {
  AiFillHome,
  AiOutlineOrderedList,
  AiFillClockCircle,
  AiFillCalendar,
} from "react-icons/ai";
import SidebarIcon from "./SidebarIcon";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="top-0 left-0 h-screen w-[200px] m-0 bg-gray-900 text-white flex flex-col shadow-xl">
      <Link to="/">
        <div className="flex pl-4 py-4 hover:bg-gray-700 transition ease-in-out delay-75">
          <SidebarIcon icon={<AiFillHome size={16} />} />
          <h2>home</h2>
        </div>
      </Link>
      <Link to="todos">
        <div className="flex pl-4 py-4 hover:bg-gray-700 transition ease-in-out delay-75">
          <SidebarIcon icon={<AiOutlineOrderedList size={16} />} />
          <h2>todos</h2>
        </div>
      </Link>
      <Link to="pomodoro">
        <div className="flex pl-4 py-4 hover:bg-gray-700 transition ease-in-out delay-75">
          <SidebarIcon icon={<AiFillClockCircle size={16} />} />
          <h2>pomodoro</h2>
        </div>
      </Link>
      <Link to="calendar">
        <div className="flex pl-4 py-4 hover:bg-gray-700 transition ease-in-out delay-75">
          <SidebarIcon icon={<AiFillCalendar size={16} />} />
          <h2>calendar</h2>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
