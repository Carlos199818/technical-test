// import reactLogo from './assets/react.svg'

import { AppBar, Typography } from "@mui/material"

function App() {

  return (
    <AppBar
      sx={{
        backgroundColor: "#2b2b2b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "240px",
      }}
    >
      <Typography>
        Welcome to Mars
      </Typography>

    </AppBar>
  )
}

export default App
