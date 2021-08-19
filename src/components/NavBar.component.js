import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import logo from '../assets/logo.svg'
import { ShoppingCart } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { HOME, CHECKOUTPAGE, SIGNIN } from '../config/paths'
import { useStateValue } from '../store/StateProvider.store'
import useWindowWidth from '../hook/useWindowWidth.hoo'
import { Spin as HamburgerMenu } from 'hamburger-react'
import { auth } from '../store/Firebase.store'
import { actionTypes } from '../hook/useReducer.hook'

const BREAKPOINT = 480
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '7rem',
  },
  appBar: {
    backgroundColor: '#9eadbf',
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
    '@media (max-width: 480px)': {
      minHeight: '100vh',
      transition: 'all 1s ease',
      position: 'absolute',
      top: 46,
      right: 0,
    },
  },
  image: {
    marginRight: '10px',
    width: 70,
  },
}))

export default function Navbar() {
  const history = useHistory()
  //gestiona el estado del menu de opciones
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const windowWidth = useWindowWidth()

  const classes = useStyles()
  //obtenemos el valor de en el carrito
  const [{ basket, user }, dispatch] = useStateValue()
  //funcion que nos permite mostrar el menu de hamburguesa
  useEffect(() => {
    windowWidth > BREAKPOINT ? setMenuIsOpen(true) : setMenuIsOpen(false)
  }, [windowWidth])

  const handleAuth = () => {
    if (user) {
      auth.signOut()
      dispatch({
        type: actionTypes.EMTY_BASKET,
        basket: [],
      })
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      })
      history.push('/')
    }
  }
  const closeMenu = () => windowWidth < BREAKPOINT && setMenuIsOpen(false)
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to={HOME}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <img className={classes.image} src={logo} alt="image logo" />
            </IconButton>
          </Link>

          <div className={classes.grow} />
          <Typography variant="h6" color="textPrimary" component="p">
            Hello {user ? user.email : 'Guest'}
          </Typography>
          {menuIsOpen && (
            <div className={classes.button} visible={menuIsOpen}>
              <Link to={SIGNIN}>
                <Button variant="outlined" onClick={handleAuth}>
                  <strong>{user ? 'Sign Out' : 'Sign In'}</strong>
                </Button>
              </Link>

              <Link to={CHECKOUTPAGE} onClick={closeMenu}>
                <IconButton aria-label="show cart items" color="inherit">
                  <Badge badgeContent={basket?.length} color="secondary">
                    <ShoppingCart fontSize="large" color="primary" />
                  </Badge>
                </IconButton>
              </Link>
            </div>
          )}
          {windowWidth < BREAKPOINT && (
            <HamburgerMenu
              rounded
              toggled={menuIsOpen}
              toggle={setMenuIsOpen}
              size={20}
              color={'#242D52'}
            />
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
