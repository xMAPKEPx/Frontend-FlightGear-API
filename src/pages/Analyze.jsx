import './Analyze.css';
import Table from '../components/table/Table';
import ChartComponent from '../components/chart/chart';
import PopupLoad from '../components/popup/popup';
import RefreshButtonComponent from '../components/refreshButton/refreshButton';
import ChangeSession from '../components/changeSession/changeSession';
import NavToPlan from '../components/navToPlan/navToPlan';

function Analyze() {
  return <>
  <div className="Analyze">
    <div className='dark__content'>
      <PopupLoad />
    </div>
    <aside>
      <Table />
    </aside>
    <main className='main__analyze'>
      <div className='buttons'>
        <ChangeSession />
        <RefreshButtonComponent />
      </div>
      <ChartComponent />
      </main>
      <NavToPlan />
    </div>
  </>;
}

export default Analyze;
