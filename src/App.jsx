import RoutePage from './Routes/RoutePage';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css'


function App() {
const login = localStorage.getItem('login')
  return (
    <div className={login && 'd-flex'}>
        <RoutePage />
    </div>

  );
}

export default App;
