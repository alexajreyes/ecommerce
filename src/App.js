import AppRoutes from './App.routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react'
import { auth } from './store/Firebase.store'
import { actionTypes } from './hook/useReducer.hook'
import { useStateValue } from './store/StateProvider.store'
function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser)
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  }, [])
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
