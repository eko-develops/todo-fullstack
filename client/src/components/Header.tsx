interface Props {}

const Header = (props: Props) => {
  return (
    <header className="flex justify-between p-4 shadow-md">
      <span>Todo Fullstack</span>
      <nav>
        <ul className="flex">
          <li className="px-2">Home</li>
          <li className="px-2">About</li>
          <li className="px-2">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
