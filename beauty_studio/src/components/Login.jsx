export default function Login() {
  return (
    <div className="bg-contain bg-center font-serif min-h-screen relative bg-[url('/image1.jpg')]">
      <div className="absolute bg-gradient-to-b from-gray-200 to-orange-200 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center relative z-10">
        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
          <div className="self-start hidden lg:flex flex-col  text-black">
            <h1 className="mb-3 font-bold text-5xl">
              Welcome back, beautiful!
            </h1>
            <p className="pr-3">
              Already have an account? Log in here to book your next reservation
              with ease.
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
              <p className="text-gray-500">Please sign in to your account.</p>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-red-400"
                  placeholder="mail@gmail.com"
                />
              </div>
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-red-400"
                  placeholder="Enter your password"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-red-300  hover:bg-red-400 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
