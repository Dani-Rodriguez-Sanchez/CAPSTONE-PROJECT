import React from "react";
import { Box, Container, Grid } from "@mui/material";
import PostCard from "../components/PostCard";
import BlogNavbar from "../components/BlogNavbar";
import BlogFooter from "../components/BlogFooter";

const Home = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
        <BlogNavbar />
        <Container sx={{ pt: 5, pb: 5, minHeight: "83vh" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={4} md={4}></Grid>
            </Grid>
          </Box>
        </Container>
        <BlogFooter />
      </Box>
    </>
  );
};

export default Home;
