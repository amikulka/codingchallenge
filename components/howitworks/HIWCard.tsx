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
        <Image src={cardInfo.source} alt={cardInfo.caption} />
      </div>
      <Typography variant='h5' sx={{ textAlign: 'center' }}>
        {cardInfo.caption}
      </Typography>
    </>
  )
}
