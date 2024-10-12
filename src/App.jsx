import React, { useState, useEffect } from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import Root from "./components/Root/Root"
import HomePage from "./components/HomePage/HomePage"
import CreateCard from "./components/CreateCard/CreateCard"
import UserGuide from "./components/UserGuide/UserGuide"
import CardCreated from "./components/CardCreated/CardCreated"
import LocalCardCollection from "./components/LocalCardCollection/LocalCardCollection"

export default function App() {
 

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="create" element={<CreateCard />} />
      <Route path="user-guide" element={<UserGuide />} />
      <Route path="card-created" element={<CardCreated />} />
      <Route path="local-michi-cards" element={<LocalCardCollection />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}