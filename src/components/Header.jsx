import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [active, setActive] = useState("");

  const handleClick = () => {
    setActive(active === "" ? "active" : "");
  };
  const handleClickLink = () => {
    setActive("");
  };
  return (
    <>
      <div className="bg-quaternary h-[110px] flex items-center px-8 justify-between z-30 relative">
        <Link to="/" onClick={handleClickLink}>
          <h1 className="mr-5 text-xl">Sunborn Studios</h1>
        </Link>
        <nav className="flex gap-6 max-md:hidden">
          <Link to="/">Home</Link>
          <div>&#8226;</div>
          <Link to="/about">About</Link>
          <div>&#8226;</div>
          <Link to="/galery">Galery</Link>
          <div>&#8226;</div>
          <Link to="/contact">Contact/Bookings</Link>
        </nav>
        <label className="burger z-10 top-[30%] lg:hidden">
          <input
            type="checkbox"
            onChange={handleClick}
            checked={active === "active"}
          />
          <span className="burgerline">{}</span>
          <span className="burgerline">{}</span>
          <span className="burgerline">{}</span>
        </label>
      </div>
      <nav
        className={`absolute z-10 flex flex-col items-center gap-1 p-6 right-0 rounded-bl-sm translate-y-[-100%] bg-quaternary w-fit min-md:hidden menu ${active}`}
      >
        <Link
          to="/"
          onClick={handleClickLink}
          className="w-full text-sm text-center"
        >
          Home
        </Link>
        <div>&#8226;</div>
        <Link
          to="/about"
          onClick={handleClickLink}
          className="w-full text-sm text-center"
        >
          About
        </Link>
        <div>&#8226;</div>
        <Link
          to="/galery"
          onClick={handleClickLink}
          className="w-full text-sm text-center"
        >
          Galery
        </Link>
        <div>&#8226;</div>
        <Link
          to="/contact"
          onClick={handleClickLink}
          className="w-full text-sm text-center"
        >
          Contact/Bookings
        </Link>
      </nav>
    </>
  );
}
