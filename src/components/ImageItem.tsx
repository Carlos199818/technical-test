import { Box, Button, Grid, Typography } from "@mui/material";
import type { RoverPhoto } from "../interfaces/RoverPhotoInterface";


export default function ImageItem({ item, onDelete }: { item: RoverPhoto; onDelete: (imageToDelete: RoverPhoto) => void }) {


    return (
        <Grid size={4} key={item.id}>
            <Box
                sx={{
                    width: "100%",
                    height: "480px",
                    backgroundColor: "#2b2b2b",
                }}>
                <Box sx={{
                    height: "10%",
                }}>
                    <Typography variant="h6" sx={{
                        color: "#fff",
                        textAlign: "center",
                        fontWeight: "bold",
                        paddingTop: "10px",
                    }}>
                        {item.camera.full_name}
                    </Typography>
                </Box>
                <img
                    src={item.img_src}
                    alt="Mars"
                    style={{
                        width: "100%",
                        height: "80%",
                        objectFit: "cover",
                        borderRadius: "10px",
                    }}
                />
                <Box sx={{
                    height: "10%",
                }}>
                    <Button onClick={() => onDelete(item)} sx={{
                        backgroundColor: "#2b2b2b",
                        color: "#f00",
                        "&:hover": {
                            backgroundColor: "#000000",
                        },
                    }}>
                        Eliminar
                    </Button>
                </Box>
            </Box>

        </Grid>
    )
}