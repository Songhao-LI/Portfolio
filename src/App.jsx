import { BrowserRouter } from "react-router-dom";
import ReactLive2d from 'react-live2d';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black'>
        <div className='bg-black bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {/*<Tech />*/}
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <ReactLive2d
          width={300}
          height={500}
          bottom={-50}
          right={-20}
          ModelList={ ['dafeng_2'] }
          menuList = {[]}
          color={'000000'}
          TouchDefault={['Hi']}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
