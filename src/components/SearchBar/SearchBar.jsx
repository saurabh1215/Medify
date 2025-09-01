import { Stack, TextField, Button } from "@mui/material";
import { useState, useMemo, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ list, filterList }) {
  const [inputText, setInputText] = useState("");

  // Memoizing the filtered list
  const filteredList = useMemo(() => {
    if (!inputText.trim()) return list;
    return list.filter((item) =>
      item["Hospital Name"]
        .toLowerCase()
        .includes(inputText.trim().toLowerCase())
    );
  }, [inputText, list]);

  // Live search → updates parent as soon as user types
  useEffect(() => {
    filterList(filteredList);
  }, [filteredList, filterList]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Stack direction="row" spacing={2}>
        <TextField
          type="text"
          label="Search By Hospital"
          variant="outlined"
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          inputProps={{ maxLength: 100 }} // Limiting input to 100 characters
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ py: "15px", px: 8, flexShrink: 0 }}
          disableElevation
        >
          Search
        </Button>
      </Stack>
    </form>
  );
}
