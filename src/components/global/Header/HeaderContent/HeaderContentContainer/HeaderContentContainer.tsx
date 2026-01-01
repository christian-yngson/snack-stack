import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function HeaderContentContainer({ children }: Props) {
  return (
    <Container>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {children}
      </Stack>
    </Container>
  );
}

export default HeaderContentContainer;
