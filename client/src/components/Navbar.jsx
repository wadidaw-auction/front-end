import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header className="bg-teal-500 absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="x-4">
              <Link to={'/'} href="" className="block py-6 text-lg font-bold text-black">
                Wadidaw Auction
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
