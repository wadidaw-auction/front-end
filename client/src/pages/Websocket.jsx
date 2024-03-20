import { useEffect, useState } from "react"
import socket from "../socket"

function Websocket(){

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

        return ()=>{
            socket.off("message")
        }
    })

    const [input,setInput] = useState()

    function handleInput(event){
        const {name,value} = event.target

        setInput({
            ...input, [name] : value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(input.price);
        console.log(socket.auth.token);
        let initialPrice = 0

        if (input.price > initialPrice) {
            //emit? isinya data user dari localstorage?
            //
            socket.emit('placeBid', {
                //data?
                //id?
                token : socket.auth.token,//localStorage.access_token,
                price : input.price
            })
        }else{
            console.log("minimal input adalah " + initialPrice);
        }

    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type="number" name="price" onChange={handleInput}/>
        <button type="submit">Add bid</button>
        </form>
        </>
    )
}

export default Websocket