import React, { useEffect, useState } from 'react';
import logo from '../../assests/ultimate hrm logo-05-02 5.png'

const AttendanceInfo = () => {

const [employeeInfo, setEmployInfo] = useState([]);
    useEffect( ()=>{
      fetch('https://test.nexisltd.com/test ',{
        method: 'GET',
        headers:{
          authorization: `bearer ${localStorage.getItem('access_token')}`
        }
      })
      .then(res => res.json())
      .then(data => {
        const employeeArray = Object.values(data);   
        setEmployInfo(employeeArray);
    })
    },[])


  
    return (
        <div>
            <img className=' w-1/2 lg:w-[164px] ml-8 mt-6' src={logo} alt=''/>
            <div className='primary-bg mt-12 rounded-md w-1/2 lg:w-[480px] mx-auto'>
                <h1 className='text-2xl lg:text-4xl text-white text-center font-semibold p-3  '>Attendance Information</h1>
            </div>
            <div className="w-4/5 mx-auto mt-12">
          
  <table className="table w-full">
    <thead>
      <tr>   
        <th>Date</th>
        <th>Name</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    
      {
        employeeInfo.map(employee => 
        Object.keys(employee.attendance).map(date => 
          <tr key={employee.id + date}>
          <td>
           {date}
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{employee.name}</div>
              <div className="text-sm opacity-50">{employee.position}</div>
            </div>
          </div>
        </td>
        <td>{employee.attendance[date].status}</td>
      </tr>
        )
)
      }
     
    </tbody>
    
  </table>

</div>
        </div>
    );
};

export default AttendanceInfo;