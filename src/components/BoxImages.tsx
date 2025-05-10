import { Box, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import type { RoverPhoto } from "../interfaces/RoverPhotoInterface";

export default function BoxImages() {
    const itemsPerPage: number = 12;

    const [data, setData] = useState<RoverPhoto[]>([]);
    const [visibleCount, setVisibleCount] = useState<number>(itemsPerPage);

    const handleShowMore = (): void => {
        setVisibleCount((prev: number) => prev + itemsPerPage);
    };

    const handleDelete = (imageToDelete: RoverPhoto): void => {
        setData((prevItems) => prevItems.filter((image) => image !== imageToDelete));
    };

    useEffect(() => {
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
            .then((response) => {
                setData(response.data.photos);
            })
            .catch((error) => {
                console.error("Error al obtener los datos:", error);
            });
    }, []);


    return (
        <Grid container spacing={5} sx={{ p: 5 }}>

            {
                data.slice(0, visibleCount).map((item: RoverPhoto) => (
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
                                <Button onClick={() => handleDelete(item)} sx={{
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
                ))
            }


            <Grid size={12}>
                <Box
                    sx={{
                        width: "100%",
                        height: "70px",
                        // backgroundColor: "#2b2b2b",
                        display: "flex",
                        justifyContent: "center",
                    }}>
                    <Button variant="contained" onClick={handleShowMore} sx={{
                        backgroundColor: "#2b2b2b",
                        color: "#fff",
                        "&:hover": {
                            backgroundColor: "#000000",
                        },
                    }}>
                        <Typography variant="h6">
                            Más imágenes
                        </Typography>
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}