import { useState } from "react"

function Addtodoform(props){
    const activityarr=props.activityarr
    const setactivityarr=props.setactivityarr
    const [newactivity,setactivity]=useState("")
    function handlechange(evt)
    {
        setactivity(evt.target.value)
    }
    function addactivity(){
        setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])
        setactivity([""])
    }
return( <div className="flex flex-col gap-3">
<h1 className="text-2xl font-medium ">Manage Activities</h1>

<div>
    <input type="text"value={newactivity} onChange={handlechange} className="bg-transparent border border-black p-1 " placeholder="Next Activity"></input>
    <button className="bg-black border border-black p-1 text-white" onClick={addactivity}>Add</button>
</div>
</div>)

}
export default Addtodoform