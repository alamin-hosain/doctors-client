import React, { useContext } from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider';


const DisplayEorror = () => {
    const { logOut } = useContext(AuthContext);
    const errors = useRouteError();
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(e => console.error(e))
    }

    return (
        <div>
            <p className="text-red-500 text-3xl">Something Went Wrong</p>
            <p className="text-red-500">{errors.statusText || errors.message}</p>
            <h4 className="text-3xl">Please <button onClick={handleSignOut}>Sign Out</button> and log back in</h4>
        </div>
    )
}

export default DisplayEorror