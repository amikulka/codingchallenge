import { Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'

type Props = {
  cardInfo: {
    source: StaticImageData
    caption: string
  }
}

export default function HIWCard({ cardInfo }: Props) {
  return (
    <>
      <div className='hiw-card-image'>
        <Image
          src={cardInfo.source}
          alt={cardInfo.caption}
          width={275}
          height={295}
        />
      </div>
      <Typography
        variant='h3'
        sx={{ textAlign: 'center', width: '80%', ml: 2 }}
      >
        {cardInfo.caption}
      </Typography>
    </>
  )
}
