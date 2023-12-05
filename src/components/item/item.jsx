import React from "react";
import './item.module.css'

import plus from '../../assets/img/plus.png'
import minus from '../../assets/img/minus.png'

const Item = ({name, count}) => {
    const [isMinus, setIsMinus] = React.useState(false);

    const toggleSrc = () => {
        setIsMinus(!isMinus)
    }
    return (<tr><td><button onClick={toggleSrc}>{name} ({count}){isMinus ? (<img src={plus} width="14" height="14" alt="Плюс" />) : (<img src={minus} width="14" height="14" alt="Минус" />)}</button></td></tr>)
}

export default Item;