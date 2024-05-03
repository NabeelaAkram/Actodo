import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props){
    const navigate=useNavigate()
    const [eusername,seteusername]=useState()
    const [epassword,setepassword]=useState()
    const [ruser,setruser]=useState(true)
    
    const users=props.users
    
    function handleuinput(evt)
    {
        seteusername(evt.target.value)
        console.log(evt.target.value)
    }
    function  handlepinput(evt){
        console.log(evt.target.value)
        setepassword(evt.target.value)
    }
    function checkuser(){
        var userfound=false
        users.forEach(function(item){
            if(item.username == eusername &&item.password==epassword){
                console.log("sucessful")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
           
        })

if(userfound==false){
    console.log("log in failed")
    setruser(false)
}
    }

    return(<div className="bg-black p-10 ">
    <div className="bg-[#EFEFEF] border rounded-md p-10">
    <h1 className="text-3xl font-medium">Hey,Hiii</h1>
    {ruser?<p>I help u manage your activities after you log in :)</p>:<p className="text-red-600">"Please sign up before login"</p>}
    
    <div className="flex flex-col gap-2 my-2">
        <input className=" w-52 border rounded-md border-black p-1 bg-transparent" placeholder="UserName" value={eusername} onChange={handleuinput}></input>
        <input className=" w-52 border rounded-md border-black p-1 bg-transparent" placeholder="Password" value={epassword} onChange={handlepinput}></input>
        
    <button className="bg-[#8272DA] w-24 p-1 border rounded-md"  onClick={checkuser}>Login</button>
    <p> Already have an account?<Link to={'/signup'} className="underline">Signup</Link></p>
    </div>
</div></div>)
}
export default Login
