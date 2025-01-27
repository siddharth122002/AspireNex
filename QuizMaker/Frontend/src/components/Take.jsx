import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Spinner from './Spinner';

function Take() {
  useGSAP(()=>{
    gsap.from(".box",{
      opacity:0,
      scale:0.2,
      duration:1,
    })
  })
  const [quizzes,setQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    const getQuizzes = async()=>{
      setLoading(true)
      try{
        const {data} = await axios.get('https://quiz-backend-three-beta.vercel.app/quizzes')
       
        setQuizzes(data)
        setLoading(false)
      }catch(e){
        console.log("errorrr",e);
      }
    }
    getQuizzes()
  },[])
  return (
    <>
      {loading?(
        <Spinner/>
      ):(
    <div className="min-h-screen flex items-center justify-center  py-8">
      <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md box">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Available Quizzes</h1>
        <ul className="space-y-4">
          {quizzes.map((quiz, index) => (
            <Link
              to={`/take/${quiz._id}`}
              key={index}
              className="block bg-white text-black  font-medium text-center py-4 rounded-lg hover:-translate-y-1 duration-300 hover:bg-zinc-400"
            >
              {quiz.title} by {quiz.creator}
            </Link>
          ))}
        </ul>
      </div>
    </div>
     )}
    </>
  )
}

export default Take