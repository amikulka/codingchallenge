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
    <Box>
      <Typography variant='h5'>{displayInformation.header}</Typography>
      {displayInformation.bullets.map((bullet) => {
        return (
          <Box key={bullet} sx={{ display: 'flex' }}>
            {displayInformation.isPositive ? (
              <Image src={posCheckIcon} alt='positive check icon' />
            ) : (
              <Image src={negXIcon} alt='negative x icon' />
            )}
            <Typography variant='body1'>{bullet}</Typography>
          </Box>
        )
      })}
    </Box>
  )
}
