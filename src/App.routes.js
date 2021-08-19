import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout.component'
import { HOME, CHECKOUTPAGE, SIGNIN, SIGNUP, CHECKOUT } from './config/paths'
import { Suspense, lazy } from 'react'

const Products = lazy(() => import('./components/Products.component'))
const CheckoutPage = lazy(() => import('./components/CheckoutPage.component'))
const SignIn = lazy(() => import('./components/SignIn.component'))
const SignUp = lazy(() => import('./components/SigUP.component'))
const Checkout = lazy(() =>
  import('./components/CheckoutForm/Checkout.component')
)

export default function AppRoutes() {
  return (
    <Suspense fallback={() => <h3>Cargando...</h3>}>
      <Switch>
        <Route path="/">
          <Layout>
            <Switch>
              <Route path={CHECKOUTPAGE} component={CheckoutPage} />
              <Route path={SIGNUP} component={SignUp} />
              <Route path={SIGNIN} component={SignIn} />
              <Route path={CHECKOUT} component={Checkout} />
              <Route path={HOME} component={Products} />
              <Route component={() => <h1>404 ERROR</h1>} />
            </Switch>
          </Layout>
        </Route>
      </Switch>
    </Suspense>
  )
}
