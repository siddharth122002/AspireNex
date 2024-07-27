import { useContext } from "react";
import { FaJs, FaCode, FaJsSquare, FaHtml5, FaCss3Alt, FaJava, FaDatabase, FaNodeJs, FaServer, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { UserContext } from "../context/UserContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



function Skills() {
  const { dark } = useContext(UserContext);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.from(".cards-left", {
        x: -100,
        duration: 2,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".cards-left",
          scroller: "body",
          // 
          start: 'top 40%',
          end: 'top -30%',
          scrub: 4,
        },
      })
      gsap.from(".cards-right", {
        x: 100,
        duration: 2,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".cards-right",
          scroller: "body",

          start: 'top 40%',
          end: 'top -30%',
          scrub: 4,
        },
      })
      gsap.from(".skills", {
        y: 30,
        duration: 1,
        opacity: 0,
        scale: 0.2,
        scrollTrigger: {
          trigger: ".skills",
          scroller: "body",
          // 
          start: 'top 70%',
          end: 'top 50%',
          scrub: 4,

        },
      })
    })
  })
  return (
    <div className={dark ? "dark" : "light"}>
      <section id="/skills" className="py-20  dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-6xl font-bold text-slate-900 mb-6 dark:text-white skills">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-8">

              <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center dark:bg-slate-700 cards-left">
                <FaHtml5 color="#e44d26" size={86} />
                <p className="text-xl font-semibold dark:text-white">HTML</p>
                <p className="text-md text-gray-600 mt-2 dark:text-white">
                  Proficient in structuring and organizing web content.
                </p>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center dark:bg-slate-700 cards-right">
                <FaCss3Alt color="#2965f1" size={86} />
                <p className="text-xl font-semibold dark:text-white">CSS</p>
                <p className="text-md text-gray-600 mt-2 dark:text-white">
                  Skilled in styling and designing visually appealing web interfaces.
                </p>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center dark:bg-slate-700 cards-left">
                <FaJsSquare color="#f0db4f" size={86} />
                <p className="text-xl font-semibold dark:text-white">JavaScript</p>
                <p className="text-md text-gray-600 mt-2 dark:text-white">
                  Skilled in implementing interactive features and dynamic functionalities.
                </p>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center dark:bg-slate-700 cards-right">
                <FaDatabase color="#47a248" size={86} />
                <p className="text-xl font-semibold dark:text-white">MongoDB</p>
                <p className="text-md text-gray-600 mt-2 dark:text-white">
                  Skilled in designing and implementing database solutions for efficient data storage and retrieval.
                </p>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center dark:bg-slate-700 cards-left">
                <FaServer color="#000000" size={86} />
                <p className="text-xl font-semibold dark:text-white">Express.js</p>
                <p className="text-md text-gray-600 mt-2 dark:text-white">
                  Proficient in building web applications and RESTful APIs with the Express.js framework.
                </p>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center dark:bg-slate-700 cards-right">
                <FaNodeJs color="#339933" size={86} />
                <p className="text-xl font-semibold dark:text-white">Node.js</p>
                <p className="text-md text-gray-600 mt-2 dark:text-white">
                  Skilled in developing server-side applications and APIs using Node.js.
                </p>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center dark:bg-slate-700 cards-left">
                <FaReact color="#61dafb" size={86} />
                <p className="text-xl font-semibold dark:text-white">React.js</p>
                <p className="text-md text-gray-600 mt-2 dark:text-white">
                  Developing and maintaining web applications using React.js.
                </p>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center dark:bg-slate-700 cards-right">
                <SiTailwindcss color="#38b2ac" size={86} />
                <p className="text-xl font-semibold dark:text-white">Tailwind CSS</p>
                <p className="text-md text-gray-600 mt-2 dark:text-white">
                  Proficient in using Tailwind CSS to rapidly style and design modern web interfaces.
                </p>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center dark:bg-slate-700 cards-left">
                <FaGitAlt color="#FF9800" size={86} />
                <p className="text-xl font-semibold dark:text-white">Git</p>
                <p className="text-md text-gray-600 mt-2 dark:text-white">
                  Proficient in version control and collaboration using Git.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );

}

export default Skills;
