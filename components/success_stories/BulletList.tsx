import { Box, Typography } from '@mui/material'

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
          <Box key={bullet[0]}>
            {displayInformation.isPositive ? <p>YES</p> : <p>NO</p>}
          </Box>
        )
      })}
    </Box>
  )
}
