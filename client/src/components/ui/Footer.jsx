import NovityImg from "/novity.svg";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  // const month = date.getMonth() + 1
  // const day = date.getDate()
  // const TODAY = day + '/' + month + '/' + year
  return (
    <footer className="absolute bottom-auto lg:bottom-0 left-0 w-full -z-10">
      <div className="px-4 py-8 md:px-6 lg:px-8 xl:px-12">
        <div className="mt-6 lg:mt-12 border-t border-gray-100 pt-6">
          <div className="text-center lg:flex lg:justify-between">
            <div className="text-sm text-gray-500 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
              <a
                className="hover:text-sky-600 hover:underline transition"
                href="#"
              >
                Politique de confidentialité et Conditions d’utilisation
              </a>
              <span className="hidden lg:inline">&middot;</span>
              <a
                className="hover:text-sky-600 hover:underline transition"
                href="#"
              >
                Nous contacter
              </a>
              <span className="hidden lg:inline">&middot;</span>
              <div className="flex items-center hover:text-sky-600 space-x-1">
                <i className="ri-global-line"></i>
                <a className="hover:underline transition" href="#">
                  Changer de région
                </a>
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>
            <div className="text-sm text-gray-500 lg:order-first flex justify-center items-center mt-4 lg:mt-0">
              &copy; {year}
              <img
                src={NovityImg}
                alt="Novity logo"
                className="w-8 h-8 ml-2 cursor-pointer grayscale hover:filter-none"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
