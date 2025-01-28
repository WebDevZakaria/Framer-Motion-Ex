import { motion,useMotionValue } from 'framer-motion';
import './App.css'


function App() {

  const scale = useMotionValue(2);
  const scale2 = useMotionValue(1);
  const onRangeChange = (event) => {
    scale2.set(parseFloat(event.target.value))
  }



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
          duration:10,
          repeatDelay:1,

        }}

        
        >
          responsive
        </motion.div>
      </div>
      <p className="mt-auto  p-2">Make your animations work on all devices</p>
      </div>
    </div>



    

     <div className='w-full h-screen grid place-items-center'>

      <motion.div className='rounded-full w-32 h-12 bg-blue-600'

      style={{scale}}






      
      >


      </motion.div>

    </div> 




    <div className="flex items-center flex-col gap-8 justify-center min-h-screen">
      <motion.button
        className="bg-black text-white px-3 py-2 rounded-md"
        style={{ scale2 }}
        transition={{ type: 'spring', damping: 300 }}

      >
        Scale ⚖️
      </motion.button>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 p-3 bg-white/10 rounded-xl flex items-center justify-center">
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={onRangeChange}
        />
      </div>
    </div>



</>
  );
} 

export default App;


