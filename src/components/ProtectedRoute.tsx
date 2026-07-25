import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {
  const token = localStorage.getItem("ownerToken");

  if (!token) {
    return <Navigate to="/owner/login" replace />;
  }

  return <>{children}</>;
}