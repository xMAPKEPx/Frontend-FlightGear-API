import './Table.module.css';
import React, { useState, useEffect } from 'react';
import Item from '../item/item';
import testResponse from '../../assets/response1.json';

function Table() {
    const [dataParams, setDataParams] = useState([]);

    useEffect(() => {
        fetch('').then(data => console.log(data)).then(d => setDataParams(d))
    }, [])
    
    return <table>
        <thead>
                <tr>
                    <th>Параметры</th>  
                </tr>
            </thead>
            <tbody>
            {testResponse.map((par) => <Item name={par.name} count={par.count}/>)
            }
            {dataParams}
            </tbody>
    </table>
};

export default Table;