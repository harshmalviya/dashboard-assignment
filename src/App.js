import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SettingsPage from './pages/SettingsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import UsersPage from './pages/UsersPage';
import { AuthProvider } from './store/authContext';

function App() {
  return (
    <AuthProvider>
      <main className="bg-background h-full w-full font-text">
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/signin" replace />} />
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
