import React from 'react'
import { useRoute } from 'react-router5'

// layouts
import DefaultLayout from './layouts/default'
import SimpleLayout from './layouts/simple'

// App pages
import HomePage from './pages/home'
import AboutPage from './pages/about'
import NotFoundPage from './pages/not-found'

// App components
import Loader from './components/loader'
import ModalController from './components/modals/controller'

const SIMPLE_LAYOUT_PAGES = ['@@router5/UNKNOWN_ROUTE']

function App () {
  const { route } = useRoute()

  function PageSwitcher () {
    switch (route.name) {
      case 'home':
        return <HomePage />
      case 'about':
        return <AboutPage />
      default:
        return <NotFoundPage />
    }
  }

  return (
    <>{route
      ? <div className="app">
        <ModalController/>

        {SIMPLE_LAYOUT_PAGES.includes(route.name)
          ? <SimpleLayout>
            <PageSwitcher/>
          </SimpleLayout>
          : <DefaultLayout>
            <PageSwitcher/>
          </DefaultLayout>}
      </div>
      : <Loader /> }</>
  )
}

export default App
