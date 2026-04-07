import { Button, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';
import { East } from '@mui/icons-material';
import redirectWhatsapp from '../../utils/redirectWhatsapp';

interface BotaoAcaoProps extends Omit<ButtonProps, 'variant'> {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  showArrow?: boolean;
}

export function BotaoAcao({
  children,
  variant = 'primary',
  showArrow = false,
  onClick,
  ...props
}: BotaoAcaoProps) {
  const isPrimary = variant === 'primary';

  return (
    <Button
      variant="contained"
      disableElevation
      endIcon={
        showArrow ? (
          <East
            sx={{
              fontSize: '0.85rem !important',
              transition: 'transform 0.3s ease',
            }}
          />
        ) : undefined
      }
      sx={{
        px: 4,
        py: 1.5,
        borderRadius: 0,
        fontSize: '0.7rem',
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        fontFamily: '"DM Sans", sans-serif',
        backgroundColor: isPrimary ? 'primary.main' : 'transparent',
        color: isPrimary ? '#0D0D0B' : 'primary.main',
        border: '1px solid',
        borderColor: 'primary.main',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: isPrimary ? 'primary.light' : 'primary.main',
          color: isPrimary ? '#0D0D0B' : '#0D0D0B',
          borderColor: isPrimary ? 'primary.light' : 'primary.main',
          '& .MuiButton-endIcon svg': {
            transform: 'translateX(4px)',
          },
        },
        ...props.sx,
      }}
      onClick={onClick ?? redirectWhatsapp}
      {...props}
    >
      {children}
    </Button>
  );
}
