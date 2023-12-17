import React from "react";
import './item.module.css'

import plus from '../../assets/img/plus.png'
import minus from '../../assets/img/minus.png'

import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../redux/ChartSlice/ChartSlice";


const Item = ({name, count}) => {
    const [isMinus, setIsMinus] = React.useState(false);
    const nameChart = useSelector((state) =>  state.chart.nameChart)

    const dispatch = useDispatch()

    const toggleSrc = () => {
        setIsMinus(!isMinus)
    }
    const handleClick = (name) => {
        toggleSrc();
        if(!isMinus) {
            dispatch(setName(name));
        } else {
            dispatch(setName(''))
        }
        
    }
    console.log(nameChart)
    return (<tr><td><button onClick={() => handleClick(name)}>{name} ({count}){isMinus ? (<img src={minus} width="14" height="14" alt="Минус" />) : (<img src={plus} width="14" height="14" alt="Плюс" />)}</button></td></tr>)
}

export default Item;