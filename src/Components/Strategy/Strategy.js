import React from 'react'
import upload from '../../images/upload.png'
import "./Strategy.css"

const Strategy = () => {
    return (
        <div>
             <div className="whiteBox">
                <div className="whiteBox__heading">
                                Strategy Plan 
                </div> 
                <div className="StrategyPlan">
                    <img src={upload} alt=""/>
                                <input type="file" id="StrategyPlan"/>
                                <label htmlFor="StrategyPlan">UPLOAD File</label>
                </div>
                </div>
        </div>
    )
}

export default Strategy
