import { Box, Typography } from '@mui/material'
import automaticImage from '../../public/automatic-invoice.png'
import clearImage from '../../public/clear-payment-history.png'
import multiCardImage from '../../public/use-multi-card-payment.png'
import BenefitCard from './BenefitCard'

const cardInfos = [
  {
    source: automaticImage,
    header: 'Automatic Invoice Payment',
    body: "No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!",
  },
  {
    source: clearImage,
    header: 'Clear payment history',
    body: 'Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!',
  },
  {
    source: multiCardImage,
    header: 'Use of multi-card payments',
    body: 'Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!',
  },
]

export default function Benefits() {
  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mr: '160px',
          }}
        >
          <Typography variant='h5'>WHY USE SPEND.IN</Typography>
          <Typography variant='h2' sx={{ mt: 2 }}>
            Easy, Simple, <br />
            Affordable
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: 450,
            mt: 2,
          }}
        >
          <Typography variant='body1'>
            Our platform helps your business in managing expenses. these are
            some of the reasons why you should use our platform in managing
            business finances.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          mt: { xs: 8, md: 12 },
        }}
      >
        {cardInfos.map((cardInfo) => {
          return (
            <Box key={cardInfo.header} className='benefit-card' sx={{ mb: 4 }}>
              <BenefitCard cardInfo={cardInfo} />
            </Box>
          )
        })}
      </Box>
    </>
  )
}
