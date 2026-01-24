import { useNavigate } from "react-router";
import Routes from "@/router/Routes";

type Route = (typeof Routes)[keyof typeof Routes];
type UseNavigateToRoute = () => (route: Route) => void;

/* @Blog */
/* @TODO add test immediate */
const useNavigateToRoute: UseNavigateToRoute = () => {
  const navigate = useNavigate();
  return (route) => navigate(route);
};

export default useNavigateToRoute;
