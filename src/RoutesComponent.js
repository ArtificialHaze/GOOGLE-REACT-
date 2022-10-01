import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const RoutesComponent = () => {
  return (
    <div style={{ padding: "4px" }}>
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate to={"/search"} replace />}
        ></Route>
        <Route exact path="/search" element={<Results />}></Route>
        <Route path="/images" element={<Results />}></Route>
        <Route path="/news" element={<Results />}></Route>
        <Route path="/videos" element={<Results />}></Route>
      </Routes>
    </div>
  );
};

export default RoutesComponent;
