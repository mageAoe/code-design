import React, { Suspense, createContext, useMemo, lazy } from 'react'
import { RouterProvider, HashRouter } from 'react-router-dom'
import Loading from '@/components/loading/loading'
// import Router from './router'
import { ConfigProvider, theme } from 'antd'
// import AuthRouter from '@/router/authRouter'
import { Routes, Route } from 'react-router-dom'
import Main from '@/layout/index'
const Home = lazy(() => import('@/view/home'))
import JsPageWidget from '@/view/js/index'

import CssPage from '@/view/css/index'
import CardsPage from '@/view/css/cards'
import MenuRadius from '@/view/css/menu-radius/index'
import TransitionEffect from '@/view/css/transition-effect/index'
import HtmlPage from '@/view/html/index'
import HtmlCardsPage from '@/view/html/cards'

const Components = lazy(() => import('@/view/components'))

const App: React.FC = () => (
  // <Suspense fallback={<Loading />}>
  //   <RouterProvider router={Router}></RouterProvider>
  // </Suspense>
  <HashRouter>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#00b96b'
        }
      }}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<Home />}></Route>
            <Route path='/html' element={<HtmlPage />}>
              <Route index element={<HtmlCardsPage />}></Route>
            </Route>
            <Route path='/js' element={<JsPageWidget />}></Route>
            <Route path='/css' element={<CssPage />}>
              <Route index element={<CardsPage />}></Route>
              <Route path='/css/menu-radius' element={<MenuRadius />}></Route>
              <Route path='/css/transition-effect' element={<TransitionEffect />}></Route>
            </Route>
            <Route path='/components' element={<Components />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </ConfigProvider>
  </HashRouter>
)

export default App
