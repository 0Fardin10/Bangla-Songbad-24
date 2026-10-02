import Image from "next/image";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md border-b border-gray-100">
      {/* Left side: Empty placeholder or space for additional items */}
      <div className="w-1/3"></div>

      {/* Center: Logo, title, and date below */}
      <div className="flex flex-col items-center justify-center w-1/3 text-center">
        <div className="flex items-center space-x-2.5">
          <Image
            className="w-10 h-10 rounded-full object-cover shadow-sm"
            src="/logo.jpeg"
            alt="Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-extrabold text-gray-900 tracking-tight">
            Bangla News 24
          </span>
        </div>
        <span className="text-xs font-medium text-gray-500 mt-1">{date}</span>
      </div>

      {/* Right side: Bangla Sign In and Sign Up buttons */}
      <div className="flex items-center justify-end space-x-3 w-1/3">
        {/* Sign In Button in Bangla */}
        <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-transparent border border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-400 active:scale-95 transition-all duration-200 shadow-2xs">
          সাইন ইন
        </button>

        {/* Sign Up Button in Bangla */}
        <button className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg">
          সাইন আপ
        </button>
      </div>
    </header>
  );
};

export default Header;