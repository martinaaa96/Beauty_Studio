import aboutpics from "/aboutpics.jpg";
//import aboutpics1 from "/aboutpics1.jpg";
//import aboutpics2 from "/aboutpics2.jpg";

export default function Services() {
  return (
    <div className="container bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold text-center tracking-tight text-gray-900">
          Our Services
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative border border-black rounded-lg p-4">
            <div className=" w-full overflow-hidden rounded-lg lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                alt="image"
                src={aboutpics}
                className="w-full h-auto object-cover max-h-48"
              />

              <div className="mt-4 text-center">
                <h3 className="text-sm text-gray-700"> 
                    <span aria-hidden="true" className="absolute inset-0" />
                    Haircuts
                </h3>
                
                <p className="mt-1 text-sm text-gray-500">fyhfghf</p>
             
              </div>
              <p className="text-sm font-medium text-gray-900">33333</p>
            </div>
          </div>
          <div className="group relative border border-black rounded-lg p-4">
            <div className=" w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                alt="image"
                src={aboutpics}
                className="w-full h-auto object-cover max-h-48"
              />

              <div className="mt-4 text-center">
                <h3 className="text-sm text-gray-700">
                
                    <span aria-hidden="true" className="absolute inset-0" />
                    Styling
               
                </h3>
                <p className="mt-1 text-sm text-gray-500">fyhfghf</p>
              </div>
              <p className="text-sm font-medium text-gray-900">33333</p>
            </div>
          </div>
          <div className="group relative border border-black rounded-lg p-4">
            <div className=" w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                alt="image"
                src={aboutpics}
                className="w-full h-auto object-cover max-h-48"
              />

              <div className="mt-4 text-center">
                <h3 className="text-sm text-gray-700">
                  <a>
                    <span aria-hidden="true" className="absolute inset-0" />
                    Coloring
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">fyhfghf</p>
              </div>
              <p className="text-sm font-medium text-gray-900">33333</p>
            </div>
          </div>
          <div className="group relative border border-black rounded-lg p-4">
            <div className=" w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                alt="image"
                src={aboutpics}
                className="w-full h-auto object-cover max-h-48"
              />

              <div className="mt-4 text-center">
                <h3 className="text-sm text-gray-700">
                 
                    <span aria-hidden="true" className="absolute inset-0" />
                    Hair Extentions
              
                </h3>
                <p className="mt-1 text-sm text-gray-500">fyhfghf</p>
              </div>
              <p className="text-sm font-medium text-gray-900">33333</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
