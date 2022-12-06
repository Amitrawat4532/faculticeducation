import { motion, useScroll } from 'framer-motion'

const Circle = () => {
    const { scrollY, scrollYProgress } = useScroll()

    console.log(scrollY)
    console.log(scrollYProgress)

  return (
    <div className=' z-10 fixed inset-0 mx-auto overflow-hidden'>
        <motion.div style={{height:scrollY, width:scrollY, maxHeight: '150vh', maxWidth:'150vw'}} className="m-auto absolute inset-0 rounded-full bg-white"></motion.div>
    </div>
  )
}

export default Circle