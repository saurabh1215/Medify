import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.jpg";
import apple from "../../../assets/apple-logo.jpg";
import arrow from "../../../assets/down-arr.jpg";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SmsForm from "./SmsForm";

export default function DownloadApp() {
  return (
    <Box
      sx={{
        background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)",
        pt: 5,
        pb: 5,
      }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          {/* Left side - Mobile image */}
          <Grid item xs={12} md={5.5}>
            <Box
              component="img"
              src={mobile}
              alt="Medify App Preview"
              width={1}
              height="auto"
              loading="lazy"
            />
          </Grid>

          {/* Right side - Text & Buttons */}
          <Grid item xs={12} md={6.5}>
            <Box
              position="relative"
              pl={{ xs: "36px", md: "50px" }}
              mb={{ xs: 4, md: 0 }}
            >
              {/* Heading */}
              <Typography
                variant="h2"
                mb={2}
                sx={{
                  fontSize: { xs: "28px", md: "40px" },
                  fontWeight: 700,
                }}
              >
                Download the
                <br />
                <Box component="span" color="primary.main">
                  Medify{" "}
                </Box>
                App
              </Typography>

              {/* Arrow */}
              <Box
                component="img"
                src={arrow}
                alt="Arrow pointing to form"
                width={{ xs: 24, md: 40 }}
                position="absolute"
                left={0}
                top={50}
                loading="lazy"
              />

              {/* Sms Form */}
              <SmsForm />

              {/* Download Buttons */}
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, md: 2 }}
                mt={3}
              >
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                  }}
                  size="large"
                  fullWidth={{ xs: true, md: false }}
                  startIcon={
                    <img src={playstore} alt="Google Play" height={24} />
                  }
                  variant="contained"
                  disableElevation
                >
                  Google Play
                </Button>
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                  }}
                  size="large"
                  fullWidth={{ xs: true, md: false }}
                  startIcon={<img src={apple} alt="App Store" height={24} />}
                  variant="contained"
                  disableElevation
                >
                  App Store
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
