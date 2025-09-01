import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";

export default function SmsForm() {
  return (
    <Box mb={5}>
      <Typography fontWeight={600} mb={1}>
        Get the link to download the app
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
        onSubmit={(e) => {
          e.preventDefault();
          // ✅ add your SMS sending logic here
        }}
      >
        <TextField
          fullWidth
          required
          placeholder="Enter phone number"
          variant="outlined"
          type="tel"
          inputProps={{
            maxLength: 10, // since it's Indian numbers after +91
          }}
          sx={{
            bgcolor: "#fff",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#F0F0F0",
              },
              "&:hover fieldset": {
                borderColor: "#1976d2",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1976d2",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          size="large"
          variant="contained"
          disableElevation
          sx={{ px: 4 }}
        >
          Send SMS
        </Button>
      </Box>
    </Box>
  );
}
