import { keyframes } from "@mui/material/styles";

type Params = {
  left: number;
  duration: number; // in ms
  delay: number; // in ms
};
type GetAnimation = (params: Params) => string;

const getAnimation: GetAnimation = ({ left, duration, delay }) => {
  const frames = keyframes`
    0% { opacity: 0; left: ${left}px; }
    100% { opacity: 1; left: 0px; }
  `;

  return `${frames} ${duration}ms ease-in-out ${delay}ms forwards`;
};

export default getAnimation;
