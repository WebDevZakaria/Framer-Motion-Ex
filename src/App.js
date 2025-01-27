import { motion } from 'framer-motion';
import './App.css'


function App() {
  return (


    <>
    <div className="flex items-center justify-center min-h-screen text-white">



     <motion.button

      className='bg-black text-white px-3 py-2 rounded-md'
      animate={{
       scaleX:2,scaleY:2,y:"50%"
      }}

      transition={{
        delay:2,
        ease:"easeIn",
        repeat:Infinity,
        repeatDelay:0.5,
        repeatType:"reverse",



        // type:"spring",
        // bounce:400,
        // dmaping:10,
        // mass:3,
        // stiffness:30,
        // velocity:10,



      }}
      initial = {{
        

      }}
      >
        Hello world

      </motion.button>

    </div>


    <div className="flex items-center justify-center min-h-screen">
        <motion.div
          className="bg-gray-400 w-24 h-24"
          animate={{
            scale: [1, 2, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
        <motion.div
          className="bg-gray-800 w-24 h-24"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </div>

      <div className="flex items-center flex-col text-white p-8 justify-center min-h-screen">
      <motion.button
        className="h-16 rounded-full px-8 bg-blue-600"

        whileHover={{ scale: 1.5 }}

        whileTap={{
          scale:1.7,
        }}

      >
        Hover me!
      </motion.button>
    </div>


    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[150px] overflow-hidden flex relative flex-col aspect-[2/4] text-white bg-[#41352a] rounded-2xl">
      <div className="h-full fadeout">
        <motion.div 
        className="text-[80px] [font-family:monospace] origin-top-left leading-[0.8] inset-1 absolute break-all"
        
        animate = {{
          opacity:[0, 1,1,0],
          scaleX:[1.5,1.5,2.5,2.5],
          scaleY:[0.75,0.75,0.75,1.5]
        }}

        transition={{
          repeat:Infinity,
          //times : [0, 0.25, 0.75, 0.8, 1],
          duration:3,
          repeatDelay:1,

        }}

        
        >
          responsive
        </motion.div>
      </div>
      <p className="mt-auto  p-2">Make your animations work on all devices</p>
      </div>
    </div>
</>
  );
} 

export default App;
