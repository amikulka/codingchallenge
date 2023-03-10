import { Box, Button, Container, Typography } from '@mui/material'
import { useState } from 'react'

export default function SuccessStories() {
  const [withSpendView, setWithSpendView] = useState(true)
  return (
    <>
      <Container
        maxWidth='xl'
        sx={{ display: 'flex', flexDirection: 'column', mt: 4 }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '600px',
            }}
          >
            <Typography variant='h6'>INCREASE PRODUCTIVITY</Typography>
            <Typography variant='h4'>
              Reduce Time in Doing Manual Work Managing Expenses
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Box sx={{ bgcolor: 'lightgrey', borderRadius: '2rem' }}>
            <div>
              <Button
                sx={{ mr: 2, py: '10px', pl: '20px' }}
                className={withSpendView ? 'activeSpendButton' : ''}
                onClick={() => {
                  if (!withSpendView) setWithSpendView(true)
                }}
              >
                With Spend.In
              </Button>
              <Button
                sx={{ ml: 2 }}
                className={!withSpendView ? 'activeSpendButton' : ''}
                onClick={() => {
                  if (withSpendView) setWithSpendView(false)
                }}
              >
                Without Spend.In
              </Button>
            </div>
          </Box>
          <Box></Box>
        </Box>
      </Container>
    </>
  )
}
