import NovislackImg from "/novislack.svg";

const Header = () => {
  return (
    <header>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="items-center flex space-x-3 justify-center mb-10 sm:mb-0">
          <img src={NovislackImg} alt="NoviSlack Logo" className="w-10 h-10" />
          <p className="bg-gradient-to-l from-yellow-500 via-sky-500 to-sky-600 text-transparent bg-clip-text text-4xl font-extrabold">
            NoviSlack
          </p>
        </div>

        <div className="text-center sm:text-right">
          <h1 className="text-sm font-bold text-gray-900 sm:text-lg">
            Vous découvrez NoviSlack ?
          </h1>
          <p className="mt-1.5 text-lg font-bold text-sky-700 hover:text-sky-500 cursor-pointer hover:underline">
            Créer un compte 🎉
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
