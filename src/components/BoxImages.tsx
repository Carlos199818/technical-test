import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import type { RoverPhoto } from "../interfaces/RoverPhotoInterface";
import axiosInstance from "../api/client";
import ImageItem from "./ImageItem";

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
        axiosInstance("/photos?sol=1000&api_key=DEMO_KEY")
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
                    <ImageItem
                        key={item.id}
                        item={item}
                        onDelete={handleDelete} 
                    />
                ))
            }


            <Grid size={12}>
                <Box
                    sx={{
                        width: "100%",
                        height: "70px",
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