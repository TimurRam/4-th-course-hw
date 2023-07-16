import MainPage from 'MainPage/MainPage';
import EntryForm from './Pages/EntryForm/EntryForm';
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from 'Pages/RegistrationForm/RegistrationForm'; 
import PlayList from 'Pages/PlayList/PlayListPage';
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/authorization" element={<EntryForm />} />
      <Route path="/registration" element={<RegistrationForm />} />
      <Route path='/playlist/:id' element={<PlayList />} />
     

    </Routes>
  );
};
