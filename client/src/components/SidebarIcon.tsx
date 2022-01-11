import { IconBaseProps } from "react-icons";

interface Props {
  icon: IconBaseProps;
}

const SidebarIcon: React.FC<Props> = ({ icon }: Props) => {
  return (
    <>
      <div>{<i className="w-12 h-12">{icon}</i>}</div>
    </>
  );
};

export default SidebarIcon;
