import React from "react"

import HomePage from "./components/HomePage/HomePage"

import Root from "./components/Root/Root"
import CreateCard from "./components/CreateCard/CreateCard"
import UserGuide from "./components/UserGuide/UserGuide"
import CardCreated from "./components/CardCreated/CardCreated"

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="create" element={<CreateCard />} />
    <Route path="user-guide" element={<UserGuide />} />
    <Route path="card-created" element={<CardCreated />} />
    <Route index element={<HomePage />} />
  </Route>
))

export default function App() {


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}