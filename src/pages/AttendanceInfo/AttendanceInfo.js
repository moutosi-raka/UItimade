import React, { useEffect, useState } from 'react';
import logo from '../../assests/ultimate hrm logo-05-02 5.png'

const AttendanceInfo = () => {
  const employeeInfo = {
   0: {
      Id: 1,
      employeeName: 'abul',
      date: '1/12/2022'
    },
    1: {
      Id: 2,
      employeeName: 'abul',
      date: '1/12/2022'
    }
  } 
// const [employeeInfo, setEmployInfo] = useState([]);

    // useEffect( ()=>{
    //   fetch('https://test.nexisltd.com/test ',{
    //     method: 'GET',
    //     headers:{
    //       authorization: `bearer ${localStorage.getItem('access_token')}`
    //     }
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log('data', data)
    //     // const employeeArray = Object.values(data)
    //     // console.log('employ',employeeArray);
    //     // setEmployInfo(employeeArray)
    // })
    // },[])
    
    const employeeArray = Object.values(employeeInfo);
    console.log('employ',employeeArray);
    return (
        <div>
            <img className=' w-1/2 lg:w-[164px] ml-8 mt-6' src={logo} alt=''/>
            <div className='primary-bg mt-12 rounded-md w-1/2 lg:w-[480px] mx-auto'>
                <h1 className='text-2xl lg:text-4xl text-white text-center font-semibold p-3  '>Attendance Information</h1>
            </div>
            <div className="w-4/5 mx-auto mt-12">
  <table className="table w-full">
    
    <tbody>
      <tr>
        <th>Date</th>
        <th>Employee Name</th>
        <th>Status</th>
      </tr>
    </tbody>
    <tbody>
    {
        employeeArray.map((employee,i) =>
            <tr key={employee.Id}>
            <td>{employee.date}</td>
            <td>{employee.employeeName}</td>
            <td>Blue</td>
          </tr>
        )  
     
    }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AttendanceInfo;