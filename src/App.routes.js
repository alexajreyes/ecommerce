import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout.component'
import { HOME, CHECKOUTPAGE } from './config/paths'
import { Suspense, lazy } from 'react'

const Products = lazy(() => import('./components/Products.component'))
const CheckoutPage = lazy(() => import('./components/CheckoutPage.component'))
export default function AppRoutes() {
  return (
    <Suspense fallback={() => <h3>Cargando...</h3>}>
      <Switch>
        <Route path="/">
          <Layout>
            <Switch>
              <Route path={CHECKOUTPAGE} component={CheckoutPage} />
              <Route path={HOME} component={Products} />
              <Route component={() => <h1>404 ERROR</h1>} />
            </Switch>
          </Layout>
        </Route>
      </Switch>
    </Suspense>
  )
}
