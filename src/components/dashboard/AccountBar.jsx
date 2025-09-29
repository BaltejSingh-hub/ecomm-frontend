import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Add_to_cart from "../Add_to_cart";
import { CiLogout } from "react-icons/ci";
const AccountBar = ({ search, setSearch }) => {
  const navigate = useNavigate();

  const go_to_profile = () => {
    navigate("/profile");
  };
  const go_to_dashboard = () => {
    navigate("/");
  };
  const logout = () => {
    Cookies.remove("token");
    navigate("/signup");
  };

  return (
    <>
      <div className=" bg-brand-700 w-screen h-15 flex items-center justify-between">
        <div className="w-15 h-12 flex justify-end items-center">
          <img
            src="https://www.pngplay.com/wp-content/uploads/13/Symbol-Logo-Transparent-File.png"
            alt=""
          />
        </div>
        <div className=" w-135 h-5 flex items-center">
          <form className="flex items-center max-w-sm mx-auto">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search branch name..."
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        <div className=" mr-8 gap-2 h-11 flex justify-end items-center mx-5">
          <img
            onClick={go_to_profile}
            className="h-7 w-auto hover:cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            alt=""
          />
          <img
            className=" h-7 w-auto hover:cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/8310/8310386.png"
            alt=""
          />
          <CiLogout size={30}  onClick={logout} className=" hover:cursor-pointer"/>
        </div>
      </div>
    </>
  );
};

export default AccountBar;
