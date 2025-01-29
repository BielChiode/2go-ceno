import { Button, useTheme, ButtonProps } from "@mui/material";
import { ReactNode } from "react";
import redirectWhatsapp from "../../utils/redirectWhatsapp";

interface BotaoAcaoProps extends ButtonProps {
  children: ReactNode;
}

export function BotaoAcao({ children, ...props }: BotaoAcaoProps) {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      sx={{
        maxHeight: 40,
        backgroundColor: theme.palette.primary.main,
        color: "#ffffff",
        fontWeight: "bold",
        ":hover": { backgroundColor: theme.palette.primary.dark },
      }}
      onClick={redirectWhatsapp}
      {...props}
    >
      {children}
    </Button>
  );
}
