// theme.d.ts or at the top of your theme file
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { TypographyPropsVariantOverrides } from "@mui/material/Typography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    hero: true;
  }
}
