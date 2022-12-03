import React, { useEffect, useState } from 'react';
import img from '../../assests/istockphoto-1321277096-612x612 1.png'


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

    }
    return (
        <div>
            <div className="hero ">
                <div className="hero-content gird grid-cols-1 lg:grid-cols-2">
                    <div className="text-center lg:text-left ">
                        <img src={img} alt="" />
                    </div>
                   <form onSubmit={handleSubmit} className="w-10/12 shadow-2xl bg-base-100 p-10">
                         
                         {
                            userInfoArray.map(info =><div  key={info.id} className="card-body"> 
                           {
                            info.name === 'phone' ?
                            <div className="form-control  flex flex-row"> 
                                <input className='p-2 outline-0 border-b-2 border-black-200 border-b-black-200 mr-2 shrink-1 w-1/4' 
                                type="text"
                                 placeholder="+880" />
                                <input className='p-2 outline-0 border-b-2 w-4/5 border-black-200 border-b-black-200 shrink-0 ' type={info.type} placeholder={info.label} />
                            </div>
                            :
                            <div className="form-control">
                            <input type={info.type} placeholder={info.label} 
                            name={info.name}
                            className="p-2 outline-0 border-b-2 border-black-200 border-b-black-200" />
                            </div>
                           }
                           
                        </div>)
                         } 
                         {
                            userInfoArray.length === 1 ?
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div> 
                            :  <>
                             { showBack &&  <button onClick={handleBack}  className='btn btn-primary'>back</button>}
                             <button onClick={handlenext} className='btn btn-primary'>Next</button>
                            </>
                         }
                       
                            {/* <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div> */}
                   </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;