import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

import styles from "./styles/app.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta = () => ({
  charset: "utf-8",
  title: "BullesAI",
  viewport: "width=device-width,initial-scale=1",
})

export default function App() {
  return (
    <html lang="en" className="h-full bg-stone-50">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-full flex-col">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
