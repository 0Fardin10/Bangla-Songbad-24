import Image from "next/image";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full bg-white shadow-md border-b border-gray-200">
      {/* Top Section: Header Main Bar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side: Empty placeholder for layout balance */}
        <div className="w-1/3"></div>

        {/* Center: Logo, title, and date below */}
        <div className="flex flex-col items-center justify-center w-1/3 text-center">
          <div className="flex items-center space-x-2.5">
            <Image
              className="w-10 h-10 rounded-full object-cover shadow-sm border border-gray-200"
              src="/logo.jpeg"
              alt="Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              Bangla News 24
            </span>
          </div>
          <span className="text-xs font-medium text-gray-500 mt-0.5">{date}</span>
        </div>

        {/* Right side: Modern Sign In and Sign Up buttons */}
        <div className="flex items-center justify-end space-x-3 w-1/3">
          <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-transparent border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer transition-all duration-200">
            সাইন ইন
          </button>
          <button className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 cursor-pointer transition-all duration-200 shadow-sm">
            সাইন আপ
          </button>
        </div>
      </div>

      {/* Bottom Section: Navigation Links below the header */}
      <NavLinks />
    </header>
  );
};

export default Header;