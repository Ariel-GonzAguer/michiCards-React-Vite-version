import React, { useState, useEffect } from "react"

import HomePage from "./components/HomePage/HomePage"

import Root from "./components/Root/Root"
import CreateCard from "./components/CreateCard/CreateCard"
import UserGuide from "./components/UserGuide/UserGuide"
import CardCreated from "./components/CardCreated/CardCreated"
import LocalMichiCards from "./components/LocalMichiCards-feature/LocalMichiCards"

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'


export default function App() {
  const localMichis = window.localStorage;
  localMichis.getItem("localMichis");
  const [localCards, setLocalCards] = useState(localMichis || [])

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="create" element={<CreateCard />} />
      <Route path="user-guide" element={<UserGuide />} />
      <Route path="card-created" element={<CardCreated createLocalMichiCard={createLocalMichiCard} />} />
      <Route index element={<HomePage />} />
      <Route path="local-michi-cards" element={<LocalMichiCards localCards={localCards} />} />
    </Route>
  ))

  function createLocalMichiCard(stats) {
    setLocalCards((prev) => [...prev, { ...stats, key: Math.random() }])
  }

  // Probar solo con uso de windows.localStorage, sin usar useState ni useEffect


  useEffect(() => {
    localMichis.setItem('localCards', localCards);
  }, [localCards])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}