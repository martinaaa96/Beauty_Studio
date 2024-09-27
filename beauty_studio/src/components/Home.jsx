import home from "../assets/home.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
export default function Home() {
  return (
    <>
      <div
        id="default-carousel"
        className="mt-20 relative w-full h-56 md:h-96"
        data-carousel="slide"
      >
        <div className="relative h-full rounded-lg">
          <div className="duration-300 ease-in-out" data-carousel-item>
            <img
              src={home}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Slide 1"
            />
          </div>

          <div className="hidden duration-300 ease-in-out" data-carousel-item>
            <img
              src={home2}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Slide 2"
            />
          </div>

          <div className="hidden duration-300 ease-in-out" data-carousel-item>
            <img
              src={home3}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Slide 3"
            />
          </div>
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-400"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-400"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-400"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
      </div>
    </>
  );
}
