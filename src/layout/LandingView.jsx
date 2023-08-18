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
import frameD from './images/FrameD.png'
import frameEx from './images/FrameEx.png'
import frame4 from './images/Frame4.png'
import frame5 from './images/Frame5.png'
import facebook from './icons/facebook.png'
import twitter from './icons/Twitter.png'
import instagram from './icons/Instagram.png'
import linkled from './icons/linkled.png'
import send from './icons/send.png'
import mask from './images/DasBall.png'
import dasboardA from './images/dasboardA.png'
import dasboardB from './images/dasboardB.png'
import dasboardC from './images/dasboardC.png'
import dasboard from './images/DASHBOARD.jpg'

import { useState } from 'react';

const LandingView = () => {
 
    const [data,setData] = useState({first:'',last:'',email:'',title:'',size:''})

    const ReturnValue = (event) =>{
      setData({ ...data, [event.target.name]: event.target.value })
    }

  return (
    <>
    <div className='w-full flex flex-col item-center justify-center '
    style={{
      backgroundImage: `url(${gradient})`,
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      
    }}>
      <div className="w-4/5 flex h-[15vh] items-center text-xs justify-center gap-9 mx-auto ">
    <img src={logo} alt="alt" className='w-[7vw] h-[4vh]' />
    <Link to='/'>Individual</Link>
    <Link to='/'>Business</Link>
    <Link to='/'>Pricing</Link>
    <Link to='/' className='min-w-[15vw] '>Set your Payroll</Link>
    <Link to='/' className='min-w-[11vw] h-[5vh]  text-xs items-center text-center 
    flex justify-center items-center text-sm text-info rounded-2xl border-info border-2'>Log in</Link>
    <Link to='/'className='min-w-[11vw] h-[5vh]  text-xs bg-info items-center flex 
    justify-center items-center  text-center rounded-2xl
     text-base-100' >Register</Link>
   
  </div> 
  <div className="w-full h-[100vh]   ">
    <div className="w-full flex justify-end gap-[5vw] flex-row">
    <div className="w-1/4  flex flex-col gap-3 my-auto">
      <img src={payroll} alt="" className='h-[15vh]'/>
       <p className='w-full'>We've built an all-inclusive simple solution for individual 
      and Businesses to manage staff, pay salaries, bills and  relevant taxes at all once
      </p>
      <Link to='/' className='w-3/5 h-[7vh] flex justify-center items-center text-xs bg-info 
      items-center text-center rounded-2xl text-base-100'>Start Using Free, Forever</Link>
      <p>Download the Easipay App</p>
      <div className=" flex items-start justify-start content-start">
        <img src={ios} alt="" className='w-[13vw] ml-[-2vw] h-[13vh]'/>
        <img src={goggle} alt="" className='w-[13vw] ml-[-4vw] h-[13vh]' />
      </div>
    </div>
  <div className="w-3/5  flex relative" >
    <img src={mask} className='ml-[2vw] w-4/5 h-4/5'  alt="" />
    <img src={dasboard} className='ml-[2vw] w-4/5 h-1/2 absolute top-[15vh] left-[9vw]'  alt="" />
    <img src={dasboardA} className='w-[20vw] h-[14vh] absolute top-[4vh] left-[3vw]'  alt="" />
    <img src={dasboardC} className='w-[17vw] h-[14vh] absolute top-[29vh] left-[-4vw]'  alt="" />
    <img src={dasboardB} className='w-[20vw] h-[13vh] absolute bottom-[32vh] left-[-1vw]'  alt="" />

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
        <p className='mt-4 text-sm text-center'>We are happy to answer your queries. Please, reach us at <br />
       <span className='text-error cursor-pointer'> hello@myeasipay.com</span> and expect our response sortly after.
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
      
      <div className="w-full flex justify-center items-center"
      style={{
      backgroundImage: `url(${frameD})`,
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      height:'100vh'
    }}>
      <div className="w-3/4 h-full flex justify-center items-center">
        <div className=" w-1/2 h-full flex flex-col justify-center ">
          <p className='text-2xl font-bold font-serif'>Free forever <br />
          for your <span className='text-error'> salary <br /> payment</span>
          </p>
          <p className='text-sm mt-3'> Subscribe to the Easilife today</p>
          <div className="w-full flex">
        <img src={ios} alt="" className='w-[15vw] ml-[-3vw] h-[15vh] cursor-pointer'/>
        <img src={goggle} alt="" className='w-[15vw] ml-[-4vw] h-[15vh] cursor-pointer' />
          </div>
        </div>
        <div className="w-3/4">
        <img src={frameEx} alt="" className='w-full h-3/4' />
      </div></div>
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
        <input type="text" placeholder='First Name' name='first' value={data.first} className='h-[7vh] text-xs text-info
        focus:ring-0 focus:border-info focus:border-1 rounded-2xl border-info border-1 focus:rounded-2xl ' onChange={ReturnValue} />
        <input type="text" placeholder='Last Name' name='last' value={data.last} className='h-[7vh] text-xs text-info
        focus:ring-0 focus:border-info focus:border-1 rounded-2xl border-info border-1 focus:rounded-2xl ' onChange={ReturnValue} />
        <input type="text" placeholder='Email' name='email' required value={data.email} className='h-[7vh] text-xs text-info
        focus:ring-0 focus:border-info focus:border-1 rounded-2xl border-info border-1 focus:rounded-2xl ' onChange={ReturnValue} />
        <input type="text" placeholder='Job Title' name='title' value={data.title} className='h-[7vh] text-xs text-info
        focus:ring-0 focus:border-info focus:border-1 rounded-2xl border-info border-1 focus:rounded-2xl ' onChange={ReturnValue} />
        <input type="text" placeholder='Company Size' name='size' value={data.size} className='h-[7vh] text-xs text-info
        focus:ring-0 focus:border-info focus:border-1 rounded-2xl border-info border-1 focus:rounded-2xl ' onChange={ReturnValue} />
        <Link to='' className='w-full h-[7vh] md:text-sm text-xs bg-info items-center flex justify-center
         items-center text-sm text-center rounded-2xl text-base-100'> Request Demo </Link>
        </div></div>
      </div></div> 
      <div className="mt-[10vh] mb-[10vh] w-full flex justify-center items-center">
        <div className="w-3/4 flex justify-evenly gap-4 text-xs">
          <div className=" flex flex-col justify-start gap-4  items-start">
            <img src={logo} alt="" className='h-[3vh] w-[8vw] ' />
            <p>Copyright &copy; 2023 Eazipay. <br />
                All right reserved
            </p>
            <div className="w-full flex justify-between  ">
            <img src={instagram} alt="" className='w-5 h-5 cursor-pointer'/>
            <img src={twitter} alt="" className='w-5 h-5 cursor-pointer'/>
            <img src={linkled} alt="" className='w-5 h-5 cursor-pointer'/>
            <img src={facebook} alt="" className='w-5 h-5 cursor-pointer'/>
            </div>
          </div>
          <div className=" flex flex-col  gap-4">
          <h1 className='font-bold text-lg'>Product</h1>
          <p className=' cursor-pointer'>Individual</p>
          <p className=' cursor-pointer'>Businesses</p>
          <p className=' cursor-pointer'>Request Demo</p>
          <p className=' cursor-pointer'>Pricing</p>
          </div>
          <div className=" flex flex-col gap-4  ">
          <h1 className='font-bold text-lg'>Legal</h1>
          <p className=' cursor-pointer'>Privacy Policy</p>
          <p className=' cursor-pointer'>Terms of Service</p>
          </div>
          <div className=" flex flex-col gap-4  ">
          <h1 className='font-bold text-lg'>Resources</h1>
          <p className=' cursor-pointer'>FAQs</p>
          <p className=' cursor-pointer'>Blog</p>
          <p className=' cursor-pointer'>Career</p>
          <p>Customer Stories</p>
          </div>
          <div className=" flex flex-col gap-4  ">
          <h1 className='font-bold text-lg'>Contact</h1>
          <p className=' cursor-pointer'>eazipay@gmail.com</p>
          <p className=' cursor-pointer'>+2348168789518</p>
          <div className='w-full relative flex'><input type="email" placeholder='Your Email Adress' className='h-[7vh] text-xs text-info
        focus:ring-0 focus:border-info focus:border-1 rounded-2xl bg-warning border-none focus:rounded-2xl' />
          <img src={send} alt="" className='w-5 h-5 absolute top-[9px] cursor-pointer right-3 ml-7' /> </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default LandingView