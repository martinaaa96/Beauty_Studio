export default function Booking() {
  return (
    <>
      <div className="flex flex-col sm:flex-row p-10 mt-4 bg-white dark:bg-gray-900 font-serif">
<ul className="w-full">
          <li className="flex flex-col sm:flex-row">
            <div className="min-w-0 flex-auto">
              <h2 className="text-lg font-semibold leading-6 text-gray-900">
                Pedicure
              </h2>
              <p className="mt-4 truncate text-md leading-5 text-gray-500">
                Select your preferred time from our available slots and book
                your appointment!
              </p>
            </div>
            <div className="min-w-0 flex-auto">
              <h2 className="text-lg font-semibold leading-6 text-gray-900">
                1h 30
              </h2>
              <p className="mt-3 truncate text-md leading-5 text-gray-500">
                $50
              </p>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end mt-4 sm:mt-0">
              <button className="text-black bg-red-300 hover:bg-amber-200 py-2 px-4 rounded-full">
                Book
              </button>
            </div>
            
          </li>
        </ul>
      </div>
    </>
  );
}
