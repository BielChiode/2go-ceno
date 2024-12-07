import { Button, useTheme, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

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
        color: '#ffffff',
        fontWeight: 'bold',
        ':hover': { backgroundColor: theme.palette.primary.dark },
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
