import React from 'react';
import "./success.scss";
import { useNavigate } from 'react-router-dom';

const Success = () => {

    const navigate = useNavigate();
    const exit = () => {
        navigate("/")
    }
    setTimeout( exit, 1500);

    return (
        <div className='main'>
            <div className='container'>
                <div className='label'>
                    <div className='left'>
                        <img src="../../images/shield.gif" alt="sec" />
                    </div>
                    <div className='right'>
                        <p>Account has been authenticated!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success