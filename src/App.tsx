import React, { Suspense, createContext, useMemo } from 'react'
import { RouterProvider, HashRouter } from 'react-router-dom'
import Loading from '@/pages/loading'
import Router from './router'
// import './App.css'
import { ConfigProvider } from 'antd'
// import AuthRouter from '@/router/authRouter'
import { Routes, Route } from 'react-router-dom'
import Main from '@/layout/index'
import Home from '@/view/home'
import JsPageWidget from '@/view/js/index'

import CssPage from '@/view/css/index'
import CardsPage from '@/view/css/cards'
import MenuRadius from '@/view/css/menu-radius/index'

import HtmlPage from '@/view/html/index'

function App() {
  return (
    // <Suspense fallback={<Loading />}>
    //   <RouterProvider router={Router}></RouterProvider>
    // </Suspense>
    <HashRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b'
          }
        }}
      >
        {/* <Router /> */}
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='home' element={<Home />}></Route>
            <Route path='/html' element={<HtmlPage />}></Route>
            <Route path='/js' element={<JsPageWidget />}></Route>
            <Route path='/css' element={<CssPage />}>
              <Route index element={<CardsPage />}></Route>
              <Route path='/css/menu-radius' element={<MenuRadius />}></Route>
            </Route>
          </Route>
        </Routes>
      </ConfigProvider>
    </HashRouter>
  )
}

export default App
