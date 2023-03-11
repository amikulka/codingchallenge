import { Box, Button, Container, Typography } from '@mui/material'
import { useState } from 'react'
import BulletList from './BulletList'
import posGraph from '../../public/with-spendin-graph.svg'
import negGraph from '../../public/without-spendin-graph.svg'
import Image from 'next/image'

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
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ maxWidth: '550px', mr: '100px' }}>
            <div
              style={{
                backgroundColor: 'lightgrey',
                borderRadius: '2rem',
                padding: 0,
                width: '322px',
              }}
            >
              <Button
                sx={{ mr: 1, py: '10px', pl: '20px' }}
                className={withSpendView ? 'activeSpendButton' : ''}
                onClick={() => {
                  if (!withSpendView) setWithSpendView(true)
                }}
              >
                With Spend.In
              </Button>
              <Button
                sx={{ ml: 1 }}
                className={!withSpendView ? 'activeSpendButton' : ''}
                onClick={() => {
                  if (withSpendView) setWithSpendView(false)
                }}
              >
                Without Spend.In
              </Button>
            </div>
            {withSpendView ? (
              <BulletList displayInformation={positiveDisplayInfo} />
            ) : (
              <BulletList displayInformation={negDisplayInfo} />
            )}
          </Box>
          <Box className='statistic-graph-container'>
            {withSpendView ? (
              <Image src={posGraph} alt='positive business statistics' />
            ) : (
              <Image src={negGraph} alt='negative business statistics' />
            )}
          </Box>
        </Box>
      </Container>
    </>
  )
}

const positiveDisplayInfo = {
  header: 'Track Business Expenses until its Milisecond',
  bullets: [
    'Analyze your business cost easily with group transaction thorugh tagging feature.',
    'Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.',
    'Arrange your business expenses by date, name, etc.,  with just one click.',
  ],
  isPositive: true,
}
const negDisplayInfo = {
  header:
    'Taking too long to tidy up administrative files makes it unproductive',
  bullets: [
    'Complex recording process due to every administrative file in a different place.',
    'Need more effort to pay manually one by one invoice because there is no payment accommodation.',
    'Manual data arranging needs a long time because the different months/years are not in the same place.',
  ],
  isPositive: false,
}
