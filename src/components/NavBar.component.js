import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import logo from '../assets/logo.svg'
import { ShoppingCart } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { HOME, CHECKOUTPAGE } from '../config/paths'
import { useStateValue } from '../store/StateProvider.store'

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
  },
  image: {
    marginRight: '10px',
  },
}))

export default function Navbar() {
  const classes = useStyles()
  const [{ basket }, dispatch] = useStateValue()

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
            Bienvenido
          </Typography>
          <div className={classes.button}>
            <Button variant="outlined">
              <strong>Sign up</strong>
            </Button>
            <Link to={CHECKOUTPAGE}>
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={basket?.length} color="secondary">
                  <ShoppingCart fontSize="large" color="primary" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
