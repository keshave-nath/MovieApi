import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  
  const [Data, setalldata] = useState([])

  let useval = (e) => {
    e.preventDefault()
    let valuess = e.target.value
    // console.log(e.target.value)
    Display(valuess)
  }
  let api
  let Display = (valuess="") => 
    {
      if(valuess!=""){
         api = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${valuess}`
      }
      else{
        api = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'
    }
    axios.get(api)
      .then((ress) => {
        setalldata(ress.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(()=>{Display()},[])
  
  return (
    <>
      <div className='w-[1000px] mx-auto my-[20px] text-[black]'>
        <h1 className='font-bold text-[105px] text-center grad'>MOVIE</h1>
      </div>
      <div className='text-[white] w-[1000px] mx-auto'>
        <form onChange={useval}>
          <input type='search' className='bg-[black] w-[80%] p-1 me-[50px] border rounded' autoFocus />
          <button type='submit' className='bg-[white] p-[6px] text-black font-bold rounded w-[15%]' > SEARCH </button>
        </form>
      </div>
      <div className='w-[1300px] mx-auto my-[50px]  grid grid-cols-4 gap-[25px]'>

        {Data.map((v, i) => {
            console.log(v)
          return(
          <div class="max-w-sm bg-white border border-gray-200 my-[30px] rounded-lg shadow-[5px_5px_15px_5px_black] dark:bg-black dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg w-[100%]" src={`https://image.tmdb.org/t/p/w1280${v.poster_path}`} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{v.original_title}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{v.release_date}</p>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                DOWNLOAD
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
              <a href="#" class="inline-flex items-center px-3 py-2 ms-[25px] text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                WATCH NOW
                {/* <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg> */}
              </a>
            </div>
          </div>
          )

        })}

      </div>
    </>
  );
}

export default App;
