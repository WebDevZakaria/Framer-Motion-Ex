import { motion } from 'framer-motion';


function App() {
  return (
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
  );
}

export default App;
