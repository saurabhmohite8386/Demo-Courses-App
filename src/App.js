import './App.css';
import Navbar from './Components/Navbar';
import {apiUrl ,filterData } from './data';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import { useState , useEffect} from "react";
import {toast} from 'react-toastify';
import Spinner from './Components/Spinner';



function App() {

  const[courses,setCourses] = useState([]);
  const[loading,setLoading] = useState(true);
  const[category,setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try {
      let responce = await fetch(apiUrl);
      let output = await responce.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong!!!")
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="min-h-screen flex flex-col bg-slate-700">
      <div>
        <Navbar/>
      </div>
      <div className=' '>
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>
        <div className=' w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
