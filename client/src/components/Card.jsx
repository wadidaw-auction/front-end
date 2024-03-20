import { Link } from "react-router-dom";

export default function Card({el}) {
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-lg">
        <figure>
          <img
            src={el.imageUrl}
            alt={el.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{el.name}</h2>
          <p>Rp. {el.price.toLocaleString()}</p>
          <div className="card-actions justify-end">
            <Link to={`/product/${el.id}`} className="text-base font-semibold text-white bg-teal-400 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out mb-3 ml-2">
              Bid Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
