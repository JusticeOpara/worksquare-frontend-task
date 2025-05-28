import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <section className="h-full">
      <div className="lg:h-[50vh] bg-gray-200 text-white items-center flex justify-center lg:px-52 px-4">
        <Newsletter />
      </div>

      <footer className="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-8 py-12 rounded-t-3xl">
        <div className="max-w-6xl mx-auto">
          {/* Main heading */}
          <div className="text-center mb-12 w-full">
            <h1 className="lg:text-9xl text-4xl font-normal mb-2 font-quicksand">DreamDwell</h1>
            <h2 className="text-4xl font-light italic justify-end flex">Estates</h2>
          </div>

          {/* Navigation links grid */}
          <div className="grid grid-cols-4 gap-8 mb-16 font-roboto font-medium">
       
            <div className="space-y-6">
              <a
                href="#"
                className="block lg:text-lg font-light hover:text-blue-200 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="block lg:text-lg font-light hover:text-blue-200 transition-colors"
              >
                Listing
              </a>
              <a
                href="#"
                className="block lg:text-lg font-light hover:text-blue-200 transition-colors"
              >
                Agent
              </a>
            </div>


            <div className="space-y-6">
              <a
                href="#"
                className="block lg:text-lg font-light hover:text-blue-200 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="block lg:text-lg font-light hover:text-blue-200 transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="block lg:text-lg font-light hover:text-blue-200 transition-colors"
              >
                Contact
              </a>
            </div>

    
            <div className="space-y-6">
              <a
                href="#"
                className="block lg:text-lg font-light hover:text-blue-200 transition-colors"
              >
                Whitepaper
              </a>
              <a
                href="#"
                className="block lg:text-lg font-light hover:text-blue-200 transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="block lg:text-lg font-light hover:text-blue-200 transition-colors"
              >
                FAQs
              </a>
            </div>

       
            <div className="space-y-6">
              <a
                href="#"
                className="block lg:text-lg font-light hover:text-blue-200 transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="block lg:text-lg font-light hover:text-blue-200 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="block lg:text-lg font-light hover:text-blue-200 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="block lg:text-lg font-light hover:text-blue-200 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>


          <div className="border-t border-white mb-6"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-lg font-light">
              © Copyright 2023 DreamDwell Estates - All right reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
