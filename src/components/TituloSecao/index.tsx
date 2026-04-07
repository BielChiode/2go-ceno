import { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface TituloSecaoProps {
  children: ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
  label?: string;
}

export default function TituloSecao({
  children,
  align = 'left',
  light = false,
  label,
}: TituloSecaoProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        mb: 6,
      }}
    >
      {label && (
        <Typography
          variant="overline"
          sx={{
            color: 'primary.main',
            mb: 1,
            display: 'block',
          }}
        >
          {label}
        </Typography>
      )}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 2,
        }}
      >
        {align === 'left' && (
          <Box
            sx={{
              width: '2px',
              height: '44px',
              backgroundColor: 'primary.main',
              flexShrink: 0,
              mt: '4px',
            }}
          />
        )}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: light ? 'text.primary' : 'primary.light',
            lineHeight: 1.1,
          }}
        >
          {children}
        </Typography>
      </Box>
      {align === 'center' && (
        <Box
          sx={{
            width: 48,
            height: '1px',
            backgroundColor: 'primary.main',
            mt: 2,
          }}
        />
      )}
    </Box>
  );
}
