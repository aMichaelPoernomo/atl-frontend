import { Provider } from 'react-redux'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { IntlProvider } from 'react-intl'

import routes from '@configs/routes'
import { makeStore } from '@configs/store'
import Home from '@src/containers/home'
import en from '@translations/en.json'

const store = makeStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <IntlProvider locale="en" messages={en}>
          <CssBaseline />
          <Switch>
            <Route path={routes.root} component={Home} />
            <Redirect to={routes.root} />
          </Switch>
        </IntlProvider>
      </Router>
    </Provider>
  )
}

export default App
