import { Avatar, Box, Card, CardContent, Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'

type Props = {
  testimonial: {
    name: string
    position: string
    summary: string
    review: string
    image: StaticImageData
  }
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <Card>
      <CardContent
        sx={{ width: 385, display: 'flex', flexDirection: 'column' }}
      >
        <Typography variant='h6'>{testimonial.summary}</Typography>
        <Typography variant='body1'>{testimonial.review}</Typography>
        <div
          style={{
            width: '70%',
            borderBottom: '1px solid rgba(0, 0, 0, 0.16)',
            alignSelf: 'center',
          }}
        />
        <Box sx={{ display: 'flex' }}>
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            style={{ borderRadius: '10px' }}
          />
          <Box sx={{ alignSelf: 'center', ml: 2 }}>
            <Typography>{testimonial.name}</Typography>
            <Typography>{testimonial.position}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
