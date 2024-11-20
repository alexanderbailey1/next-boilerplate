// "use client";

import { useSession } from "next-auth/react";
import VisitorSideNav from "./visitor-dashboard/VisitorSideNav";
import SideNav from "./dashboard/sidenav";
const SideNavWrapper = () => {
  // const { data, status } = useSession();

  // console.log("session data", data)
  // if (status === "loading") return <h1>Loading..........</h1>;

  // if (status === "unauthenticated") return <VisitorSideNav />;
  return <VisitorSideNav />;
};

export default SideNavWrapper;
