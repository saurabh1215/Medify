import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo.jpg";
import fb from "../../assets/fb.jpg";
import pinterest from "../../assets/pinterest.jpg";
import twitter from "../../assets/twitter.jpg";
import yt from "../../assets/yt.jpg";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <Box bgcolor="secondary.main" pb={3} pt={6}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Logo + Socials */}
          <Grid item xs={12} md={4.5}>
            <Stack alignItems="flex-start" justifyContent="space-between" height={1}>
              <Box
                component="img"
                src={logo}
                height={36}
                alt="Medify"
                mb={2}
              />
              <Stack direction="row" spacing={1.5}>
                <Box component="img" src={fb} height={36} alt="Facebook" />
                <Box component="img" src={twitter} height={36} alt="Twitter" />
                <Box component="img" src={yt} height={36} alt="YouTube" />
                <Box component="img" src={pinterest} height={36} alt="Pinterest" />
              </Stack>
            </Stack>
          </Grid>

          {/* Footer Links Section 1 */}
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>

          {/* Footer Links Section 2 */}
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>Orthology</FooterLink>
              <FooterLink>Neurology</FooterLink>
              <FooterLink>Dental Care</FooterLink>
              <FooterLink>Opthalmology</FooterLink>
              <FooterLink>Cardiology</FooterLink>
            </Stack>
          </Grid>

          {/* Footer Links Section 3 (optional duplicate or replace) */}
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          © 2025  All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}
