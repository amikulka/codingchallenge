import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { useState } from 'react'
import Image from 'next/image'
import logoIcon from '../public/spendin-logo.svg'

const pages = ['Products', 'Benefit', 'How it Works', 'Pricing', 'Company']
const mobileDropItems = [
  'Products',
  'Benefit',
  'How it Works',
  'Pricing',
  'Company',
  'Login',
  'Get Demo',
]
const productsDropItems = ['Item 1', 'Item 2', 'Item 3']
const companyDropItems = ['About Us', 'Careers', 'Our Mission']

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Image src={logoIcon} alt='spend.in logo' />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
            }}
          >
            Spend.In
          </Typography>

          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              textDecoration: 'none',
            }}
          >
            Spend.In
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: { md: 'center' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {page}
                {(page === 'Products' || page === 'Company') && (
                  <ExpandMoreIcon />
                )}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Button
              sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Login
            </Button>
            <Button
              sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Get Demo
            </Button>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size='large'
              aria-label='main-dropdown-menu'
              aria-controls='menu-appbar'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <DragHandleIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {mobileDropItems.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <Typography textAlign='center' sx={{ display: 'flex' }}>
                    {(page === 'Products' || page === 'Company') && (
                      <KeyboardArrowLeftIcon />
                    )}
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
