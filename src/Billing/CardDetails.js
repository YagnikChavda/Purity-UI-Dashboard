import React from 'react';

import cardLogo from '../Images/Circles.png'
import './CardDetails.scss';

export default function CardDetails() {

    const cardData = [
        { cardId: 1, bank: "Purity UI", cardNumber: "781221390823XXXX", cardExpiry: "05/24", cardCVV: "09X" }
    ]

    const cardLoop = cardData.map((data , index) =>
        <div key ={index} className='card-details-wrappers' >
            <div className='card-title'>
                <p> {data.bank}</p>
                <img src={cardLogo} />
            </div>

            <div className='card-details'>
                <div className='card-number'>
                    <span>{data.cardNumber.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')}</span>
                </div>
                <div className='card-info'>
                    <div className='card-expiry-date'>
                        <span> VALID THRU </span>
                        <p>{data.cardExpiry}</p>
                    </div>
                    <div className='card-cvv-number'>
                        <span> CVV </span>
                        <p>{data.cardCVV}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            {cardLoop}
        </>
    )
}
