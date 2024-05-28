import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import HomePage from "./components/HomePage/HomePage"
import Root from "./components/Root/Root"
import CreateCard from "./components/CreateCard/CreateCard"
import UserGuide from "./components/UserGuide/UserGuide"
import CardCreated from "./components/CardCreated/CardCreated"
import LocalCardCollection from "./components/LocalCardCollection-feature/LocalCardCollection"

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="create" element={<CreateCard />} />
      <Route path="user-guide" element={<UserGuide />} />
      <Route path="card-created" element={<CardCreated />} />
      <Route index element={<HomePage />} />
      <Route path="local-michi-cards" element={<LocalCardCollection />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}