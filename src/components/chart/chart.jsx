import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {dataChart} from '../../assets/response_2'
import { useSelector } from 'react-redux';

// Компонент-график
const ChartComponent = () => {
  // Состояния для данных и статуса загрузки
  const [data, setData] = useState([]);
  const datasChart = useSelector((state) => state.chart.data);
  const filteredDataChart = dataChart.filter((s) => datasChart.includes(s.name));
 
  // Загрузка данных из API
  useEffect(() => {
     fetch('https://api.example.com/data')
       .then(response => response.json())
       .then(data => setData(data));
  }, [data]);
 
  // Массив цветов
  const COLORS = [
    '#00008B', 
    '#000000', 
    '#123456', 
    '#654321',
    '#ccc000', 
    '#FF0000', 
    '#FFD700', 
    '#8B008B', 
    '#4B0082', 
    '#2F4F4F', 
    '#006400', 
    '#FF1493', 
    '#FF8C00', 
    '#483D8B', 
    '#808080'
  ];
 
  // Функция генерации случайного цвета
  function getRandomInt(min, max) {
     let rand = min + Math.random() * (max + 1 - min);
     return Math.floor(rand);
  }

  // console.log('datachart', filteredDataChart)
 
  // Отрисовка
  return <>
       <ResponsiveContainer width="100%" height="100%">
         <LineChart
           data={dataChart}
           margin={{ top: 50, right: 30, left: 20, bottom: 55 }}
         >
           {/* Ось X */}
           <XAxis dataKey="id" type='category' stroke='white' allowDuplicatedCategory={false} />
 
           {/* Ось Y */}
           <YAxis dataKey="value" stroke='white' />
 
           {/* Сетка */}
           <CartesianGrid strokeDasharray="0 0" />
 
           {/* Подсказка при наведении */}
           <Tooltip />
 
           {/* Легенда графика */}
           <Legend />
 
           {/* Элементы линий */}
           {filteredDataChart.map((s) => {
          
              return ( <Line
               type="monotone"
               isAnimationActive={false}
               dot={false}
               dataKey="value"
               data={s.data}
               name={s.name}
               key={s.name}
               stroke={COLORS[getRandomInt(0, COLORS.length - 1)]}
               strokeWidth={5}
             />)
            
           })
            
           }
 
           {/* Отрисовка дополнительных данных */}
           {data}
         </LineChart>
       </ResponsiveContainer>
     </>
 }
 
 // Экспорт компонента
 export default ChartComponent;