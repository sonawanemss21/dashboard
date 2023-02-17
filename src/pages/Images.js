import { Fragment, useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const drawerWidth = 240;

const Images = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.jikan.moe/v4/characters?page=0&limit=15&q=&order_by=favorites&sort=desc"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <h1>ANIME IMAGES</h1>
          {loading && <h4>Loading images please wait ....</h4>}
          <Grid container spacing={3}>
            {data.map((dataImage, index) => {
              return (
                <Grid key={index} item xs={12} sm={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image={dataImage.images.jpg.image_url}
                        alt="anime"
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Images;
