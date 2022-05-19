import React from "react";
import { links as SideNavigationLinks } from "~/components/SideNavigation";

export function links() {
  return [...SideNavigationLinks()];
}

const Index = () => {
  return <>index page</>;
};

export default Index;
