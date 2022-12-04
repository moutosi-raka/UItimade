import React from 'react';
import { useNavigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const navigate = useNavigate();
    if(localStorage.getItem('access_token')){
        return children
    }
    return navigate('/')
};

export default PrivateRoute;