import { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={(theme) => ({
          color: theme.palette.primary.light,
          display: 'inline-block',
          borderBottom: `2px solid ${theme.palette.primary.light}`,
        })}
      >
        {children}
      </Typography>
    </Box>
  );
}
