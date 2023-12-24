// import './popup.module.css'
import React, { useEffect, useState } from "react";

const PopupLoad = () => {
    const [sessionList, setSessionList] = useState([])

    useEffect(() => {
        fetch('').then(data => console.log(data)).then(s => setSessionList(s));
    }, []);

    const onClickHandler = () => {
        // alert("Сессия 1 выбрана")
        document.querySelector('.dark-content').classList.add('hidden')
    };

    return <div className="popup">
        <h1>Выберите сессию</h1>
        <button className="btn" onClick={onClickHandler}>Сессия 1</button>
        <button className="btn" onClick={onClickHandler}>Сессия 1</button>
        {/* {sessionList.map((s) => <button className="btn" onClick={onClickHandler}>{s}</button>)}; */}
        {sessionList}
    </div>
};

export default PopupLoad;