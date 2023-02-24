/* eslint-disable react/prop-types */
import React from "react";
//import { useDispatch } from "react-redux";
//import { filter } from "../../redux/Actions/actions";
//import styles from "./Filter.module.css";

const Filter = ({title, options, action}) => {
    console.log(title + "// "+options);
    //const dispatch = useDispatch()
    const handleChangeFilter = (e) => {
        //dispatch(action(e.target.value))
        console.log(action + " value "+e.target.value)
    };

    return (
        <div>
            <label htmlFor="">{title}</label>
                <select name="" id="" onChange={(e) => handleChangeFilter(e)}>
                    { options?.map( (opt, index) => {
                        return <option key={index} value={opt}>{opt}</option>
                    })}
                </select>
            </div>
    );
};

export default Filter;
