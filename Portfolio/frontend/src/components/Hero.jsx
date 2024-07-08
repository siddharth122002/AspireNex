import {useTypewriter,Cursor} from "react-simple-typewriter"
import pic from "../assets/lll.png"
function Hero(){
    const [text] = useTypewriter({
        words: ["MERN Stack developer", "Full stack developer","Software Developer"],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 60,
        delaySpeed: 2000,
    });
    
    return (
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-700 overflow-hidden">
            <div className="relative z-10 flex flex-col items-center justify-center py-24 text-white">
            <img src={pic} className="rounded-full h-40 animate-bounce-linear animate-duration-3000"/>
                <h1 className="text-4xl font-bold mb-4 tex-bl"><span className="text-6xl text-blue-300">W</span>elcome to My Portfolio</h1>
                <p className="text-xl">I am Siddharth Kumar, {text} <Cursor
                    cursorStyle="|"
                    cursorColor="white"
                /></p>
                
            </div>
        </div>
    );
}
export default Hero;