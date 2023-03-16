import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Loading = () => {
  return (
    <Box
      data-testid="loading"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
