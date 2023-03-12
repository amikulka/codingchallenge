import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import posCheckIcon from '../../public/tick-circle.svg'
import negXIcon from '../../public/close-circle.svg'

type Props = {
  displayInformation: {
    header: string
    bullets: Array<string>
    isPositive: boolean
  }
}

export default function BulletList({ displayInformation }: Props) {
  return (
    <Box sx={{ mt: 4, maxWidth: 500 }}>
      <Typography variant='h4'>{displayInformation.header}</Typography>
      {displayInformation.bullets.map((bullet) => {
        return (
          <Box key={bullet} sx={{ display: 'flex', py: 3 }}>
            {displayInformation.isPositive ? (
              <Image src={posCheckIcon} alt='positive check icon' />
            ) : (
              <Image src={negXIcon} alt='negative x icon' />
            )}
            <Typography variant='body2' sx={{ px: 2 }}>
              {bullet}
            </Typography>
          </Box>
        )
      })}
    </Box>
  )
}
