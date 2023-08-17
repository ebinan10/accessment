import React from 'react';
import { Link } from 'react-router-dom';
import  logo  from './icons/logo.png';
import payroll from './images/payroll.png';
import gradient from './images/gradients.png';
import frame from './images/Frame.png';
import ios from './icons/ios.png'
import goggle from './icons/gogglePlay.png'
import background2 from './images/background2.png'
import slide2 from './images/Slide2.png'
import bg from './images/BG.png'
import frame2 from './images/1@3x.png'
import onboarding  from './images/onbrdng 2.png'
import frame3 from './images/Frame2.png'
import frame4 from './images/Frame4.png'
import frame5 from './images/Frame5.png'
import facebook from './icons/facebook.png'
import twitter from './icons/Twitter.png'
import instagram from './icons/Instagram.png'
import linkled from './icons/linkled.png'
import send from './icons/send.png'

const LandingView = () => {
  return (
    <>
    <div className='w-full flex flex-col item-center justify-center '
    style={{
      backgroundImage: `url(${gradient})`,
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      
    }}>
      <div className="w-4/5 flex h-[15vh] md:text-sm text-xs justify-center gap-9 mx-auto mt-7">
    <img src={logo} alt="alt" className='w-[7vw] h-[4vh]' />
    <Link to='/'>Individual</Link>
    <Link to='/'>Business</Link>
    <Link to='/'>Pricing</Link>
    <Link to='/' className='min-w-[15vw] '>Set your Payroll</Link>
    <Link to='/' className='min-w-[11vw] h-[5vh] md:text-sm text-xs items-center text-center 
    flex justify-center items-center text-sm text-info rounded-2xl border-info border-2'>Log in</Link>
    <Link to='/'className='min-w-[11vw] h-[5vh] md:text-sm text-xs bg-info items-center flex 
    justify-center items-center text-sm text-center rounded-2xl
     text-base-100' >Register</Link>
   
  </div> 
  <div className="min-w-full h-[100vh]   ">
    <div className="w-full flex justify-end flex-row">
    <div className="w-2/5 ml-[12vw] flex flex-col gap-3 my-auto">
      <img src={payroll} alt="" className='h-[15vh]'/>
       <p className='w-full'>We've built an all-inclusive simple solution for individual 
      and Businesses to manage staff, pay salaries, bills and 
      relevant taxes at all once
      </p>
      <Link to='/' className='w-1/2 h-[7vh] flex justify-center items-center text-sm bg-info items-center text-center rounded-2xl text-base-100'>Start Using Free, Forever</Link>
      <p>Download the Easipay App</p>
      <div className=" flex items-start justify-start content-start">
        <img src={ios} alt="" className='w-[13vw] ml-[-2vw] h-[13vh]'/>
        <img src={goggle} alt="" className='w-[13vw] ml-[-4vw] h-[13vh]' />
      </div>
    </div>
  <div className="w-3/5 relative" >
    <img src={frame} className=' ' alt="" />
    
    </div>
  </div></div>
  </div> 
    <div className=" w-full flex justify-center items-center" 
    style={{
      backgroundImage: `url(${background2})`,
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height:'130vh'
    }}>
      <div className="w-3/4 flex flex-col mx-auto text-center">
        <h1 className='text-3xl text-info font-bold font-serif'>For Individual and Businesses</h1>
        <p className='mb-5 text-sm '>Join 200+ businesses using Easipay solutions </p>
        <img src={slide2} alt="" />
        <p className='mt-4 text-sm'>We are happy to answer your queries. Please, reach us at <br />
       <span className='text-warning'> hello@myeasipay.com</span> and expect our response sortly after.
        </p>
      </div>
    </div>
    <div className="mt-[7vh] w-full flex flex-col gap-6 justify-center items-center">
      <div className="w-3/4 text-center flex flex-col gap-3">
      <h1 className='text-4xl text-info font-serif font-bold'>How Easipay Works</h1>
      <p>Get started in Three simple steps</p>
      </div>
      <div className="mt-[4vh] w-3/4 flex justify-center ">
        <div className="w-1/2 relative">
          <img src={bg} alt="" className='mt-[10vh] h-[60vh]' />
          <img src={onboarding} alt="" className='w-1/2 h-[80vh] absolute top-0 left-[5vw]'/>
          </div>
          <div className="w-1/2 mb-[30vh]">
            <img src={frame2} alt="" className='w-3/4 h-[70vh]'/>
          </div>
      </div>
      </div>
      
      <div className="w-full"
      style={{
      backgroundImage: `url(${frame3})`,
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      height:'100vh'
    }}>

      </div>
      <div className=" w-full shadow flex justify-center items-center"
      style={{
        backgroundImage: `url(${frame4})`,
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height:'120vh'
      }}>
      <div className="w-1/2 flex justify-end items-center ml-[8vh]" >
        <img src={frame5} alt="" className=' w-3/4 flex justify-end items-end h-1/2 '/>
      </div>
      <div className="w-1/2  ">
        <div className="w-3/4 flex justify-center items-center h-[90vh] rounded-xl shadow-2xl bg-base-100">
        <div className="w-4/5 flex text-center justify-center flex-col gap-3  ">
        <h1 className='font-bold text-2xl'>First things first</h1>
        <p className='text-sm'>We want to serve you better. Tell us a bit <br />
            about yourself or company
        </p>
        <div className="w-full flex justify-evenly items-center shadow rounded-lg h-[7vh]">
        <Link to='/'className='w-2/5 h-[5vh] md:text-sm text-xs bg-info shadow-lg
        items-center flex justify-center items-center text-sm text-center 
        rounded-2xl text-base-100' >Individual</Link>
        <Link to='/' className='w-2/5 h-[5vh] bg-warning md:text-sm text-xs items-center text-center flex 
        justify-center items-center text-sm text-info rounded-2xl  '>Company</Link> 
        
        </div> 
        <input type="text" placeholder='First Name' value='' className='h-[7vh] text-xs text-info
        focus:ring-0 focus:border-info focus:border-1 rounded-2xl border-info border-1 focus:rounded-2xl ' onChange={()=>{}} />
        <input type="text" placeholder='Last Name' value='' className='h-[7vh] text-xs text-info
        focus:ring-0 focus:border-info focus:border-1 rounded-2xl border-info border-1 focus:rounded-2xl ' onChange={()=>{}} />
        <input type="text" placeholder='Email' value='' className='h-[7vh] text-xs text-info
        focus:ring-0 focus:border-info focus:border-1 rounded-2xl border-info border-1 focus:rounded-2xl ' onChange={()=>{}} />
        <input type="text" placeholder='Job Title' value='' className='h-[7vh] text-xs text-info
        focus:ring-0 focus:border-info focus:border-1 rounded-2xl border-info border-1 focus:rounded-2xl ' onChange={()=>{}} />
        <input type="text" placeholder='Company Size' value='' className='h-[7vh] text-xs text-info
        focus:ring-0 focus:border-info focus:border-1 rounded-2xl border-info border-1 focus:rounded-2xl ' onChange={()=>{}} />
        <Link to='' className='w-full h-[7vh] md:text-sm text-xs bg-info items-center flex justify-center
         items-center text-sm text-center rounded-2xl text-base-100'> Request Demo </Link>
        </div></div>
      </div></div>
      <div className="mt-[10vh] w-full flex justify-center items-center">
        <div className="w-3/4 flex justify-evenly gap-4 text-xs">
          <div className=" flex flex-col justify-start gap-4  items-start">
            <img src={logo} alt="" className='h-[3vh] w-[8vw] ' />
            <p>Copyright &copy; 2023 Eazipay. <br />
                All right reserved
            </p>
            <div className="w-full flex justify-between  ">
            <img src={instagram} alt="" className='w-5 h-5'/>
            <img src={twitter} alt="" className='w-5 h-5'/>
            <img src={linkled} alt="" className='w-5 h-5'/>
            <img src={facebook} alt="" className='w-5 h-5'/>
            </div>
          </div>
          <div className=" flex flex-col  gap-4">
          <h1>Product</h1>
          <p>Individual</p>
          <p>Businesses</p>
          <p>Request Demo</p>
          <p>Pricing</p>
          </div>
          <div className=" flex flex-col gap-4  ">
          <h1>Legal</h1>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          </div>
          <div className=" flex flex-col gap-4  ">
          <h1>Resources</h1>
          <p>FAQs</p>
          <p>Blog</p>
          <p>Career</p>
          <p>Customer Stories</p>
          </div>
          <div className=" flex flex-col gap-4  ">
          <h1>Contact</h1>
          <p>eazipay@gmail.com</p>
          <p>+2348168789518</p>
          <div className='w-full relative flex'><input type="email" placeholder='Your Email Adress' className='h-[7vh] text-xs text-info
        focus:ring-0 focus:border-info focus:border-1 rounded-2xl bg-warning border-none focus:rounded-2xl' />
          <img src={send} alt="" className='w-5 h-5 absolute top-2 cursor-pointer right-3 ml-3'/> </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default LandingView