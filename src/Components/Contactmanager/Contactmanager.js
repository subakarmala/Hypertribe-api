import React from 'react'
import "./Contactmanager.css"

const Contactmanager = () => {
    return (
        <div>
            <div className="whiteBox">
                            <div className="whiteBox__heading">
                                Contact your account manager
                            </div> 
                            <div className="contactForm">
                                <form action="">
                                    <input type="text" placeholder="Name"/>
                                    <input type="text" placeholder="E mail"/>
                                    <input type="text" placeholder="Mobile Number"/>
                                    <textarea name="" id="" placeholder="Message"/>
                                    <button>Submit</button>
                                </form>
                            </div>
                    </div>
        </div>
    )
}

export default Contactmanager
