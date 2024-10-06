export default function Contacts() {
  return (
    <div className="flex justify-between  p-10 mt-2 bg-white dark:bg-gray-900 font-serif ">
      <div className="gap-32  py-20 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-10 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white items-center">
            Contacts us
          </h2>
          <h3 className="text-black mb-8">
            Welcome to our beauty salon! We offer professional care for your
            appearance and confidence.
          </h3>
          <h4 className="mb-8">
            Our team of experienced stylists and cosmeticians uses the best
            products and modern techniques to provide you with personalized
            services. Whether you аre looking for a new hairstyle, a manicure,
            or a relaxing skincare treatment, we are here to ensure you look and
            feel your best.
          </h4>
          <p className="font-semibold">With us, beauty is a pleasure!</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <img className="w-full rounded-lg" src="" alt="content 1" />
        </div>
      </div>
    </div>
  );
}
