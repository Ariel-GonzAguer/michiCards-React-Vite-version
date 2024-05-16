import React, { useState, useEffect } from "react"

import HomePage from "./components/HomePage/HomePage"

import Root from "./components/Root/Root"
import CreateCard from "./components/CreateCard/CreateCard"
import UserGuide from "./components/UserGuide/UserGuide"
import CardCreated from "./components/CardCreated/CardCreated"
import LocalMichiCards from "./components/LocalMichiCards-feature/LocalMichiCards"

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'


export default function App() {
  // const localMichis = window.localStorage.getItem('localMichiCards')
  // const [localMichiCards, setLocalMichiCards] = useState(localMichis || {})

  // useEffect(() => {
  //   window.localStorage.setItem('localMichiCards', localMichiCards)
  // }, [localMichiCards])

  // function createLocalMichiCard(cardObject) {
  //   setLocalMichiCards(prev => ({ ...prev, cardObject }))
  // }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="create" element={<CreateCard />} />
      <Route path="user-guide" element={<UserGuide />} />
      <Route path="card-created" element={<CardCreated/>} />
      <Route index element={<HomePage />} />
      <Route path="local-michi-cards" element={<LocalMichiCards/>} />
    </Route>
  ))


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}