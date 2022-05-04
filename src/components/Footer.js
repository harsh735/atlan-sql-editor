import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "../App.css";
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <Box
            className="footer-main"
            px={{ xs: 5, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            color="white"
            height="5rem"
            style={{ marginTop: "25rem" }}
        >
            <Container maxWidth="sm">
                <Box style={{ textAlign: "center", fontSize: "1.5rem" }} pt={{ xs: 0, sm: 0 }} pb={{ xs: 0, sm: 9 }} my={{ sm: -6 }} >
                    Made by: Harshendra Singh
                </Box>
                <Grid container spacing={5}>
                    <Grid flex={{ sm: 5 }} item style={{ textAlign: "center" }}>
                        <Box >
                            <Link target="_blank" href="https://www.github.com/harsh735" style={{ textDecoration: "none", color: "white" }}><GitHubIcon style={{ fontSize: 45 }} /></Link>
                        </Box>
                    </Grid>
                    <Grid flex={{ sm: 5 }} item style={{ textAlign: "center" }}>
                        <Box >
                            <Link target="_blank" href="https://www.linkedin.com/in/harsh735" style={{ textDecoration: "none", color: "white" }}><LinkedInIcon style={{ fontSize: 45 }} /></Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}