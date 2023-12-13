
import './App.css';
import Table from './components/table/Table';
import ChartComponent from './components/chart/chart';
import PopupLoad from './components/onLoadPopup/popup';

function App() {
  return <>
  <div className="App">
      <div className='dark-content'>
      <PopupLoad />
      </div>
      <aside>
        <Table />
      </aside>
      <main>
        <ChartComponent />
      </main>
    </div>
  </>;
}

export default App;
