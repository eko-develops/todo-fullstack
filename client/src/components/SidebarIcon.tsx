import { IconBaseProps } from "react-icons";

interface Props {
  icon: IconBaseProps;
}

const SidebarIcon: React.FC<Props> = ({ icon }: Props) => {
  return <i className="flex flex-col justify-center mx-2">{icon}</i>;
};

export default SidebarIcon;
