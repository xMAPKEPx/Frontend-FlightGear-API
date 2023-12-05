import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import testResponse from '../../assets/response_1701160657806.json'

const ChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return <>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={testResponse}
        margin={{ top: 50, right: 30, left: 20, bottom: 55 }}
      >
        <XAxis dataKey="id" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />

        {testResponse.map((s) => (
              <Line isAnimationActive={false} dot={false} dataKey="value" data={s.data} name={s.name} key={s.name} stroke='#123456' strokeWidth={3} />
        ))}

        {data}
      </LineChart>
    </ResponsiveContainer>
    </>;
}

export default ChartComponent;