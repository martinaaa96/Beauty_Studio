import aboutpics from "/aboutpics.jpg";
//import aboutpics1 from "/aboutpics1.jpg";
//import aboutpics2 from "/aboutpics2.jpg";

export default function Services() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
      <h2 className="text-4xl font-bold text-center tracking-tight text-gray-900">
        Our Services
      </h2>
      <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div className="group relative border border-black rounded-lg p-4">
          <div className="w-full overflow-hidden rounded-lg lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              alt="image"
              src={aboutpics}
              className="w-full h-auto object-cover max-h-48"
            />

            <div className="mt-4 text-center">
              <h3 className="text-md text-gray-900 font-midium">
                <span aria-hidden="true" className="absolute inset-0" />
                Haircuts
              </h3>

              <p className="mt-1 text-sm text-gray-700">
                Whether you prefer classic cuts or modern trends, we ensure a
                fresh and stylish result every time!
              </p>
            </div>
          </div>
        </div>
        <div className="group relative border border-black rounded-lg p-4">
          <div className="w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              alt="image"
              src={aboutpics}
              className="w-full h-auto object-cover max-h-48"
            />

            <div className="mt-4 text-center">
              <h3 className="text-md text-gray-900">
                <span aria-hidden="true" className="absolute inset-0" />
                Styling
              </h3>
              <p className="mt-1 text-sm text-gray-700">
                From casual waves to elegant updos, we bring your vision to life
                with expert care!
              </p>
            </div>
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
              <h3 className="text-md text-gray-900">
                <a>
                  <span aria-hidden="true" className="absolute inset-0" />
                  Coloring
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-700">
                Our coloring techniques enhance your natural beauty, creating
                bold or subtle changes that stand out!
              </p>
            </div>
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
              <h3 className="text-md text-gray-900">
                <span aria-hidden="true" className="absolute inset-0" />
                Hair Extentions
              </h3>
              <p className="mt-1 text-sm text-gray-700">
                Enjoy fuller, longer hair that blends seamlessly with your
                natural look, boosting your confidence instantly!
              </p>
            </div>
          </div>
        </div>
        <div className="group relative border border-black rounded-lg p-4">
          <div className="w-full overflow-hidden rounded-lg lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              alt="image"
              src={aboutpics}
              className="w-full h-auto object-cover max-h-48"
            />

            <div className="mt-4 text-center">
              <h3 className="text-md text-gray-900 font-midium">
                <span aria-hidden="true" className="absolute inset-0" />
                Manicure
              </h3>

              <p className="mt-1 text-sm text-gray-700">
                We offer a variety of colors and designs to give you the fresh,
                stylish look you deserve!
              </p>
            </div>
          </div>
        </div>
        <div className="group relative border border-black rounded-lg p-4">
          <div className="w-full overflow-hidden rounded-lg lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              alt="image"
              src={aboutpics}
              className="w-full h-auto object-cover max-h-48"
            />

            <div className="mt-4 text-center">
              <h3 className="text-md text-gray-900 font-midium">
                <span aria-hidden="true" className="absolute inset-0" />
                Pedicure
              </h3>

              <p className="mt-1 text-sm text-gray-700">
                Relax and rejuvenate with our luxurious pedicure, designed to
                pamper your feet and nails!
              </p>
            </div>
          </div>
        </div>
        <div className="group relative border border-black rounded-lg p-4">
          <div className="w-full overflow-hidden rounded-lg lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              alt="image"
              src={aboutpics}
              className="w-full h-auto object-cover max-h-48"
            />

            <div className="mt-4 text-center">
              <h3 className="text-md text-gray-900 font-midium">
                <span aria-hidden="true" className="absolute inset-0" />
                Deep Cleasing
              </h3>

              <p className="mt-1 text-sm text-gray-700">
                This intensive facial leaves your skin feeling purified,
                hydrated, and ready to face the day!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
