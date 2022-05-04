import React from 'react';
import { useState } from 'react';
import { AirportData } from '../components/airportdata';
import './airlines.css'
import {styled} from '@mui/material/styles'
import { Button } from '@mui/material';

export default function Airports() {
    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptoggle, setpopuptoggle] = useState(false);

    const changeContent = (operators) => {
        setpopupcontent([operators]);
        setpopuptoggle(!popuptoggle);
    };

    const ColorButton = styled(Button) (({theme}) => ({
        color: theme.palette.getContrastText('#31848f'),
        backgroundColor: '#31848f',
        "&:hover": {
            backgroundColor: '#39c6d8'
        }
    }));

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <>
           <div className="app_container">
                <div className="content_container animate__animated animate__slideInUp">
                    {AirportData.map((operators) => {
                        console.log(operators.image)
                        return (
                            <div className="content_card">
                                <img src={operators.image} alt="" />
                                <p>{operators.airport}  
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
                                            <p className='Name'>{pop.airport}</p>
                                            <button onClick={changeContent} className="but">
                                                <i className='fas fa-times'></i>
                                            </button>
                                        </div>
                                        <p className="details">{pop.details}</p>
                                        <ColorButton onClick={() => openInNewTab(pop.directions)}
                                            variant='contained' className='link'>Directions</ColorButton>
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