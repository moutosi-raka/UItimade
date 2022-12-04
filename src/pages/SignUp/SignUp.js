import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img from '../../assests/istockphoto-1321277096-612x612 1.png'
import logo from '../../assests/ultimate hrm logo-05-02 5.png'
import validator from 'validator'
import { useForm } from 'react-hook-form';


const SignUp = () => {
    const [showBack, setShowBack] = useState(false);
    const [firstIndex, setFirstIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(2);
    const [errorMessage, setErrorMessage] = useState('');
    const [userInput, setUserInput] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: ""
    });
    const handleChange = (event) => {
        setUserInput({ ...userInput, [event.target.name]: event.target.value });
      };
    const userInfo = [
        {
            id: 1,
            label: "Write First Name",
            name: "firstName",
            type: 'text',
            validationMsg: '',
        },
        {
            id: 2,
            label: "Write Last Name",
            name: "lastName",
            type: 'text',
            validationMsg: '',
        },
        {
            id: 3,
            label: "1xxxxxx",
            name: "phone",
            type: 'text',
            validationMsg: '',
        },
        {
            id: 4,
            label: "Write Email",
            name: "email",
            type: 'email',
            validationMsg: '',
        },
        {
            id: 5,
            label: "Write Password",
            name: "password",
            type: 'password',
            validationMsg: "Your password must be 8 character"
        },
    ]

    const [userInfoArray, setUserInfoArray] = useState(userInfo.slice(0, 2));

    useEffect(() => {
        setUserInfoArray(userInfo.slice(firstIndex, lastIndex));
    }, [firstIndex, lastIndex]);


    const handleSignup = (event) => {
        // event.preventDefault();
        console.log("userINput", userInput);

        // const form = event.target;
        // const first_name = form.firstName.value;
        // const last_Name = form.lastName.value;
        // const phone_number = form.phone.value;
        // const email = form.email.value;
        // const password = form.password.value;
        // console.log(first_name, last_Name, phone_number,email, password )
    }
    const handlenext = (e) => {
        // e.preventDefault();
        console.log("userINput", userInput);
        setShowBack(true);
        setFirstIndex(firstIndex + 2);
        setLastIndex(lastIndex + 2);
    }

    const handleBack = (e) => {
        e.preventDefault();
        if (firstIndex > 2) {
            setFirstIndex(firstIndex - 2);
            setLastIndex(lastIndex - 2);
        }
        else {
            setShowBack(false);
            setFirstIndex(0);
            setLastIndex(2);
        }
    }
    // const validate = (value) => {
    //     if(value.length<=8) {
    //         setErrorMessage('provide')
    //         console.log(value.length)
    //     } else {
           
    //         setErrorMessage('Is Strong Password')
    //     }
    // }
    return (
        <div>
            <div className="">
                <div className="grid grid-col-1 lg:grid-cols-3">
                    <div className='lg:col-span-2' >
                        <img className='w-[164px] ml-8 mt-6' src={logo} alt='' />
                        <div className=" flex justify-center">
                            <img className='w-[612px]' src={img} alt="" />
                        </div>
                    </div>
                    <div className="h-[560px] shadow-2xl bg-base-100 p-10" >
                        <h2 className='text-xl text-center  my-14 font-semibold'>SignUp From</h2>
                        <form className='h-[270px]'>

                            {
                                userInfoArray.map(info => <div key={info.id} className="card-body">
                                    {
                                        info.name === 'phone' ?
                                            <div className="form-control  flex flex-row">
                                                <p className='outline-0 border-b-2 border-black-200 border-b-black-200 mr-2 shrink-1 w-1/4 lightgray-color' 
                                                >+880</p>

                                                <input className='outline-0 border-b-2 w-4/5 border-black-200 border-b-black-200 shrink-0 '
                                                name={info.name} 
                                                type={info.type} placeholder={info.label} onChange={handleChange}
                                                value={userInput[info.name]}/>
                                            </div>
                                            :
                                            <div className="form-control">
                                                {
                                                    info.name === 'password' ?
                                                        <input type={info.type} placeholder={info.label}
                                                            name={info.name}
                                                            className=" outline-0 border-b-2 border-black-200 border-b-black-200"
                                                            onChange={handleChange}
                                                            value={userInput[info.name]}/>
                                                        : <input 
                                                        type={info.type} placeholder={info.label}
                                                            name={info.name}
                                                            className=" outline-0 border-b-2 border-black-200 border-b-black-200"
                                                            onChange={handleChange}
                                                            value={userInput[info.name]}/>
                                                }
                                                {info?.validationMsg && <label className='lightgray-color mt-2 text-xs'>{info?.validationMsg}</label>
                                                }
                                                {errorMessage && <p className='lightgray-color mt-2 text-xs text-red-700'>{errorMessage}</p>
                                                }

                                            </div>
                                    }

                                </div>)
                            }

                        </form>
                        <div className='mt-8  mb-8 flex justify-around'>
                                {showBack && <button onClick={handleBack} className=''>Back</button>}
                                {
                                    userInfoArray.length === 1 ?
                                        <div className='text-right' >
                                            <button className="primary-btn" onClick={handleSignup}>Sign Up</button>
                                        </div>
                                        : <div >
                                            <button onClick={handlenext} className='primary-btn '>Next step <FaArrowRight className='ml-4 inline'></FaArrowRight></button>
                                        </div>
                                }
                            </div>
                        {showBack === false && <p className='text-right lightgray-color mt-12'>Already have a account? <Link to="/login" className='primary-color t underline underline-offset-4'>Login</Link></p>}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;