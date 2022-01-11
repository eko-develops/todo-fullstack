import { AiFillHome } from "react-icons/ai";
import SidebarIcon from "./SidebarIcon";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-32 m-0 bg-gray-900 text-white flex flex-col shadow-lg">
      <SidebarIcon icon={<AiFillHome />} />
      <SidebarIcon icon={<AiFillHome />} />
      <SidebarIcon icon={<AiFillHome />} />
    </div>
  );
};

export default Sidebar;
