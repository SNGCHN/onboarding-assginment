import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-[1440px] mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-[18px] hover:text-indigo-600">
            <Link to="/">OnBoarding</Link>
          </h1>
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
