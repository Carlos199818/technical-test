import { AppBar, Grid, Typography } from "@mui/material"


export default function Navbar({ navHeight }: { navHeight: number }) {

    return (
        <AppBar
            sx={{
                backgroundColor: "#2b2b2b",
                height: `${navHeight}px`,
            }}
        >
            <Grid container sx={{ p: 5 }}>

                <Grid size={2}>
                    <Typography>
                        Bienvenidos a Marte
                    </Typography>
                </Grid>
                <Grid size={8} sx={{ textAlign: "center" }}>
                    <Typography variant="h4">
                        Ven y disfruta de la experiencia de conocer el planeta rojo desde la comodidad de tu hogar
                    </Typography>
                </Grid>
                <Grid size={2} sx={{ textAlign: "right" }}>
                    <Typography>
                        Welcome to Mars
                    </Typography>
                </Grid>

            </Grid>

        </AppBar>
    )
} 