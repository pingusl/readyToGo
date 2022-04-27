import logo from "../img/rocket.png";
const Header = () => {
  return (
    <header className="header">
      <span>
        <img src={logo} className="image" alt="rocketImage" />
      </span>

      <span> Ready To Go</span>
    </header>
  );
};
export default Header;
