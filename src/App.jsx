import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Stack } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Home from "./pages/Home";
import Convert from "./pages/Convert";
import "./App.css";
import {NavBar} from "./component/NavBar";
import Stock from "./pages/Stock";

const App = () => {
  return (
    <Router>
      <Stack
        // className="background-container"
        bgImage={`url('/assets/BgImage.png')`}
        height={"100vh"}
        width={"100vw"}
        bgSize={"cover"}
        position={"relative"}
        borderBottom="2px solid transparent"
      >
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="convert" element={<Convert />} />
          <Route path="stock" element={<Stock />} />
        </Routes>
      </Stack>
    </Router>
  );
};

export default App;
