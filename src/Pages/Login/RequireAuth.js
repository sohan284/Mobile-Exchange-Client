import React, { Children } from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification,sending,error] = useSendEmailVerification(auth);

    if(loading){
        return(
            <div className='flex justify-center h-screen items-center'>
   <Loading></Loading>
  </div>
        );
    }
    if(!user){
        return <Navigate to="/login" state={{from : location}} replace />
    }
    return children;
};

export default RequireAuth;