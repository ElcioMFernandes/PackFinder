import { useAuth } from "../contexts";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export const Protected = ({ children }: Props) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
