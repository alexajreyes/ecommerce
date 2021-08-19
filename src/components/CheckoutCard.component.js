import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import accounting from 'accounting'
import DeleteIcon from '@material-ui/icons/Delete'
import { IconButton } from '@material-ui/core'
import { useStateValue } from '../store/StateProvider.store'
import { actionTypes } from '../hook/useReducer.hook'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
  },
  action: {
    marginTop: '1rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardRating: {
    display: 'flex',
  },
}))

export default function CheckoutCard({
  product: { id, name, ProductType, price, rating, image, description },
}) {
  const classes = useStyles()
  const [{ basket }, dispatch] = useStateValue()

  const removeItem = () =>
    dispatch({
      type: actionTypes.REMOVE_ITEMS,
      id: id,
    })
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant="h5"
            color="textSecondary"
          >
            {accounting.formatMoney(price, 'C$')}
          </Typography>
        }
        title={name}
        subheader="in Stock"
      />
      <CardMedia className={classes.media} image={image} title={name} />
      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        <IconButton onClick={removeItem}>
          <DeleteIcon fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>
  )
}
