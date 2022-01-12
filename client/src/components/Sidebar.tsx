import {
  AiFillHome,
  AiOutlineOrderedList,
  AiFillClockCircle,
  AiFillCalendar,
} from "react-icons/ai";
import SidebarIcon from "./SidebarIcon";

const Sidebar: React.FC = () => {
  return (
    <div className="top-0 left-0 h-screen w-[200px] m-0 bg-gray-900 text-white flex flex-col shadow-xl">
      <div className="flex  pl-4 py-4 hover:bg-gray-700">
        <SidebarIcon icon={<AiFillHome size={16} />} />
        <h2>Home</h2>
      </div>
      <div className="flex pl-4 py-4 hover:bg-gray-700">
        <SidebarIcon icon={<AiOutlineOrderedList size={16} />} />
        <h2>Todos</h2>
      </div>
      <div className="flex pl-4 py-4 hover:bg-gray-700">
        <SidebarIcon icon={<AiFillClockCircle size={16} />} />
        <h2>Pomodoro</h2>
      </div>
      <div className="flex pl-4 py-4 hover:bg-gray-700">
        <SidebarIcon icon={<AiFillCalendar size={16} />} />
        <h2>Calendar</h2>
      </div>
    </div>
  );
};

export default Sidebar;
