import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const ChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const series = [
    {
      // Название параметра
      name: 'Тангаж',
      // Значения параметра
      data: [
        { value: 400 },
        { value: 750 },
        { value: 100 },
      ],
    },
    {
      name: 'Мангаж',
      data: [
        { value: 400 },
        { value: 600 },
        { value: 800 },
      ],
    },
    {
      name: 'Гараж',
      data: [
        { value: 100 },
        { value: 600 },
        { value: 300 },
      ],
    },
  ];


    return <ResponsiveContainer width="100%" height="100%">
    <LineChart
      data={series}
      margin={{ top: 50, right: 30, left: 20, bottom: 55 }}
    >
      <XAxis dataKey=" " />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />

      {series.map((s) => (
            <Line dataKey="value" data={s.data} name={s.name} key={s.name} stroke="#00008B" strokeWidth={3}/>
      ))}

      {data}
    </LineChart>
    </ResponsiveContainer>

}

export default ChartComponent;