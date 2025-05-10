import { Box, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

// const API_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY";

interface RoverPhoto {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}

export default function BoxImages() {
    const itemsPerPage: number = 12;

    const [data, setData] = useState<RoverPhoto[]>([]);
    const [visibleCount, setVisibleCount] = useState<number>(itemsPerPage);

    const handleShowMore = (): void => {
        setVisibleCount((prev: number) => prev + itemsPerPage);
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
                            <img
                                src={item.img_src}
                                alt="Mars"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                }}
                            />
                        </Box>
                    </Grid>
                ))
            }

            {/* <Grid size={4}>
                <Box
                    sx={{
                        width: "100%",
                        height: "480px",
                        backgroundColor: "#2b2b2b",
                    }}>
                    <img
                        src={data[0]?.img_src}
                        alt="Mars"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }}
                    />
                </Box>
            </Grid> */}
            {/* <Grid size={4}>
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
            </Grid> */}
        </Grid>
    )
}