import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { DataContext } from "../context/dataContext";

export default function HomePage() {

  const data = useContext(DataContext)

  return (
    <>
      <section className="pt-20">
        {/* <div className="container"> */}
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 md:text-xl lg:text-4xl lg:text-center ">
            <h1 className="text-base font-semibold text-teal-500 mb-5 ">
              Welcome,
              <span className="block font-bold text-teal-500 text-4xl">
                Wadidaw Auction
              </span>
            </h1>
            <h2 className="font-medium text-black mb-10 leading-relaxed">
              Lorem ipsum slekbew slekmew ipsum slekmeeewww.
            </h2>
            <button className="text-base font-semibold text-white bg-teal-400 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
              Contact Us
            </button>
          </div>
        </div>

        <div className="w-full px-4  mt-5 lg:col lg:flex lg:flex-wrap lg:justify-center  ">

          {data &&
            data.map((el) => <Card el={el} key={el.id} />)}

        </div>
        {/* </div> */}
      </section>
    </>
  );
}
