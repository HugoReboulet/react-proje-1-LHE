import { Outlet, Link } from "react-router-dom";
// on utilise react router dom pour pouvoirr utiliser plusieurs page 
// page d'acceuil contenant les liens vers les 2 autres pages
export default function App() {
  return (
    <div>
      <h1>Projet React</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/page1">Page1</Link> |{" "}
        <Link to="/page2">Page2</Link>
      </nav>
      <Outlet />
    </div>
  );
}