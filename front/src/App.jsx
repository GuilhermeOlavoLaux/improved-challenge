import { Fragment } from "react";
import './index.css'
import './assets/css/index.css'
import AppRoutes from "./routes/AppRoutes";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
