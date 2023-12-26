import './App.css';
import Table from './components/table/Table';
import ChartComponent from './components/chart/chart';
import PopupLoad from './components/popup/popup';
import RefreshButtonComponent from './components/refreshButton/refreshButton';
import ChangeSession from './components/changeSession/changeSession';

function App() {
  return <>
  <div className="App">
    <div className='dark__content'>
      <PopupLoad />
    </div>
    <aside>
      <Table />
    </aside>
    <main>
      <div className='buttons'>
        <ChangeSession />
        <RefreshButtonComponent />
      </div>
      <ChartComponent />
      </main>
    </div>
  </>;
}

export default App;
