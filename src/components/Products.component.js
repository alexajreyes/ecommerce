import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Product from './Product.component'
import { products } from '../service/ProductData.services'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

export default function Products() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Array.isArray(products) &&
          products.length > 0 &&
          products.map((_product, index) => (
            <Grid
              key={`${index}+${_product.id}`}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <Product product={_product} />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}
