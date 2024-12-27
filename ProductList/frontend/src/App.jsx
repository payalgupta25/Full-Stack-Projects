
// import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import { useProductStore } from "./store/product.js";

// function App() {
  

//   return (
//     <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
// 			<Navbar />
// 			<Routes>
// 				<Route path='/' element={<HomePage />} />
// 				<Route path='/create' element={<CreatePage />} />
// 			</Routes>
// 		</Box>
//   )
// }

// export default App

import { useState, useEffect } from "react";

function App() {
  const [bgColor, setBgColor] = useState("gray.100");

  const createProduct = useProductStore((state) => state.createProduct);
  useEffect(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setBgColor(isDarkMode ? "gray.900" : "gray.100");
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: bgColor }}>
      <Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage createProduct={createProduct}/>}/>
			</Routes>
    </div>
  );
}

export default App;

