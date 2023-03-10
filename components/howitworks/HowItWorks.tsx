import { Box, Button, Container, Typography } from '@mui/material'
import hiw1Image from '../../public/HIW1.png'
import hiw2Image from '../../public/HIW2.png'
import hiw3Image from '../../public/HIW3.png'
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
    <Container
      maxWidth='xl'
      sx={{ display: 'flex', flexDirection: 'column', mt: 4 }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { sm: 'center' },
        }}
      >
        <Typography variant='h4'>HOW IT WORKS</Typography>
        <Typography variant='h3'>Few Easy Steps and Done</Typography>

        <Typography variant='body1'>
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
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button>Get a Free Demo</Button>
        <Button>Pricing</Button>
      </Box>
    </Container>
  )
}
