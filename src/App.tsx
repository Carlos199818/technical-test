// import reactLogo from './assets/react.svg'

import { Box } from "@mui/material"
import { BoxImages, Navbar } from "./components"

function App() {

  const navHeight = 240;

  return (
    <Box sx={{
      display: "flex",
      height: "100vh",

    }}>

      <Box>
        <Navbar navHeight={navHeight} />
      </Box>

      <Box
        sx={{
          width: "100%",
          mt: `${navHeight}px`,
        }}
      >
        <BoxImages />
      </Box>
    </Box>
  )
}

export default App
