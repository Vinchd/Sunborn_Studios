import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-primary h-[110px] flex items-center px-8 justify-between">
      <Link to="/">
        <h1 className="text-xl">Sunborn Studios</h1>
      </Link>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <div>&#8226;</div>
        <Link to="/about">About</Link>
        <div>&#8226;</div>
        <Link to="/galery">Galery</Link>
        <div>&#8226;</div>
        <Link to="/contact">Contact/Bookings</Link>
      </div>
    </div>
  );
}
