import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import testResponse from '../../assets/response_2.json'

// Компонент-график
const ChartComponent = () => {
  // Состояния для данных и статуса загрузки
  const [data, setData] = useState([]);
 
  // Загрузка данных из API
  useEffect(() => {
     fetch('https://api.example.com/data')
       .then(response => response.json())
       .then(data => setData(data));
  }, [data]);
 
  // Массив цветов
  const COLORS = ['#00008B', '#ffffff', '#123456', '#654321', '#ccc000']
 
  // Функция генерации случайного цвета
  function getRandomInt(min, max) {
     let rand = min + Math.random() * (max + 1 - min);
     return Math.floor(rand);
  }
 
  // Отрисовка
  return <>
       <ResponsiveContainer width="100%" height="100%">
         <LineChart
           data={testResponse}
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
           {testResponse.map((s) => (
             <Line
               type="monotone"
               isAnimationActive={false}
               dot={false}
               dataKey="value"
               data={s.data}
               name={s.name}
               key={s.name}
               stroke={COLORS[getRandomInt(0, COLORS.length - 1)]}
               strokeWidth={3}
             />
           ))}
 
           {/* Отрисовка дополнительных данных */}
           {data}
         </LineChart>
       </ResponsiveContainer>
     </>
 }
 
 // Экспорт компонента
 export default ChartComponent;