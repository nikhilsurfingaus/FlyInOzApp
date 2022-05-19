import React from 'react';
import './GetReview.css'
import { useState, useEffect } from 'react';
import firebase from '../firebase';
import {v4 as uuidv4} from 'uuid';
import {styled} from '@mui/material/styles'
import { Button } from '@mui/material';
import StarsRating from 'stars-rating'


export default function GetReviews() {

    const ColorButton = styled(Button) (({theme}) => ({
        color: theme.palette.getContrastText('#31848f'),
        backgroundColor: '#31848f',
        "&:hover": {
            backgroundColor: '#39c6d8'
        }
    }));

    const [review, setReview] = useState([]);
    const [Name, setName] = useState('');
    const [Comments, setComments] = useState('');
    const [Departure, setDeparture] = useState('');
    const [Destination, setDestination] = useState('');
    const [Rating, setRating] = useState('');
    const [Airline, setAirline] = useState('');

    const ref = firebase.firestore().collection("review");

    function getReview() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setReview(items);
        });
    }

    useEffect(() => {
        getReview();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    function addReview(newReview) {
        ref
            .doc(newReview.id)
            .set(newReview)
            .catch((err) => {
                console.error(err);
            });

        setName('');
        setComments('');
        setAirline('');
        setDeparture('');
        setDestination('');
        setRating('');
        changeContent();
    }

    const [popuptoggle, setpopuptoggle] = useState(false);

    const changeContent = () => {
        setpopuptoggle(!popuptoggle);
    };

    // FUNCTION HERE THAT WHEN CHANGE CONTENT POP UP MESSAGE

    return (
        <>

            <div className="review-container">
                <div className="write">
                    <ColorButton onClick={() => changeContent()} variant='contained' className='link'>
                        Write Review
                    </ColorButton>
                </div>
                <div className="app_container">
                <div className="content_container animate__animated animate__slideInUp">
                {review.map((post) => (
                    <div className="content_card">
                            <div className="revname">
                                <h2 className='head' >{post.Name} <StarsRating className='star' size={17} edit={false} count={10} value={post.Rating} color2={'#39c6d8'} /></h2>
                            </div>
                            <div className="revcon">
                                <h2>Airline: {post.Airline}</h2>
                                <h2>From: {post.Departure}</h2>
                                <h2>To: {post.Destination}</h2>
                                <h2>Comments: {post.Comments}</h2>
                            </div>

                    </div>
                ))}
                </div>
            </div>
            </div>

            {popuptoggle&&<div className="pop_up_container" onClick = {changeContent}>
                <div className="pop_up_body" onClick={(e) => e.stopPropagation()}>
                        <div className="pop_up_content">
                                <div className="pop_up">
                                    <div className="top">
                                        <p>Write Review </p>
                                        <button onClick={changeContent} className="butt">
                                                <i className='fas fa-times'></i>
                                        </button>
                                    </div>
                                </div>
                            <div className="details">
                                <div className="name">
                                    <input placeholder='Name' value={Name} type="text" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="select">
                                    <select placeholder='Airline' value={Airline} onChange={(e) => setAirline(e.target.value)}>
                                        <option value="" hidden >Airline</option>
                                        <option value="Qantas" >Qantas</option>
                                        <option Value="Virgin Australia">Virgin Australia</option>
                                        <option Value="Jetstar">Jetstar</option>
                                        <option Value="REX">REX</option>
                                        <option Value="QantasLink">QantasLink</option>
                                        <option Value="Virgin Regional">Virgin Regional</option>
                                        <option Value="Alliance Airlines">Alliance Airlines</option>
                                        <option Value="Cobham">Cobham</option>
                                        <option Value="Fly Pelican">Fly Pelican</option>
                                        <option Value="Hinterland Aviation">Hinterland Aviation</option>
                                        <option Value="Link Airways">Link Airways</option>
                                        <option Value="Sharp Airlines">Sharp Airlines</option>
                                        <option Value="SkyTrans">SkyTrans</option>
                                        <option Value="Skippers Airlines">Skippers Airlines</option>
                                        <option Value="Air North">Air North</option>
                                    </select>
                                </div>
                               <div className="depart">
                                    <select placeholder='Departure' value={Departure} onChange={(e) => setDeparture(e.target.value)}>
                                        <option value="" hidden >Departure</option>
                                        <option value="" disabled >Popular</option>
                                        <option value="Sydney" >Sydney</option>
                                        <option value="Melbourne" >Melbourne</option>
                                        <option value="Brisbane" >Brisbane</option>
                                        <option value="Perth" >Perth</option>
                                        <option value="Adelaide" >Adelaide</option>
                                        <option value="Gold Coast" >Gold Coast</option>
                                        <option value="Cairns" >Cairns</option>
                                        <option value="Canberra" >Canberra</option>
                                        <option value="Hobart" >Hobart</option>
                                        <option value="Darwin" >Darwin</option>
                                        <option value="" disabled >A-Z</option>
                                        <option value="Albury" >Albury</option>
                                        <option value="Alice Springs" >Alice Springs</option>
                                        <option value="Armidale" >Armidale</option>
                                        <option value="Ayres Rock" >Ayres Rock</option>
                                        <option value="Ballina/Bryon" >Ballina/Bryon</option>
                                        <option value="Broome" >Broome</option>
                                        <option value="Bundaberg" >Bundaberg</option>
                                        <option value="Coffs Harbour" >Armidale</option>
                                        <option value="Dubbo" >Dubbo</option>
                                        <option value="Emerald" >Emerald</option>
                                        <option value="Gladstone" >Gladstone</option>
                                        <option value="Hamilton Island" >Hamilton Island</option>
                                        <option value="Hervey Bay" >Hervey Bay</option>
                                        <option value="Kalgoorlie" >Kalgoorlie</option>
                                        <option value="Karratha" >Karratha</option>
                                        <option value="Launceston" >Launceston</option>
                                        <option value="Learmonth" >Learmonth</option>
                                        <option value="Mackay" >Mackay</option>
                                        <option value="Mildura" >Mildura</option>
                                        <option value="Moranbah" >Moranbah</option>
                                        <option value="Mount Gambier" >Mount Gambier</option>
                                        <option value="Mount Isa" >Mount Isa</option>
                                        <option value="Newcastle" >Newcastle</option>
                                        <option value="Newman" >Newman</option>
                                        <option value="Port Hedland" >Port Hedland</option>
                                        <option value="Port Lincoln" >Port Lincoln</option>
                                        <option value="Port Macquarie" >Port Macquarie</option>
                                        <option value="Proserpine" >Proserpine</option>
                                        <option value="Rockhampton" >Rockhampton</option>
                                        <option value="Roma" >Roma</option>
                                        <option value="Sunshine Coast" >Sunshine Coast</option>
                                        <option value="Tamworth" >Tamworth</option>
                                        <option value="Townsville" >Townsville</option>
                                        <option value="Wagga Wagga" >Wagga Wagga</option>
                                    </select>
                               </div>
                                <div className="dest">
                                    <select placeholder='Destination' value={Destination} onChange={(e) => setDestination(e.target.value)}>
                                        <option value="" hidden >Destination</option>
                                        <option value="" disabled >Popular</option>
                                        <option value="Sydney" >Sydney</option>
                                        <option value="Melbourne" >Melbourne</option>
                                        <option value="Brisbane" >Brisbane</option>
                                        <option value="Perth" >Perth</option>
                                        <option value="Adelaide" >Adelaide</option>
                                        <option value="Gold Coast" >Gold Coast</option>
                                        <option value="Cairns" >Cairns</option>
                                        <option value="Canberra" >Canberra</option>
                                        <option value="Hobart" >Hobart</option>
                                        <option value="Darwin" >Darwin</option>
                                        <option value="" disabled >A-Z</option>
                                        <option value="Albury" >Albury</option>
                                        <option value="Alice Springs" >Alice Springs</option>
                                        <option value="Armidale" >Armidale</option>
                                        <option value="Ayres Rock" >Ayres Rock</option>
                                        <option value="Ballina/Bryon" >Ballina/Bryon</option>
                                        <option value="Broome" >Broome</option>
                                        <option value="Bundaberg" >Bundaberg</option>
                                        <option value="Coffs Harbour" >Armidale</option>
                                        <option value="Dubbo" >Dubbo</option>
                                        <option value="Emerald" >Emerald</option>
                                        <option value="Gladstone" >Gladstone</option>
                                        <option value="Hamilton Island" >Hamilton Island</option>
                                        <option value="Hervey Bay" >Hervey Bay</option>
                                        <option value="Kalgoorlie" >Kalgoorlie</option>
                                        <option value="Karratha" >Karratha</option>
                                        <option value="Launceston" >Launceston</option>
                                        <option value="Learmonth" >Learmonth</option>
                                        <option value="Mackay" >Mackay</option>
                                        <option value="Mildura" >Mildura</option>
                                        <option value="Moranbah" >Moranbah</option>
                                        <option value="Mount Gambier" >Mount Gambier</option>
                                        <option value="Mount Isa" >Mount Isa</option>
                                        <option value="Newcastle" >Newcastle</option>
                                        <option value="Newman" >Newman</option>
                                        <option value="Port Hedland" >Port Hedland</option>
                                        <option value="Port Lincoln" >Port Lincoln</option>
                                        <option value="Port Macquarie" >Port Macquarie</option>
                                        <option value="Proserpine" >Proserpine</option>
                                        <option value="Rockhampton" >Rockhampton</option>
                                        <option value="Roma" >Roma</option>
                                        <option value="Sunshine Coast" >Sunshine Coast</option>
                                        <option value="Tamworth" >Tamworth</option>
                                        <option value="Townsville" >Townsville</option>
                                        <option value="Wagga Wagga" >Wagga Wagga</option>
                                    </select>
                                </div>
                                <div className="rate">
                                    <select placeholder='Rating' value={Rating} onChange={(e) => setRating(e.target.value)}>
                                        <option value="" hidden >Rating</option>
                                        <option value="1" >1</option>
                                        <option Value="2">2</option>
                                        <option Value="3">3</option>
                                        <option Value="4">4</option>
                                        <option Value="5">5</option>
                                        <option Value="6">6</option>
                                        <option Value="7">7</option>
                                        <option Value="8">8</option>
                                        <option Value="9">9</option>
                                        <option Value="10">10</option>
                                    </select>
                                </div>
                                <div className="com">
                                    <textarea placeholder='Comments' value={Comments} type="text" onChange={(e) => setComments(e.target.value)} />
                                </div>
                                <div className="sendReview">
                                    <ColorButton onClick={() => addReview({Name, Airline, Departure, Destination, Rating, Comments, id:uuidv4() })} variant='contained' className='link'>
                                        Submit
                                    </ColorButton>
                                </div>

                            </div>
                        </div>
                </div>
            </div>}
        </>
    );
}