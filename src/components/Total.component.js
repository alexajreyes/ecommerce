import React from 'react'
import accounting from 'accounting'
import { Button, makeStyles } from '@material-ui/core'
import { getBasketTotal } from '../hook/useReducer.hook'
import { useStateValue } from '../store/StateProvider.store'
import { CHECKOUT } from '../config/paths'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
  },
  button: {
    marginTop: '2rem',
  },
}))
const Total = () => {
  const classes = useStyles()
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className={classes.root}>
      <h5>Total item: {basket?.length}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket), 'C$')}</h5>
      <Link to={CHECKOUT}>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          Check out
        </Button>
      </Link>
    </div>
  )
}
export default React.memo(Total)
