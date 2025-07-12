
import Animation from './components/Animation';
import StartPage from './components/StartPage';

import { useEffect,useRef } from 'react';
import Lenis from '@studio-freight/lenis';



function App() {
  

  useEffect(() => {
  window.scrollTo(0, 0);
      // document.body.style.overflow = 'hidden';
}, []);


 useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp:0.1,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);



  return (

<>
<div className='bg-[#FCFAF8]'>

<StartPage />
</div>

<div className=' w-full h-full bg-cover bg-[#F2F2F2]'>

  <Animation/>

</div>

</>
  )
}

export default App
