import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props){
    const navigate=useNavigate()
    const users=props.users
    const setusers=props.setusers
    const [eusername,seteusername]=useState()
    const [epassword,setepassword]=useState()
    function handleuinput(evt)
    {
        seteusername(evt.target.value)
        
    }
    function  handlepinput(evt){
        setepassword(evt.target.value)
        
    }
    function adduser(){
        setusers([...users,{username:eusername,password:epassword}])
        console.log(users)
        navigate("/")
    }

    return(<div className="bg-black p-10 ">
        <div className="bg-[#EFEFEF] border rounded-md p-10">
        <h1 className="text-3xl font-medium">Hey,Hiii</h1>
        <p>Sign Up Here :)</p>
        <div className="flex flex-col gap-2 my-2">
            <input className=" w-52 border rounded-md border-black p-1 bg-transparent" placeholder="UserName" onChange={handleuinput}></input>
            <input className=" w-52 border rounded-md border-black p-1 bg-transparent" placeholder="Password" onChange={handlepinput}></input>
            <input className=" w-52 border rounded-md border-black p-1 bg-transparent" placeholder="Confirm Password"></input>
        <button className="bg-[#FCA201] w-24 p-1 border rounded-md" onClick={adduser} >Sign Up</button>
        <p> Don't have an account?<Link to={'/'} className="underline">Login</Link></p>
        </div>
    </div></div>)
}
export default Signup