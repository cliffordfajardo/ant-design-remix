import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import antdStyles from "antd/dist/antd.css";
import { AppLayout } from "~/components/AppLayout";
import { TopNavigation } from "~/components/TopNavigation";
import { SideNavigation } from "~/components/SideNavigation";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: antdStyles }];
}

function Document({
  children,
  title = "App title",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title}</title>
        <Meta />
        <Links />
      </head>

      <body>
        <AppLayout
          topNav={<TopNavigation />}
          sideNavigation={<SideNavigation />}
          content={<p>hello content</p>}
        />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Document title="My App">
        <Outlet />
      </Document>
    </>
  );
}
