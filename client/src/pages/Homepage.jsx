import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";



export default function HomePage() {
  const [data, setData] = useState()

async function fetchData(){
  try {
    const {data} = await axios({
      method:'get',
      url:"http://localhost:3000/products"
    })
    setData(data)
  } catch (error) {
    console.log(error);
  }
}
useEffect(()=>{
  fetchData()
})
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </h2>
              <button className="text-base font-semibold text-white bg-teal-400 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                Contact Us
              </button>
            </div>
          </div>

          <div className="w-full self-center items-center px-4 mt-5">
            
            {data && 
            data.map((el)=> <Card el={el} key={el.id}/>)}

          </div>
        {/* </div> */}
      </section>
    </>
  );
}
