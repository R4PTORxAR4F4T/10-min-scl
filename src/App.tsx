import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { fetchCourseData } from './utility/fetch';
import Banner from './components/Banner/Banner';
import Trailer from './components/Trailer/Trailer';
import Instructors from './components/Instructors/Instructors';
import Laidout from './components/Laidout/Laidout';
import FreePDF from './components/FreePDF/FreePDF';
import Pointer from './components/Pointer/Pointer';
import Preview from './components/Preview/Preview';
import Exclusive from './components/Exclusive/Exclusive';

function App() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCourseData('en')
        setData(result)
      } catch (error) {
        console.error('Failed to fetch course data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading || !data) {
    return (
      <div className="p-6 text-center text-gray-500 text-lg">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    )
  }
  
  return (
    <div className='full'>
      <div className='top-0 z-100 sticky'>
        <Navbar></Navbar>
      </div>

      <div className="w-full flex flex-col md:flex-row ">
        <Banner data={data}></Banner> 
      </div>

      <div className='w-[50%] ml-36'>
        <Instructors instructors={data.data.sections[2]}></Instructors>
        <Laidout features={data.data.sections[3]}></Laidout>
        <FreePDF group_join={data.data.sections[4]}></FreePDF>
        <Pointer pointer={data.data.sections[5]}></Pointer>
        <Preview></Preview>
        <Exclusive exclusive={data.data.sections[8]}></Exclusive>
      </div>
      
    </div>
  );
}

export default App
