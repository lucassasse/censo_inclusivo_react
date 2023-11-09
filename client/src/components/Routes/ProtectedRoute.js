import { Navigate, Outlet, useHistory } from 'react-router-dom';
import { useAuthentication } from '../../contexts/Authentication';

// https://www.robinwieruch.de/react-router-private-routes/

/**
 * Verifica se o usuário está logado
 * @param {object} props
 * @param {string} props.routeToRedirect
 * @param {React.ReactNode | undefined} props.children
 */
export const ProtectedRoute = ({ routeToRedirect, children }) => {
  const authentication = useAuthentication();
  const history = useHistory()

  if (!authentication.token) {
    history.push("/")
    return <Navigate to={routeToRedirect} replace />;
  }

  return children ?? <Outlet />;
};
