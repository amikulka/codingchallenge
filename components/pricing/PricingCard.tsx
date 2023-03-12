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
    <Card sx={{ flexShrink: 1, flexBasis: 325, maxWidth: 385, height: 710 }}>
      <CardContent
        sx={{
          height: 710,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image
              src={pricingInfo.tierIcon}
              alt={pricingInfo.tierName + ' icon'}
            />
            <Typography variant='h3'>{pricingInfo.tierName}</Typography>
          </Box>
          {pricingInfo.tierName === 'Pro' && (
            <Chip label='Popular' variant='popular' size='small' />
          )}
        </Box>
        <Typography variant='smallLight'>{pricingInfo.tierSlogan}</Typography>
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', my: 2 }}>
          <Typography variant='h3'>${pricingInfo.tierPrice}</Typography>
          <Typography variant='caption'>/month</Typography>
        </Box>
        <Typography variant='smallDark' sx={{ mb: 4 }}>
          {pricingInfo.tierDescription}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexGrow: 1,
            flexDirection: 'column',
          }}
        >
          {pricingInfo.tierBullets.map((bullet) => {
            return (
              <Box
                key={bullet.description}
                sx={{ display: 'flex', gap: '15px' }}
              >
                <Image
                  src={bullet.isPositive ? greenCheckIcon : redXIcon}
                  alt={bullet.isPositive ? 'green check icon' : 'red x icon'}
                />
                <Typography variant={bullet.isPositive ? 'body2' : 'body1'}>
                  {bullet.description}
                </Typography>
              </Box>
            )
          })}
        </Box>
        <Button
          variant='contained'
          color='primary'
          sx={{
            width: '80%',
            alignSelf: 'center',
            borderRadius: '2rem',
            mt: 6,
            mb: 2,
          }}
        >
          {pricingInfo.buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}
