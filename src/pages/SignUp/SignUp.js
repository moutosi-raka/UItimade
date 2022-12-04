import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img from '../../assests/istockphoto-1321277096-612x612 1.png'
import logo from '../../assests/ultimate hrm logo-05-02 5.png'


const SignUp = () => {
   
    const userInfo = [
        {
            id: 1,
            label: "Write First Name",
            name: "firstName",
            type: 'text',
            validationMsg: ''
        },
        {
            id: 2,
            label: "Write Last Name",
            name: "lastName",
            type: 'text',
            validationMsg: ''
        },
        {
            id: 3,
            label: "1xxxxxx",
            name: "phone",
            type: 'text',
            validationMsg: ''
        },
        {
            id: 4,
            label: "Write Email",
            name: "email",
            type: 'email',
            validationMsg: ''
        },
        {
            id: 5,
            label: "Write Password",
            name: "password",
            type: 'password',
            validationMsg: "Your password must be 8 character"
        },
    ]
    const [showBack, setShowBack] = useState(false);
    const [firstIndex, setFirstIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(2);
    const [userInfoArray, setUserInfoArray] = useState(userInfo.slice(0, 2));

      useEffect(() => {
        setUserInfoArray(userInfo.slice(firstIndex, lastIndex));
      }, [firstIndex, lastIndex]);

    const handleSubmit =(event)=>{
        event.preventDefault();
    }
    const handlenext = ()=>{
    setShowBack(true);
    setFirstIndex(firstIndex+2);
    setLastIndex(lastIndex+2);
    }

    const handleBack = () =>{
      if(firstIndex > 2)
      {
        setFirstIndex(firstIndex-2);
        setLastIndex(lastIndex-2);
      }
      else{
        setShowBack(false);
        setFirstIndex(0);
        setLastIndex(2);
      }
    }
    return (
        <div>
            <div  className="">
                <div className="grid grid-col-1 lg:grid-cols-3">
                    <div className='lg:col-span-2' >
                        <img className='w-[164px] ml-8 mt-6' src={logo} alt=''/>
                        <div className=" flex justify-center">
                        <img className='w-[612px]' src={img} alt="" />
                        </div>    
                    </div>
                    <div className="h-[560px] shadow-2xl bg-base-100 p-10" >
                        <h2 className='text-xl text-center  my-14 font-semibold'>SignUp From</h2>
                   <form className='h-[270px]' onSubmit={handleSubmit} >
                         
                         {
                            userInfoArray.map(info =><div  key={info.id} className="card-body"> 
                           {
                            info.name === 'phone' ?
                            <div className="form-control  flex flex-row"> 
                                <input className='outline-0 border-b-2 border-black-200 border-b-black-200 mr-2 shrink-1 w-1/4' 
                                type="text"
                                 placeholder="+880" />
                                <input className='outline-0 border-b-2 w-4/5 border-black-200 border-b-black-200 shrink-0 ' type={info.type} placeholder={info.label} />
                            </div>
                            :
                            <div className="form-control">
                            <input type={info.type} placeholder={info.label} 
                            name={info.name}
                            className=" outline-0 border-b-2 border-black-200 border-b-black-200" />
                               {info?.validationMsg && <label className='lightgray-color mt-2 text-xs'>{info?.validationMsg}</label>}
                            </div>
                           }
                           
                        </div>)
                         } 
                         <div className='mt-8  mb-8 flex justify-around'>
                         { showBack &&  <button onClick={handleBack}  className=''>Back</button>}
                         {
                            userInfoArray.length === 1 ?
                            <div className='text-right' >
                                <button className="primary-btn">Sign Up</button>
                            </div> 
                            :  <div >
                             <button onClick={handlenext} className='primary-btn '>Next step <FaArrowRight className='ml-4 inline'></FaArrowRight></button>
                            </div>
                         }
                       </div>
                   </form>
                  { showBack=== false && <p className='text-right lightgray-color mt-12'>Already have a account? <Link to="/login" className='primary-color t underline underline-offset-4'>Login</Link></p>}
                   </div> 

                </div>
            </div>
        </div>
    );
};

export default SignUp;