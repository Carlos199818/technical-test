import { Box, Grid } from "@mui/material";




export default function BoxImages() {
    

    return (
        <Grid container spacing={2} sx={{ p: 5 }}>
          <Grid size={4}>
            <Box
              sx={{
                width: "100%",
                height: "480px",
                backgroundColor: "#2b2b2b",
              }}>

            </Box>
          </Grid>
          <Grid size={4}>
            <Box
              sx={{
                width: "100%",
                height: "480px",
                backgroundColor: "#2b2b2b",
              }}>

            </Box>
          </Grid>
          <Grid size={4}>
            <Box
              sx={{
                width: "100%",
                height: "480px",
                backgroundColor: "#2b2b2b",
              }}>

            </Box>
          </Grid>
        </Grid>
    )
}