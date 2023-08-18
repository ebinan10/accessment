import React from 'react'
import dashlogo from './images/DashLogo.png'
import dashboard1 from './icons/dashboard1.png'
import wallet from './icons/Wallet.png'
import userlogo from './icons/user-plus.png'
import payroll from './icons/payroll.png'
import  compliance from './icons/compliance.png'
import handmoney from './icons/Frame (1).png'
import bookkeeping from './icons/open book.png'
import phone from './icons/call.png'
import settings from './icons/Vector (4).png'
import caretDown from './icons/Chevron_Right.png'
import line from './icons/line.png'
import line2 from './icons/line2.png'
import companylogo from './icons/Company Logo.png'
import notification from './icons/ICON NOTIFICATION.png'
import img from './icons/Ellipse 12.png'
import right from './icons/upper arrow.png'
import paysalary from './icons/paysalary.png'
import paycompliance from './icons/paycompliance.png'
import quickloan from './icons/quickloan.png'
import adduser from './icons/user-plus.png'
import frame from './icons/Frame 4.png'

const DashBoardView = () => {
  return (
    <div className='w-full bg-warning flex'>
       <div className="w-1/4">
        <div className="w-full flex flex-col bg-base-100">
          <img src={dashlogo} alt="" className='mb-5' />
          <div className='w-full h-[8vh] flex gap-4 bg-warning items-center '><img src={line} alt=""
           className='h-[8vh] w-[3px]' /><img src={dashboard1} alt="" 
           className='h-[3vh] w-[20px]' /><p className='text-info text-md '>Dashboard</p>
            </div>
            <div className='w-full h-[8vh] flex gap-4 items-center pl-5 shadow-sm'>
              <img src={wallet} alt="" 
           className='h-[3vh] w-[20px]' /><p className=' text-md '>Wallet</p>
            </div>
            <div className='w-full h-[8vh] flex gap-4 relative items-center pl-5 shadow-sm'>
              <img src={userlogo} alt="" 
           className='h-[3vh] w-[20px]' /><p className=' text-md '>Employee Management</p>
            <img src={caretDown} alt="" className='absolute top-3 right-3 cursor-pointer'/>
            </div>
            <div className='w-full h-[8vh] flex gap-4 relative items-center pl-5 shadow-sm'>
              <img src={payroll} alt="" 
           className='h-[3vh] w-[20px]' /><p className=' text-md '>Payroll</p>
            <img src={caretDown} alt=""  className='absolute top-3 right-3 cursor-pointer'/>
            </div>
            <div className='w-full h-[8vh] flex gap-4 relative items-center pl-5 shadow-sm'>
              <img src={compliance} alt="" 
           className='h-[3vh] w-[20px]' /><p className=' text-md '>Compliance</p>
            <img src={caretDown} alt="" className='absolute top-3 right-3 cursor-pointer'/>
            </div>
            <div className='w-full h-[8vh] flex gap-4 relative items-center pl-5 shadow-sm'>
              <img src={handmoney} alt="" 
           className='h-[3vh] w-[20px]' /><p className=' text-md '>Quick Loan</p>
            <img src={caretDown} alt="" className='absolute top-3 right-3 cursor-pointer' />
            </div>
            <div className='w-full h-[12vh] pt-3 flex gap-4 relative items-start pl-5 shadow-b-sm'>
              <img src={bookkeeping} alt="" 
           className='h-[3vh] w-[20px]' /><p className=' text-md  '>Book Keeping</p>
            <img src={caretDown} alt="" className='absolute top-3 right-3 cursor-pointer' />
            </div>
            <div className='w-full h-[12vh] flex gap-4 pb-3 items-end pl-5 shadow-sm'>
              <img src={phone} alt="" 
           className='h-[3vh] w-[20px]' /><p className=' text-md '>Support</p>
            </div>
            <div className='w-full h-[38vh] pt-3 flex gap-4 relative items-start pl-5 shadow-sm'>
              <img src={settings} alt="" 
           className='h-[3vh] w-[20px] ' /><p className=' text-md '>Settings</p>
            <img src={caretDown} alt="" className='absolute top-3 right-3 cursor-pointer' />
            </div>
         
        </div>

       </div>
       <div className="w-4/5">
        <div className="w-full"> 
          <div className="w-full h-[9vh] bg-base-100 flex items-center justify-between">
            <img src={companylogo} alt="" className='h-[6vh] w-[5vw] ml-8 ' />
            <div className="w-2/5 h-full flex items-center justify-between">
              <img src={notification} alt="" className='ml-4 h-[3vh] w-[2vw] ' />
             <div className="w-3/4 h-full flex gap-3 items-center">
              <img src={img} alt="" className='h-[4vh] w-[4vw] '/>
              <div className="w-1/2 flex flex-col">
                <h1 className='text-sm font-bold'>Kalu Abasiama</h1>
                <p>Admin</p>
              </div>
              <div className="ml-[-10vh] mb-3 w-1/2 h-full flex justify-start items-end "> 
              <img src={right} alt="" className='h-[3vh] w-[3vw] ' />
             </div>
            </div>
            </div>
          </div>
        </div>
        <div className="w-full flex
         flex-col justify-center items-center">
          <div className="w-4/5">
            <div className="w-full flex flex-col ">
            <div className="w-full">
                <h1 className='text-2xl' >Welcome Abasiama</h1>
                <p className='text-xs'>pay and manage your employee in minutes</p>
              </div>
              <div className="w-full h-[25vh] flex gap-5">
                <div className="w-full flex flex-col">
                  <div className="w-full">
                    <img src={frame} alt="" />
                  </div>
                  <div className="w-full flex justify-between">
                  <img src={''} alt="" className='w-1/5' />
                  <img src={''} alt="" className='w-1/5'/>
                  <img src={''} alt="" className='w-1/5'/>
                  <img src={''} alt="" className='w-1/5'/>
                  </div>
                </div>
                <div className="w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default DashBoardView; 