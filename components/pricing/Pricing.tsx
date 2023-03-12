import { Box, Chip, Switch, Typography } from '@mui/material'
import freeIcon from '../../public/lovely.svg'
import proIcon from '../../public/crown.svg'
import ultimateIcon from '../../public/flash.svg'
import PricingCard from './PricingCard'

export default function Pricing() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4,
        }}
      >
        <Typography variant='h3'>Ready to get Started?</Typography>

        <Typography variant='body1'>
          Choose a plan that suits your business needs
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>Monthly</Typography>
          <Switch defaultChecked />
          <Typography>Yearly</Typography>
        </Box>
        <Chip label='Save 65%' variant='sale' size='small' />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {pricingInfos.map((pricingInfo) => {
          return (
            <PricingCard pricingInfo={pricingInfo} key={pricingInfo.tierName} />
          )
        })}
      </Box>
    </>
  )
}

const pricingInfos = [
  {
    tierIcon: freeIcon,
    tierName: 'Free',
    tierSlogan: 'Perfect plan to get started',
    tierPrice: '0',
    tierDescription:
      'A free plan grants you access to some cool features of Spend.In.',
    tierBullets: [
      {
        isPositive: true,
        description: 'Sync across devices',
      },
      {
        isPositive: true,
        description: '5 workspaces',
      },
      {
        isPositive: true,
        description: 'Collaborate with 5 users',
      },
      {
        isPositive: false,
        description: 'Sharing permissions',
      },
      {
        isPositive: false,
        description: 'Admin tools',
      },
      {
        isPositive: false,
        description: '100+ integrations',
      },
    ],
    buttonText: 'Get Your Free Plan',
  },
  {
    tierIcon: proIcon,
    tierName: 'Pro',
    tierSlogan: 'Perfect plan for professionals!',
    tierPrice: '12',
    tierDescription:
      'For professional only! Start arranging your expenses with our best templates.',
    tierBullets: [
      {
        isPositive: true,
        description: 'Everything in Free Plan',
      },
      {
        isPositive: true,
        description: 'Unlimited workspaces',
      },
      {
        isPositive: true,
        description: 'Collaborative workspace',
      },
      {
        isPositive: true,
        description: 'Sharing permissions',
      },
      {
        isPositive: true,
        description: 'Admin tools',
      },
      {
        isPositive: true,
        description: '100+ integrations',
      },
    ],
    buttonText: 'Get Your Free Plan',
  },
  {
    tierIcon: ultimateIcon,
    tierName: 'Ultimate',
    tierSlogan: 'Best suits for great company!',
    tierPrice: '33',
    tierDescription:
      "If you're a finance manager at a big company, this plan is a perfect match.",
    tierBullets: [
      {
        isPositive: true,
        description: 'Everything in Pro Plan',
      },
      {
        isPositive: true,
        description: 'Daily performance reports',
      },
      {
        isPositive: true,
        description: 'Dedicated assistant',
      },
      {
        isPositive: true,
        description: 'Artificial intelligence',
      },
      {
        isPositive: true,
        description: 'Marketing tools & automations',
      },
      {
        isPositive: true,
        description: 'Advanced security',
      },
    ],
    buttonText: 'Get Your Free Plan',
  },
]
