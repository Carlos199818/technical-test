// import reactLogo from './assets/react.svg'

import { Box, Typography } from "@mui/material"
import { Navbar } from "./components"

function App() {

  return (
    <Box sx={{
      display: "block",
    }}>
      
      <Box>
        <Navbar />
      </Box>

      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography>Holaaaaaaaaaaaaa</Typography>
      </Box>
    </Box>
  )
}

export default App
