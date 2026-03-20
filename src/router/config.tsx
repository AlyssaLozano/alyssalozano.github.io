import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Programs from "../pages/programs/page";
import About from "../pages/about/page";
import SecurityPlus from "../pages/programs/security-plus/page";
import Cysa from "../pages/programs/cysa/page";
import Admissions from "../pages/admissions/page";
import Contact from "../pages/contact/page";
import Employers from "../pages/employers/page";
import Disclosures from "../pages/disclosures/page";
import Workforce from "../pages/workforce/page";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/programs", element: <Programs /> },
  { path: "/programs/security-plus", element: <SecurityPlus /> },
  { path: "/programs/cybersecurity-operations-analyst", element: <Cysa /> },
  { path: "/about", element: <About /> },
  { path: "/admissions", element: <Admissions /> },
  { path: "/workforce", element: <Workforce /> },
  { path: "/contact", element: <Contact /> },
  { path: "/employers", element: <Employers /> },
  { path: "/disclosures", element: <Disclosures /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
