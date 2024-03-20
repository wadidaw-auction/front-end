import Card from "../components/Card";

export default function HomePage() {
  return (
    <>
      <section className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4">
              <h1 className="text-base font-semibold text-teal-500 mb-5">
                Welcome,
                <span className="block font-bold text-teal-500 text-4xl">
                  Wadidaw Auction
                </span>
              </h1>
              <h2 className="font-medium text-black mb-10 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </h2>
              <button className="text-base font-semibold text-white bg-teal-400 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                Contact Us
              </button>
            </div>
          </div>

          <div className="w-full self-center items-center px-4 mt-5">
            <Card/>
          </div>
        </div>
      </section>
    </>
  );
}
