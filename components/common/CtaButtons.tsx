import { Box, Button } from '@mui/material'

export default function CtaButtons() {
  return (
    <Box
      sx={{
        mt: '40px',
        display: 'flex',
        flexDirection: { xs: 'column-reverse', sm: 'row' },
        gap: { xs: 1, sm: 2 },
      }}
    >
      <Button
        variant='secondary'
        sx={{
          width: {
            xs: '80dvw',
            sm: 'auto',
            textTransform: 'unset',
          },
          py: '.5rem',
          borderRadius: '1.5rem',
        }}
      >
        See Pricing
      </Button>
      <Button
        color='primary'
        variant='contained'
        sx={{
          width: { xs: '80dvw', sm: 'auto', textTransform: 'unset' },
          py: '.5rem',
          borderRadius: '1.5rem',
        }}
      >
        Get a Free Demo
      </Button>
    </Box>
  )
}
