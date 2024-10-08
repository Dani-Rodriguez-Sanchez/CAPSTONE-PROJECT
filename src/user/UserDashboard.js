import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BlogNavbar from "../components/BlogNavbar";

const UserDashboard = () => {
  const { user } = useSelector((state) => state.userProfile);

  return (
    <>
      <BlogNavbar />
      <Box sx={{ bgcolor: "white", p: 3 }}>
        <h1>Dashboard</h1>
        <p>Complete name: {user && user.name}</p>
        <p>E-mail: {user && user.email}</p>
        <p>Role: {user && user.role}</p>
      </Box>
    </>
  );
};

export default UserDashboard;
