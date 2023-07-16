import MainPage from './Pages/MainPage/MainPage';
import EntryForm from './Pages/EntryForm/EntryForm';
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from 'Pages/RegistrationForm/RegistrationForm';
import { ProtectedRoute } from 'components/ProtectedRoute';
export const AppRoutes = ({ isAllowed }) => {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
        <Route path="/*" element={<MainPage />} />
      </Route>
      <Route path="/authorization" element={<EntryForm />} />
      <Route path="/registration" element={<RegistrationForm />} />
    </Routes>
  );
};
