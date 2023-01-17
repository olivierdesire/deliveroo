import logo from "../assets/img/logo-teal.svg";

const Header = () => {
  return (
    <>
      <header className="container">
        <img src={logo} alt="logo-teal" />
      </header>
      <section className="baseline"></section>
    </>
  );
};

export default Header;
