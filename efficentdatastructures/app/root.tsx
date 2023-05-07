import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from '~/tailwind.css';
import LeftNav from "./components/LeftNav";
import ReactGA from "react-ga4";
import { useEffect } from "react";

export const links: LinksFunction = () => {
   return [{rel: 'stylesheet', href: styles}] //tailwind Stylesheet
 }
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Efficient use of data structures.",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  // Google Analytics pageview count.
  useEffect(() =>{
    ReactGA.initialize("G-9F3RXX9YGW");
    ReactGA.send({hitType: "pageview", page: window.location.pathname})
  }, [])
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>

         <LeftNav />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        
      </body>
    </html>
  );
}
