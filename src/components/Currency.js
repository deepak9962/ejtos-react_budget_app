import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const setCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        })
    }

    return (
        <div className="alert" style={{ backgroundColor: 'rgb(145, 227, 152)', color: 'rgb(255, 255, 255)' }}>
            <span>Currency</span>
            <select style={{ backgroundColor: 'rgb(145, 227, 152)', border: '0px', color: 'rgb(255, 255, 255)' }}
                onChange={
                    (event) => setCurrency(event.target.value)
                }>
                <option value="₹" name="rupee">₹ Rupee</option>
                <option value='$' name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
            </select>
        </div>
    )
}

export default Currency