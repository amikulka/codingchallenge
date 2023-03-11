import { Box, Button, Card, CardContent, Chip, Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import greenCheckIcon from '../../public/tick-circle.svg'
import redXIcon from '../../public/close-circle.svg'

type Props = {
  pricingInfo: {
    tierIcon: StaticImageData
    tierName: string
    tierSlogan: string
    tierPrice: string
    tierDescription: string
    tierBullets: BulletInfo[]
    buttonText: string
  }
}
type BulletInfo = {
  isPositive: boolean
  description: string
}

export default function PricingCard({ pricingInfo }: Props) {
  return (
    <Card>
      <CardContent
        sx={{
          width: 385,
          height: 710,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image
              src={pricingInfo.tierIcon}
              alt={pricingInfo.tierName + ' icon'}
            />
            <Typography>{pricingInfo.tierName}</Typography>
          </Box>
          {pricingInfo.tierName === 'Pro' && <Chip label='Popular' />}
        </Box>
        <Typography>{pricingInfo.tierSlogan}</Typography>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Typography>${pricingInfo.tierPrice}</Typography>
          <Typography>/month</Typography>
        </Box>
        {pricingInfo.tierBullets.map((bullet) => {
          return (
            <Box key={bullet.description} sx={{ display: 'flex', gap: '15px' }}>
              <Image
                src={bullet.isPositive ? greenCheckIcon : redXIcon}
                alt={bullet.isPositive ? 'green check icon' : 'red x icon'}
              />
              <Typography>{bullet.description}</Typography>
            </Box>
          )
        })}
        <Button
          sx={{
            backgroundColor: 'blue',
            color: 'white',
            width: '80%',
            alignSelf: 'center',
            borderRadius: '2rem',
          }}
        >
          {pricingInfo.buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}
