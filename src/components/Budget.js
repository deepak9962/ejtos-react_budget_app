import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { dispatch, currency, budget } = useContext(AppContext);

    const setBudget = (val) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: val
        })
    }
    
    return (
        <div className="alert alert-secondary">
            <span>Budget: {currency}</span>
            <input
                required="required"
                type="number"
                id='budget'
                style={{}}
                value={budget}
                onChange={(event) => setBudget(event.target.value)}>
            </input>
        </div>
    )
}

export default Budget;