import { Route, Routes } from "react-router-dom";
import React from "react";
import TestPage from "../screens/TestPage";
import HomePage from "../screens/HomePage";
import ErrorPage from "../screens/ErrorPage";
import { homePath } from "..";

export default function AppRouter() {
  return (
    <Routes>
      <Route path={homePath} element={<HomePage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}
