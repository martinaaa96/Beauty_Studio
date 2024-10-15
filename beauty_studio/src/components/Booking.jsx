export default function Booking() {
  return (
    <>

      <div className="flex min-h-screen items-center justify-center">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-xl">
            <thead>
              <tr className="bg-blue-gray-100 text-gray-700">
                <th className="py-3 px-4 text-center">Services</th>
              </tr>
            </thead>
            <tbody className="text-blue-gray-900">
              <tr className="border-b border-blue-gray-200">
                <td className="py-3 px-4">Pedicure</td>
                <td className="py-3 px-4">
                  Select your preferred time from our available slots and book
                  your appointment!
                </td>

                <td className="py-3 px-4">
                  <a
                    href="#"
                    className="text-black bg-red-300 hover:bg-amber-200 py-2 px-4 rounded-full"
                  >
                    Book
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
