import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import BulletList from './BulletList'
import posGraph from '../../public/with-spendin-graph.svg'
import negGraph from '../../public/without-spendin-graph.svg'
import Image from 'next/image'

export default function SuccessStories() {
  const [withSpendView, setWithSpendView] = useState(true)
  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 4, mx: 5 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '600px',
          }}
        >
          <Typography variant='h5' sx={{ mt: 8 }}>
            INCREASE PRODUCTIVITY
          </Typography>
          <Typography variant='h2' sx={{ mt: 2 }}>
            Reduce Time in Doing Manual Work Managing Expenses
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          justifyContent: 'center',
          mt: { xs: 4, md: 8 },
          gap: 10,
        }}
      >
        <Box
          sx={{
            maxWidth: '550px',
            minWidth: '300px',
            flexShrink: 1,
          }}
        >
          <div
            style={{
              backgroundColor: 'lightgrey',
              borderRadius: '2rem',
              padding: 0,
              width: 'fit-content',
            }}
          >
            <Button
              variant={withSpendView ? 'contained' : 'clear'}
              sx={{
                py: '10px',
                pl: '20px',
                borderRadius: '1.5rem',
                textTransform: 'none',
              }}
              onClick={() => {
                if (!withSpendView) setWithSpendView(true)
              }}
            >
              With Spend.In
            </Button>
            <Button
              variant={!withSpendView ? 'contained' : 'clear'}
              sx={{
                py: '10px',
                pl: '20px',
                borderRadius: '1.5rem',
                textTransform: 'none',
              }}
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
        <Box
          className='statistic-graph-container'
          sx={{ minWidth: 300, flexShrink: 2 }}
        >
          {withSpendView ? (
            <Image src={posGraph} alt='positive business statistics' />
          ) : (
            <Image src={negGraph} alt='negative business statistics' />
          )}
        </Box>
      </Box>
    </>
  )
}

const positiveDisplayInfo = {
  header: 'Track Business Expenses until its Milisecond',
  bullets: [
    'Analyze your business cost easily with group transaction through tagging feature.',
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
