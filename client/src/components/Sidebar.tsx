import {
  AiFillHome,
  AiOutlineOrderedList,
  AiFillClockCircle,
} from "react-icons/ai";
import SidebarIcon from "./SidebarIcon";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-32 m-0 bg-gray-900 text-white flex flex-col shadow-lg">
      <div className="flex py-4 hover:bg-gray-700">
        <SidebarIcon icon={<AiFillHome size={16} />} />
        <h2>Home</h2>
      </div>
      <div className="flex py-4 hover:bg-gray-700">
        <SidebarIcon icon={<AiOutlineOrderedList size={16} />} />
        <h2>Todos</h2>
      </div>
      <div className="flex py-4 hover:bg-gray-700">
        <SidebarIcon icon={<AiFillClockCircle size={16} />} />
        <h2>Pomodoro</h2>
      </div>
    </div>
  );
};

export default Sidebar;
