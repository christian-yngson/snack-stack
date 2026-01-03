import { store } from "../store";
import { Provider } from "react-redux";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function ReduxProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
