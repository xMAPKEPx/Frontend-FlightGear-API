import React from "react";

const PopupLoad = () => {
    const onClickHandler = () => {
        // alert("Сессия 1 выбрана")
        document.querySelector('.dark-content').classList.add('hidden')
    };

    return <div className="popup">
        <h1>Выберите сессию</h1>
        <button onClick={onClickHandler}>Сессия 1</button>
    </div>
};

export default PopupLoad;