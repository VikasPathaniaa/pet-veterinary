import React from 'react';
import Shower from "../../assets/shower.png"
import "./Service.css"

const Service = () => {
    const arr = ["pet shower", "nail cutting", "surgery","Training" , "etc"]
    return (
        <div className='service_container'>
            <h2>Service Category</h2>
            <div className='service_card_container'>
                {
                    arr.map((item:string , index:number) => {
                        return (
                            <div key={index} className='service_card'>
                                <img src={Shower} alt="image not found " width={50} height={50}/>
                                <p>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Service