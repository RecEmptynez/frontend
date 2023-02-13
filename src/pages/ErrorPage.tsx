import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="font-semibold text-7xl">Oj! Denna sidan finns inte.</h1>
      <Link
        to="/"
        className="mt-20 text-4xl p-5 bg-blue-600 hover:bg-blue-700  text-white transition 
      ease-in duration-200 text-center font-semibold shadow-md rounded-2xl "
      >
        Gå tillbaka
      </Link>
    </div>
  );
};
