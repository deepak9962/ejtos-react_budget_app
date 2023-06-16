import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete } from "react-icons/ti";
import {FaPlusCircle, FaMinusCircle} from "react-icons/fa"

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        }

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td style={{textAlign: 'center'}}><FaPlusCircle color="rgb(0, 204, 0)" size='2em' onClick={event => increaseAllocation(props.name)}></FaPlusCircle></td>
            <td style={{textAlign: 'center'}}><FaMinusCircle color='rgb(204, 0, 0)' size='2em' onClick={event => decreaseAllocation(props.name)}></FaMinusCircle></td>
            <td style={{textAlign: 'center'}}><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    )
}

export default ExpenseItem;