import { useEffect, useState } from "react"
import socket from "../socket"
import axios from "axios"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"

function Websocket(){
    const {id} = useParams()
    const [price,setPrice] = useState()
    const [input,setInput] = useState()
    const roomId = id

    useEffect(()=>{
        
        socket.emit("bidRoom", roomId);
    },[])


    useEffect(()=>{

        socket.on("New Bidder", (param)=>{
            console.log(param, "<<<< new bidder");
            setInput(param.price)
            setPrice(param.price)
        })

        return ()=>{
            socket.off("message")
            socket.off("New Bidder")
        }
    })

    

    function handleInput(event){
        // const {name,value} = event.target
        setInput(event.target.value)
    }

    async function fetchData(){
        try {
            const {data} = await axios({
                method : "get",
                url : "http://localhost:3000/product/" + id
            })

            console.log(data);
            setPrice(data.price)
            setInput(data.price)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    function handleSubmit(event){
        event.preventDefault()
        // console.log(input.price);
        // console.log(socket.auth.token);
        
        let initialPrice = price

        console.log(initialPrice, "initial <<<<");
        console.log(input, "input price<<<<<<<");
        if (input > initialPrice) {
            //emit? isinya data user dari localstorage?
            //
            socket.emit('placeBid', {
                //data?
                //id?
                roomId,
                id,
                token : socket.auth.token,//localStorage.access_token,
                price : input
            })

            Swal.fire({
                title: "Bid Success",
                icon: "success",
              });
        }else{
            Swal.fire({
                title: "minimal input adalah " + (+initialPrice + 1),
                icon: "error",
              });
        }

    }

    return(
        <>
        {/* <form onSubmit={handleSubmit}>
            <label htmlFor="">Last Bid : {price}</label><br />
        <input type="number" name="price"  onChange={handleInput}/>
        <button type="submit">Add bid</button>
        </form> */}

        <div className="flex justify-center items-center h-screen">
    <div className="border-2 rounded-lg p-8 shadow-lg items-center" >
      <h1 className="block font-bold text-teal-500 text-4xl text-center">Place Your Bid</h1>
      <h1 className="block font-bold text-teal-500 text-4xl text-center">Below!</h1>
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
    <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Last Bid: Rp. {price?.toLocaleString()}</label>
        <input type="number" id="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  name="name" onChange={handleInput} required />
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Place bid</button>
      </div>
    </form>
    </div>
    </div>
        </>
    )
}

export default Websocket