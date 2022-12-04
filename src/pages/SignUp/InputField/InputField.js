import React from 'react';

const InputField = ({info, handleChange, userInput, errorMessage}) => {
    return (
        <div>
            <div key={info.id} className="card-body">
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
                         {errorMessage && info.name==='password' && <p className='lightgray-color mt-2 text-xs'>{errorMessage}</p>
                                                }

                         </div>
                     }

                 </div>
        </div>
    );
};

export default InputField;