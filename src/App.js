import './App.css';
import Header from './components/header';
import Poster from './components/poster';
import { FaCaretDown } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import Content from './components/content'
function App() {
  return (
    <div className="App">
<Header />      
<Poster />
      <div className=' ml-[200px] mt-[47px] flex justify-between mr-[200px] items-center'>
        <div className=' flex w-[358px] justify-between text-[16px] text-[#8A8A8A]'>
          <h1 className=' text-black'>All Posts(32)</h1>
          <h1>Article</h1>
          <h1>Event</h1>
          <h1>Education</h1>
          <h1>Job</h1>
        </div>
        <div className=' flex justify-center gap-2'>
          <button className=' w-[133px] h-[36px] bg-[#EDEEF0] flex items-center justify-center'>Write a Post <FaCaretDown className=' items-center ml-2' /></button>
          <button className=' w-[125px] h-[36px] bg-[#2F6CE5] flex items-center justify-center text-white gap-1'><MdGroupAdd className='scale-x-[-1]'/>  Join Group</button>
        </div>
      </div>
      <Content />
    </div>
  );
}

export default App;

