import { useEffect, useState } from "react"
import socket from "../socket"
import axios from "axios"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"

function Websocket(){
    const {id} = useParams()
    const [price,setPrice] = useState()
    const [input,setInput] = useState()
    useEffect(()=>{
        socket.disconnect()
        socket.auth = {
            token : localStorage.access_token
        }
        socket.connect()
    },[])


    useEffect(()=>{
        socket.on("message", (param)=>{
            console.log(param, "<<<< server punya");
        })

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
                title: "minimal input adalah " + (initialPrice+1),
                icon: "error",
              });
        }

    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Last Bid : {price}</label><br />
        <input type="number" name="price"  onChange={handleInput}/>
        <button type="submit">Add bid</button>
        </form>
        </>
    )
}

export default Websocket