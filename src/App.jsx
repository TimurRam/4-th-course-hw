import { AppRoutes } from 'Routes';
import Cookies from 'js-cookie';
import './App.css';

function App() {
  // const isAllowed = Boolean(Cookies.get('token'));
  const isAllowed = true
  return <AppRoutes isAllowed={isAllowed} />;
}

export default App;
