import { createTheme } from '@mui/material/styles'
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    secondary: true
    clear: true
  }
}
declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    sale: true
    popular: true
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    smallLight: true
    smallDark: true
  }
}

declare module '@mui/material/styles' {
  interface PaletteColor {
    100?: string
    200?: string
    300?: string
    400?: string
    500?: string
    600?: string
    700?: string
    800?: string
    900?: string
  }

  interface SimplePaletteColorOptions {
    100?: string
    200?: string
    300?: string
    400?: string
    500?: string
    600?: string
    700?: string
    800?: string
    900?: string
  }
}

const defaultTheme = createTheme()
let theme = createTheme(defaultTheme, {
  typography: {
    fontFamily: 'Plus Jakarta Sans',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: '#7C5CFC',
      light: '#B49DFE',
      dark: '#432EB5',
      contrastText: '#FFF',
      900: '#1D1178',
      800: '#2D1D92',
      700: '#432EB5',
      600: '#5E43D8',
      400: '#9F84FD',
      300: '#B49DFE',
      200: '#CEBEFE',
      100: '#E7DEFE',
    },
    secondary: {
      main: '#1A202C',
      900: '#040815',
      800: '#080C19',
      700: '#0D121F',
      600: '#131825',
      400: '#596780',
      300: '#90A3BF',
      200: '#C3D4E9',
      100: '#E0E9F4',
    },
  },
})
theme = createTheme(theme, {
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'secondary' },
          style: {
            textTransform: 'none',
            border: `2px solid ${theme.palette.secondary[200]}`,
            color: theme.palette.secondary.main,
          },
        },
        {
          props: { variant: 'clear' },
          style: {
            textTransform: 'none',
            color: theme.palette.secondary[400],
          },
        },
      ],
    },
    MuiChip: {
      variants: [
        {
          props: { variant: 'sale' },
          style: {
            backgroundColor: theme.palette.primary[100],
            color: theme.palette.secondary[700],
            fontSize: '12px',
          },
        },
        {
          props: { variant: 'popular' },
          style: {
            backgroundColor: theme.palette.secondary[700],
            color: 'white',
            fontSize: '14px',
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'smallLight' },
          style: {
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 400,
            fontsize: '.8rem',
            color: '#596780',
            [theme.breakpoints.up('md')]: {
              fontSize: '.9rem',
            },
          },
        },
        {
          props: { variant: 'smallDark' },
          style: {
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 400,
            fontsize: '.8rem',
            color: '#040815',
            [theme.breakpoints.up('md')]: {
              fontSize: '.9rem',
            },
          },
        },
      ],
    },
  },
})

theme.typography.h1 = {
  fontFamily: 'Plus Jakarta Sans',
  fontWeight: 700,
  fontSize: '2.25rem',
  lineHeight: '150%',
  letterSpacing: '-0.03em',
  color: '#040815',
  [theme.breakpoints.up('md')]: {
    fontSize: '4.5rem',
  },
}
theme.typography.h2 = {
  fontFamily: 'Plus Jakarta Sans',
  fontWeight: 700,
  fontSize: '1.5rem',
  lineHeight: '150%',
  letterSpacing: '-0.03em',
  color: '#040815',
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
}
theme.typography.h3 = {
  fontFamily: 'Plus Jakarta Sans',
  fontWeight: 600,
  fontSize: '1.2rem',
  lineHeight: '150%',
  letterSpacing: '-0.02em',
  color: '#040815',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
}
theme.typography.h4 = {
  fontFamily: 'Plus Jakarta Sans',
  fontWeight: 700,
  fontSize: '1.2rem',
  lineHeight: '150%',
  letterSpacing: '-0.02em',
  color: '#040815',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
}
theme.typography.h5 = {
  fontFamily: 'Plus Jakarta Sans',
  fontWeight: 600,
  fontSize: '1rem',
  lineHeight: '150%',
  letterSpacing: '-0.02em',
  color: '#7C5CFC',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem',
  },
}
theme.typography.h6 = {
  fontFamily: 'Plus Jakarta Sans',
  fontWeight: 600,
  fontSize: '1rem',
  lineHeight: '150%',
  letterSpacing: '-0.02em',
  color: '#040815',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
}
theme.typography.body1 = {
  fontFamily: 'Plus Jakarta Sans',
  fontWeight: 400,
  fontsize: '.75rem',
  color: '#596780',
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
}
theme.typography.body2 = {
  fontFamily: 'Plus Jakarta Sans',
  fontWeight: 500,
  fontsize: '.9rem',
  color: '#040815',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.1rem',
  },
}

theme.typography.caption = {
  fontFamily: 'Plus Jakarta Sans',
  fontWeight: 400,
  fontsize: '.7rem',
  color: '#596780',
  [theme.breakpoints.up('md')]: {
    fontSize: '.9rem',
  },
}

export default theme
