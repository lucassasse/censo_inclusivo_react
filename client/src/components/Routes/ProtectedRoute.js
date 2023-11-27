import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../contexts/Authentication';

/**
 * Verifica se o usuário está logado
 * @param {object} props
 * @param {string} props.routeToRedirect
 * @param {React.ReactNode | undefined} props.children
 */
export const ProtectedRoute = ({ routeToRedirect, children }) => {
  const authentication = useAuthentication();
  const navigate = useNavigate(); // Corrected this line

  if (!authentication.token) {
    navigate("/") // Corrected this line
    return <Navigate to={routeToRedirect} replace />;
  }

  return children ?? <Outlet />;
};
