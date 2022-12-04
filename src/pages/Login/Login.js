import React from 'react';
import { Link,  useNavigate  } from 'react-router-dom';
import img from '../../assests/istockphoto-1321277096-612x612 1.png'
import logo from '../../assests/ultimate hrm logo-05-02 5.png'


const Login = () => {
    const navigate = useNavigate();
    const handleLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo ={
            email,
            password
        }
        fetch(' https://test.nexisltd.com/login',{
            method: "POST",
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
                .then(data =>{
                    console.log("data",data);
                    localStorage.setItem('access_token', data.access_token);
                    navigate('/attendance')
                })
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
                        <h2 className='text-xl text-center  mt-14 mb-24 font-semibold'>Log in From</h2>
                   <form className='h-[270px]' onSubmit={handleLogin} >
                   <div className="form-control">
                            <input type='email'
                            placeholder='Write Email Address' 
                            name='email'
                            className=" outline-0 border-b-2 border-black-200 border-b-black-200" />
                            </div>
                            <div className="form-control">
                            <input type='password'
                            placeholder='Write Password' 
                            name='password'
                            className=" outline-0 border-b-2 border-black-200 border-b-black-200 mt-12" />
                            <label className='lightgray-color mt-2 text-xs'>Your password must be 8 character</label>
                            </div>
                        
                         <div className='mt-8  mb-8 flex justify-around'>
                                <button className="primary-btn">Log In</button>
                       </div>
                   </form>
                   <p className='text-right lightgray-color mt-5'>Don't have an account? <Link  to="/" className='primary-color t underline underline-offset-4'>sign up Here</Link></p>
                   </div> 

                </div>
            </div>
        </div>
    );
};

export default Login;