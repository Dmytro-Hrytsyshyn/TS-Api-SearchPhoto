import css from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={css.title}>Welcome to PhotoFinder</h1>
    </div>
  );
};

export default Header;
