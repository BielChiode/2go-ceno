import { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

export default function TituloSecao({
  children,
}: {
  children: ReactNode;
  clickable?: boolean;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 4,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={(theme) => ({
          color: theme.palette.primary.light,
          display: 'inline-block',
          borderBottom: `2px solid ${theme.palette.primary.light}`,
          ':hover': {
            cursor: 'default',
          },
        })}
      >
        {children}
      </Typography>
    </Box>
  );
}
