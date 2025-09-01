import { Box, Container, Typography, Stack } from "@mui/material";
import BlogCard from "./BlogCard";

export default function Blogs() {
  return (
    <Box py={6}>
      <Container>
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Blog & News
        </Typography>
        <Typography textAlign="center" variant="h2" mb={2}>
          Read Our Latest News
        </Typography>

        {/* Row of cards */}
        <Stack direction="row" spacing={3} justifyContent="center">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Stack>
      </Container>
    </Box>
  );
}
