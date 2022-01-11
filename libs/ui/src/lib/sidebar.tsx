import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* eslint-disable-next-line */
export interface SidebarProps { }

export function Sidebar(props: SidebarProps) {
  const [togelSidebar, setTogelSidebar] = useState(false);
  const [eventDetail, setEventDetail] = useState("");

  const copyClickboard = () => {
    navigator.clipboard.writeText(eventDetail);
    toast.success(`Copied text : ${eventDetail}`);
  };

  return (
    <div>
      <ToastContainer />
      <div className={`w-80 fixed overflow-x-hidden bg-slate-50 transition-all duration-500 ${togelSidebar && 'w-0'}`} >
        <div className="h-screen p-4 pl-10">
          <div className="text-right mt-8 mb-4">
            <button className="inline-block px-3 py-1 bg-red-600 text-white font-medium rounded hover:bg-red-700 hover:shadow-lg text-2xl" onClick={() => setTogelSidebar(!togelSidebar)} >X</button>
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Duration</label>
            <select defaultValue="0" className="w-auto bg-transparent py-1.5 text-gray-700  focus:outline-none" aria-label="Default select example">
              <option value="0">30 min</option>
              <option value="1">60 min</option>
              <option value="2">1 hour</option>
              <option value="3">1 day</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Event Type <span className={`p-1 ml-2 w-4 h-4 inline-block bg-blue-600 text-white rounded-full text-xs text-center leading-3`}>i</span></label>
            <select defaultValue="0" className="w-full bg-transparent py-1.5 text-gray-700  focus:outline-none" aria-label="Default select example">
              <option value="0">Share slots</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <label className=" text-gray-800 font-semibold">
              Save placeholders
            </label>
            <input type="checkbox" value="" id="flexCheckDefault" />
          </div>
          <input type="text" onChange={(e) => setEventDetail(e.target.value)} value={eventDetail} name="name" className="mt-1 px-3 py-2 mb-4 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none block w-full rounded-lg sm:text-sm " placeholder="Type placeholder name Here" />
          <textarea rows={5} className="mt-1 px-3 py-2 mb-4 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none block w-full rounded-lg sm:text-sm " placeholder="Type placeholder name Here"></textarea>
          <button type="button" onClick={(e) => copyClickboard()} className=" py-2 w-full bg-white border-2 border-blue-600 rounded-lg text-blue-600 font-medium text-lg leading-tight hover:bg-black hover:bg-opacity-5 focus:outline-none">Copy to Clipboard</button>
        </div>
      </div>
      <div className={`ml-80 transition-all duration-500 ${togelSidebar && 'ml-0'}`} >
        <button onClick={() => setTogelSidebar(!togelSidebar)} >Open Sidebar =&gt;</button>
      </div>
    </div >
  );
}

export default Sidebar;