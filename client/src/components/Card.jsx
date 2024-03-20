export default function Card() {
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-lg">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="text-base font-semibold text-white bg-teal-400 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out mb-3 ml-2">
              Bid Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
