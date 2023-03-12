import { Box, Typography } from '@mui/material'
import { StaticImageData } from 'next/image'
import TestimonialCard from './TestimonialCard'
import JimmyImage from '../../public/jimmy-profile.png'
import NatashaImage from '../../public/natasha-profile.png'
import MoritikaImage from '../../public/moritika-profile.png'

export default function WhatTheySay() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { sm: 'center' },
          mt: { xs: 6, md: 10 },
        }}
      >
        <Typography variant='h5' sx={{ mt: 2 }}>
          WHAT THEY SAY
        </Typography>
        <Typography variant='h2' sx={{ mt: 1 }}>
          Our User Kind Words
        </Typography>

        <Typography variant='body1' sx={{ mt: 2 }}>
          Here are some testimonials from our users after using Spend.In to
          manage their business expenses
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '20px',
          mt: 4,
        }}
      >
        {testimonials.map((testimonial) => {
          return (
            <TestimonialCard testimonial={testimonial} key={testimonial.name} />
          )
        })}
      </Box>
    </>
  )
}

type testimonial = {
  name: string
  position: string
  summary: string
  review: string
  image: StaticImageData
}

const testimonials: Array<testimonial> = [
  {
    name: 'Jimmy Bartney',
    position: 'Product Manager at Picko Lab',
    summary: "It's just incredible!",
    review:
      'It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!',
    image: JimmyImage,
  },
  {
    name: 'Natasha Romanoff',
    position: 'Black Widow',
    summary: 'Satisfied User Here!',
    review:
      'Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!',
    image: NatashaImage,
  },
  {
    name: 'Moritika Kazuki',
    position: 'Finance Manager at Mangan',
    summary: 'No doubt, Spend.In is the best!',
    review: `“The best”! That’s what I want to say to this platform, didn’t know that there’s a platform to help you manage your business expenses like this! Very recommended to you who have a big business!`,
    image: MoritikaImage,
  },
]
