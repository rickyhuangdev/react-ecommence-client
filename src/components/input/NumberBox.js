import React, {useEffect, useState} from 'react';
import {AiOutlineMinus} from "react-icons/ai";
import {BsPlus} from "react-icons/bs";
import '../../assets/css/components.css'

const NumberBox = ({min, max, getQuantity}) => {
    const [quantity, setQuantity] = useState(1)
    useEffect(() => {
        console.log(quantity)
    }, [quantity])
    const changeNum = (value) => {

        if (quantity >= min && quantity <= max) {
            setQuantity(parseInt(value) + quantity)
        }


        getQuantity(quantity)
    }
    return (
        <div className="quantity_input">
            <button type="button" className="input_number_decrement" onClick={() => {
                changeNum(-1)
            }}>
                <AiOutlineMinus/>
            </button>
            <input className="input_number" type="text" value={quantity} readOnly/>
            <button type="button" className="input_number_increment" onClick={() => {
                changeNum(1)
            }}><BsPlus/></button>
        </div>
    );
};

export default NumberBox;
