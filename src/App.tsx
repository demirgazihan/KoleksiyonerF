import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Route";
// import 'bootstrap/dist/css/bootstrap.min.css';  
import 'simplebar-react/dist/simplebar.min.css';
import '../public/assets/css/style.css';
import "./scss/style.scss";
import "./scss/responsive.scss";
import Loader from "./Components/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter basename="/">
        <Routes />
      </BrowserRouter>
    </Suspense>
  )
}

export default App
