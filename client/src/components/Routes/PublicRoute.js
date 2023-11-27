import { Navigate, Outlet } from 'react-router-dom';
import { useAuthentication } from '../../contexts/Authentication';

// https://www.robinwieruch.de/react-router-private-routes/

/**
 * Verifica se o usuário não está logado
 * @param {object} props
 * @param {string} props.routeToRedirect
 * @param {React.ReactNode | undefined} props.children
 */
export const PublicRoute = ({ routeToRedirect, children }) => {
  const authentication = useAuthentication();

  if (authentication.token) {
    return <Navigate to={routeToRedirect} replace />;
  }

  return children ?? <Outlet />;
};
