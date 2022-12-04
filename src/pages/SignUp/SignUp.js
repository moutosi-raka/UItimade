import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img from '../../assests/istockphoto-1321277096-612x612 1.png'
import logo from '../../assests/ultimate hrm logo-05-02 5.png'
import validator from 'validator'
import { useForm } from 'react-hook-form';
import InputField from './InputField/InputField';


const SignUp = () => {
    const [showBack, setShowBack] = useState(false);
    const [firstIndex, setFirstIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(2);
    const [errorMessage, setErrorMessage] = useState('');
    const [userInput, setUserInput] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        password: ""
    });
    const userInfo = [
        {
            id: 1,
            label: "Write First Name",
            name: "first_name",
            type: 'text',
            validationMsg: '',
        },
        {
            id: 2,
            label: "Write Last Name",
            name: "last_name",
            type: 'text',
            validationMsg: '',
        },
        {
            id: 3,
            label: "1xxxxxx",
            name: "phone_number",
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
    const validate = (value) => {
 
        if (value.length > 8) {
          setErrorMessage('Is Strong Password')
        } else {
          setErrorMessage('Is Not Strong Password')
        }
      }
    const handleChange = (event) => {
        if(event.target.name=== 'password')
        {
            validate(event.target.value)
            setUserInput({ ...userInput, [event.target.name]: event.target.value });

        }
        else{
            setUserInput({ ...userInput, [event.target.name]: event.target.value });
        }
      };

    const [userInfoArray, setUserInfoArray] = useState(userInfo.slice(0, 2));

    useEffect(() => {
        setUserInfoArray(userInfo.slice(firstIndex, lastIndex));
    }, [firstIndex, lastIndex]);


    const handleSignup = (event) => {
         console.log("userINput", userInput);
        fetch('https://test.nexisltd.com/signup',{
            method: "POST",
            body: JSON.stringify(userInput)
        })
        .then(res => res.json())
                .then(data =>{
                    console.log("data",data);
                })
        
    }
    const handlenext = (e) => {
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
                        <form className='h-[200px]'>

                            {
                                userInfoArray.map(info =>
                                <InputField
                                handleChange={handleChange}
                                userInput={userInput}
                                key={info.id} 
                                errorMessage={errorMessage}
                                info={info}>
                                </InputField>
                                )
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