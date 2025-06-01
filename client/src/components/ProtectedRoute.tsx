import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = !!localStorage.getItem('token'); 

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/auth" replace />
  );
};

export default ProtectedRoute;