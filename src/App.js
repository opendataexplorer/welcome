import { Routes, Route } from "react-router-dom";

import PageLayout from "./layout/PageLayout";
import NavBar from "./navigation/NavBar";

/* eslint-disable import/no-webpack-loader-syntax */
import JoinUs from "!babel-loader!mdx-loader!./pages/join-us.mdx";
import Home from "!babel-loader!mdx-loader!./pages/home.mdx";
import About from "!babel-loader!mdx-loader!./pages/about.mdx";
import Hero from "./Hero";

function App() {
  return (
    <div className="m-6">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <Hero />
              <Home />
            </PageLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PageLayout>
              <About />
            </PageLayout>
          }
        />
        <Route
          path="/joinus"
          element={
            <PageLayout>
              <JoinUs />
            </PageLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
