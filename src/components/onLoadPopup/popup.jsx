import React from "react";

const PopupLoad = () => {
    const onClickHandler = () => {
        // alert("Сессия 1 выбрана")
        document.querySelector('.dark-content').classList.add('hidden')
    };

    return <div className="popup">
        <h1>Выберите сессию</h1>
        <button className="btn" onClick={onClickHandler}>Сессия 1</button>
        <button className="btn" onClick={onClickHandler}>Сессия 1</button>
    </div>
};

export default PopupLoad;