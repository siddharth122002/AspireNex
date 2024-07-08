import React, { useContext } from 'react'
import { FaLinkedinIn, FaCode, FaGithub } from "react-icons/fa";
import { UserContext } from '../context/UserContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function About() {
    const {dark} = useContext(UserContext);
    useGSAP(()=>{
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            gsap.from(".about",{
                y:30,
                duration:1,
                opacity:0,
                scale:0.2,
                scrollTrigger:{
                    trigger:".about",
                    scroller:"body",
                    
                    start: 'top 70%', 
                    end: 'top 50%',
                    scrub:4,
                
                },
            })
            gsap.from(".intro1",{
                x:-300,
                opacity:0,
                duration:1,
                scrollTrigger:{
                    trigger:".intro1",
                    scroller:"body",
                    // 
                    start: 'top 50%', 
                    end: 'top 30%',
                    scrub:4,
                },
                
            })
            gsap.from(".intro2",{
                x:300,
                opacity:0,
                duration:1,
                scrollTrigger:{
                    trigger:".intro2",
                    scroller:"body",
                    // 
                    start: 'top 50%', 
                    end: 'top 30%',
                    scrub:4,
                },
            })
            gsap.from(".first",{
                x:-600,
                opacity:0,
                duration:2,
                ease:"power1.out",
                scrollTrigger:".first",
            })
            gsap.from(".second",{
                x:600,
                opacity:0,
                duration:2,
                scrollTrigger:".second",
                ease:"power1.out",
            })
        })
        
    })
    
    
    
    
    return (
        <div className={dark?"dark":"light"}>
        <section id="/about" className="py-20  dark:bg-slate-800 ">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="about text-6xl font-bold text-slate-900 mb-12 dark:text-white "> About</h2>
                    <p className="text-2xl p-4 dark:text-white intro1">I'm Siddharth, a final year student from Dehradun, specializing in the MERN stack with expertise in HTML, CSS, JavaScript, MongoDB, Express.js, React.js, and Node.js. Additionally, I am proficient in Java and data structures, having successfully solved over 300 questions.</p>
                    
                    <p className="text-2xl p-4 dark:text-white intro2">Thank you for taking the time to learn a bit about me. I'm eager to connect with you and discuss how we can collaborate. Feel free to explore my portfolio, and I hope you like it.</p>

                </div>
            <div className="flex flex-col  gap-6 lgl:gap-0 justify-between ">
                <div className="flex gap-4 justify-center mt-9">
                    <a href="https://www.linkedin.com/in/siddharth-kumar-8041921b7/" target='_blank'>
                        <span className="dark:bg-slate-200 dark:text-slate-800 dark:hover:bg-white w-16 h-16 bg-slate-800 text-white text-xl inline-flex items-center justify-center rounded-md shadow-8xl hover:bg-slate-900 hover:-translate-y-1 cursor-pointer duration-300 first">
                            <FaLinkedinIn />
                        </span>
                    </a>
                    <a href="https://github.com/siddharth122002" target='_blank'>
                        <span className="dark:bg-slate-200 dark:text-slate-800 dark:hover:bg-white  w-16 h-16 bg-slate-800 text-white text-xl inline-flex items-center justify-center rounded-md shadow-8xl hover:bg-slate-900 hover:-translate-y-1 cursor-pointer duration-300">
                            <FaGithub />
                        </span>
                    </a>
                    <a href="https://leetcode.com/siddharth122002/" target='_blank'>
                        <span className="dark:bg-slate-200 dark:text-slate-800 dark:hover:bg-white  w-16 h-16 bg-slate-800 text-white text-xl inline-flex items-center justify-center rounded-md shadow-8xl hover:bg-slate-900 hover:-translate-y-1 cursor-pointer duration-300 second">
                            <FaCode/>
                        </span>
                    </a>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
}

export default About;

