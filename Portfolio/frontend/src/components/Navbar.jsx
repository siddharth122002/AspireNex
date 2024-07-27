import { useContext, useEffect } from "react";
import w2 from "../assets/wolf2.png"
import { Link } from 'react-scroll'
import { UserContext } from "../context/UserContext";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function Navbar() {
  const { dark, setDark } = useContext(UserContext);
  const night = () => {
    setDark(!dark);
  }
  useGSAP(() => {
    gsap.from(".top", {
      duration: 2,
      opacity: 0,
      delay: 0.2,
      y: -100,
      ease: "power2.out",
      stagger: 0.3,
      scale: 0.3,
    })
  })
  useGSAP(() => {
    gsap.from("img", {
      duration: 2,
      opacity: 0,
      delay: 0.2,
      y: -100,
      ease: "power2.out",
      stagger: 0.3,
    })
  })
  return (
    <div className={dark ? "dark" : "light"}>
      <nav className="dark:bg-slate-900 shadow-lg bg-white">
        <div className=" container mx-auto px-4">
          <div className="flex  justify-between items-center py-4">
            <div className="text-2xl font-semibold text-white">
              <img src={w2} className="w-12 dark:invert cursor-pointer animate-pulse"
                onClick={(e) => (night(e))}
              />
            </div>
            <div className=" space-x-4 lg:space-x-8 flex">

              <Link
                className="text-purple-400 hover:text-black dark:hover:text-white hover:cursor-pointer transform transition-transform hover:-translate-y-1"
                activeClass='active'
                to={'/about'}
                spy={true}
                smooth={true}
                duration={500}
              ><p className="top text-lg p-2">About</p></Link>
              <Link
                className="text-purple-500 hover:text-black dark:hover:text-white hover:cursor-pointer transform transition-transform hover:-translate-y-1"
                activeClass='active'
                to={'/skills'}
                spy={true}
                smooth={true}
                duration={500}
              ><p className="top text-lg p-2">Skills</p></Link>
              <Link
                className="text-purple-600 hover:text-black dark:hover:text-white hover:cursor-pointer transform transition-transform hover:-translate-y-1"
                activeClass='active'
                to={'/projects'}
                spy={true}
                smooth={true}
                duration={500}
              ><p className="top text-lg p-2">Projects</p></Link>
              <Link
                className="text-purple-700 hover:text-black dark:hover:text-white hover:cursor-pointer transform transition-transform hover:-translate-y-1"
                activeClass='active'
                to={'/contact'}
                spy={true}
                smooth={true}
                duration={500}
              ><p className="top text-lg p-2">Contact</p></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;