

import Header from '../components/Header';
import Card from '../components/Card';
import Todocontainer from '../components/Todocontainer';
import { useLocation } from "react-router-dom"

function App() {
    const data=useLocation()
  return (
   <div className='bg-black p-16'>
    <div className='bg-[#EFEFEF] p-10 border rounded-md'>
      <Header name={data.state.user}/>
      <div className='flex justify-between gap-7 my-5 flex-wrap'>
      <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}></Card>
      <Card bgcolor={"#FD6663"} title={"December"} subtitle={"17:52:00"}></Card>
      <Card bgcolor={"#FCA201"} title={"Built using"} subtitle={"react"}></Card>
      </div>
      <Todocontainer/>
    </div>
   </div>
  );
}

export default App;
