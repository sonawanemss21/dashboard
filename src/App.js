import "./App.css";
import React, { Fragment, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Images = React.lazy(() => import("./pages/Images"));
const Checkboxes = React.lazy(() => import("./pages/Checkboxes"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" exact element={<Images />} />
          <Route path="/images" exact element={<Images />} />
          <Route path="/checkboxes" exact element={<Checkboxes />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
