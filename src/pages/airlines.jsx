import React from 'react';
import { useState } from 'react';
import { AirlineData } from '../components/airlinesdata';
import './airlines.css'

export default function Airlines() {

    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptoggle, setpopuptoggle] = useState(false);

    const changeContent = (operators) => {
        setpopupcontent([operators]);
        setpopuptoggle(!popuptoggle);
    };


    return (
        <>
           <h1>Airlines</h1>
            <div className="app_container">
                <div className="content_container animate__animated animate__slideInUp">
                    {AirlineData.map((operators) => {
                        console.log(operators.image)
                        return (
                            <div className="content_card">
                                <img src={operators.image} alt="" />
                                <p>{operators.airline}  
                                    <button onClick={() => changeContent(operators)} className="more">Details</button> 
                                </p>
                            </div>
                        );
                    })}
                </div>
                {popuptoggle&&<div className="pop_up_container" onClick = {changeContent}>
                    <div className="pop_up_body" onClick={(e) => e.stopPropagation()}>

                        <div className="pop_up_content">
                            {popupcontent.map((pop) => {
                                return (
                                    <div className="pop_up_card">
                                        <div className="pop_up_header">
                                            <p className='Name'>{pop.airline}</p>
                                            <button onClick={changeContent} className="but">
                                                <i className='fas fa-times'></i>
                                            </button>
                                        </div>
                                        <p className="details">{pop.details}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>}
            </div>
        </>
    );
}