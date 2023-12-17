import './Table.module.css';
import React, { useState, useEffect } from 'react';
import Item from '../tableItem/item';
import {dataTable} from '../../assets/response1';

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
            {dataTable.map((par) => <Item name={par.name} count={par.count}/>)
            }
            {dataParams}
            </tbody>
    </table>
};

export default Table;