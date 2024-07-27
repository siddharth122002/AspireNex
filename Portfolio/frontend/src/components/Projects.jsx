import React, { useContext } from "react";
import sci from "../assets/scispot.png";
import book from "../assets/bookstore.png";
import crypto from "../assets/crypto.png";
import social from "../assets/ssss.png";
import quiz from "../assets/Quizz.png";
import key from "../assets/key.png";
import { UserContext } from "../context/UserContext";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const { dark } = useContext(UserContext);


  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.from(".card", {
        y: 30,
        duration: 1,
        opacity: 0,
        scale: 0.2,
        scrollTrigger: {
          trigger: ".card",
          scroller: "body",
          // markers:true,
          start: 'top 70%',
          end: 'top 50%',
          scrub: 4,

        },
      })
      gsap.from(".projects", {
        y: 30,
        duration: 1,
        opacity: 0,
        scale: 0.2,
        scrollTrigger: {
          trigger: ".projects",
          scroller: "body",
          // markers:true,
          start: 'top 70%',
          end: 'top 50%',
          scrub: 4,

        },
      })
    })
  })
  return (
    <div className={dark ? "dark" : "light"}>
      <section id="/projects" className="py-20  dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-6xl font-bold text-slate-900 mb-12 dark:text-white projects">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              <div className="card">
                <ProjectCard

                  title="Keeper"
                  image={key}
                  description="A secure password manager that stores all your website names and passwords in one convenient place. Keeper ensures easy access and management of your credentials."
                  link="https://key-manager-frontend.vercel.app/"
                />
              </div>
              <div className="card">
                <ProjectCard

                  title="SciSpot"
                  image={sci}
                  description="A MERN stack web app featuring secure user authentication and a user-friendly interface to showcase science articles with Cloudinary integration."
                  link="https://science-spot-frontend.vercel.app/"
                />
              </div>
              <div className="card">
                <ProjectCard
                  title="Bookstore"
                  image={book}
                  description="A MERN stack application for managing bookstore inventory with full CRUD operations and an intuitive interface."
                  link="https://books-frontend-fawn.vercel.app/"
                />
              </div>
              <div className="card">
                <ProjectCard
                  title="Crypto"
                  image={crypto}
                  description="A responsive React web app using the CoinGecko API to display real-time cryptocurrency data with search functionality."
                  link="https://crypto-ten-mu.vercel.app/"
                />
              </div>
              <div className="card">
                <ProjectCard

                  title="PicShare"
                  image={social}
                  description="A web app for sharing photos, featuring functionalities for liking, commenting, and secure user login."
                  link="https://pic-share-frontend-pink.vercel.app/"
                />
              </div>
              <div className="card">
                <ProjectCard

                  title="QuizMaker"
                  image={quiz}
                  description="Built with the MERN stack that enables users to create, take, and score quizzes. Users can design quizzes, share them, and receive immediate score on their performance."
                  link="https://quiz-frontend-swart.vercel.app/"
                />
              </div>




            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const ProjectCard = ({ title, image, description, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div className="hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-slate-700">
        <img src={image} alt={title} className="w-full h-48" />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800  mb-4 dark:text-white">{title}</h3>
          <p className="text-lg text-gray-700 dark:text-white">{description}</p>
        </div>
      </div>
    </div>
  </a>
);

export default Projects;
