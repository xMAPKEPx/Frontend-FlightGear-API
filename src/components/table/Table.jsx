import './Table.module.css';
import React, { useState, useEffect } from 'react';
import Item from '../item/item';

function Table() {
    const [dataParams, setDataParams] = useState([]);

    useEffect(() => {
        fetch('').then(data => console.log(data)).then(d => setDataParams(d))
    }, [])

    const paramsArray = [
        {
            name: 'Тангаж',
            count: '13862',
        },
        {
            name: 'Мангаж',
            count: '1323262',
        },
        {
            name: 'Гараж',
            count: '138262',
        }
    ]
    
    return <table>
        <thead>
                <tr>
                    <th>Параметры</th>  
                </tr>
            </thead>
            <tbody>
            {paramsArray.map((par) => <Item name={par.name} count={par.count}/>)
            }
            {dataParams}
            </tbody>
    </table>
};

export default Table;