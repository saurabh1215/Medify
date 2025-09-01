// src/components/HospitalCard/HospitalCard.jsx
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

export default function HospitalCard({ hospital, onBook }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h3">{hospital["Hospital Name"]}</Typography>
          <Button variant="contained" onClick={onBook}>
            Book FREE Center Visit
          </Button>
        </Stack>

        <Stack spacing={0.5} mt={2}>
          <Typography>
            <strong>Address:</strong> {hospital.Address}
          </Typography>
          <Typography>
            <strong>City:</strong> {hospital.City}
          </Typography>
          <Typography>
            <strong>State:</strong> {hospital.State}
          </Typography>
          <Typography>
            <strong>ZIP Code:</strong> {hospital["ZIP Code"]}
          </Typography>
          <Typography>
            <strong>Overall Rating:</strong> {hospital["Hospital overall rating"]}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
