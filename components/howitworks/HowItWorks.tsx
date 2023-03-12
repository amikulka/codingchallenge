import { Box, Typography } from '@mui/material'
import hiw1Image from '../../public/HIW1.png'
import hiw2Image from '../../public/HIW2.png'
import hiw3Image from '../../public/HIW3.png'
import CtaButtons from '../common/CtaButtons'
import HIWCard from './HIWCard'

const cardInfos = [
  {
    source: hiw1Image,
    caption: 'Register your Spend.In account.',
  },
  {
    source: hiw2Image,
    caption: 'Fill in the list of your business expenses.',
  },
  {
    source: hiw3Image,
    caption: "Done, let's continue the work.",
  },
]

export default function HowItWorks() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { sm: 'center' },
          mt: { xs: 6, md: 10 },
        }}
      >
        <Typography variant='h5' sx={{ mt: 2 }}>
          HOW IT WORKS
        </Typography>
        <Typography variant='h2' sx={{ mt: 2 }}>
          Few Easy Steps and Done
        </Typography>

        <Typography variant='body1' sx={{ mt: 2 }}>
          In just a few easy steps, you are all set to manage your business
          finances.
        </Typography>
        <Typography variant='body1'>
          Manage all expenses with Spend.In all in one place.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
          mt: 4,
        }}
      >
        {cardInfos.map((cardInfo) => {
          return (
            <div key={cardInfo.caption} className='hiw-card'>
              <HIWCard cardInfo={cardInfo} />
            </div>
          )
        })}
      </Box>
      <CtaButtons />
    </>
  )
}
