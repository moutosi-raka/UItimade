import React from 'react';
import img from '../../assests/istockphoto-1321277096-612x612 1.png'
import './signup.css'

const SignUp = () => {
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left ">
                        <img src={img} alt="" />
                    </div>
                   <form className=" flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                   
                        <div className="card-body">
                            <div className="form-control"> 
                                <input type="text" placeholder="Write First Name" className="p-2 outline-0 border-b-2 border-black-200 border-b-black-200" />
                            </div>
                           
                            <div className="form-control"> 
                                <input type="text" placeholder="Write Second Name" className="p-2 outline-0 border-b-2 border-black-200 border-b-black-200" />
                            </div>
                           
                            <div className="form-control  flex flex-row"> 
                                <input className='p-2 outline-0 border-b-2 border-black-200 border-b-black-200 mr-2 shrink-1 w-1/4' type="text" placeholder="+880" />
                                <input className='p-2 outline-0 border-b-2 w-4/5 border-black-200 border-b-black-200 shrink-0 ' type="text" placeholder="1xxxxx" />
                            </div>
                           
                           
                            <div className="form-control"> 
                                <input type="text" placeholder="Write Email" className="p-2 outline-0 border-b-2 border-black-200 border-b-black-200" />
                            </div>

                            <div className="form-control"> 
                                <input type="text" placeholder="Write Password" className="p-2 outline-0 border-b-2 border-black-200 border-b-black-200" />
                            </div>
                           
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    
                   </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;