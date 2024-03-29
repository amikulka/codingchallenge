import { Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
  cardInfo: {
    source: StaticImageData
    header: string
    body: string
  }
}

export default function BenefitCard({ cardInfo }: Props) {
  return (
    <>
      <div className='benefit-card-image'>
        <Image src={cardInfo.source} alt={cardInfo.header} />
      </div>
      <Typography variant='h3'>{cardInfo.header}</Typography>
      <Typography variant='body1' sx={{ maxWidth: '90%' }}>
        {cardInfo.body}
      </Typography>
    </>
  )
}
