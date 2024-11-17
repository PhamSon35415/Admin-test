import { Box, Pagination, Stack, Typography } from "@mui/material";

export default function PaginationComponent({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
    color = "primary",
    showFirstLastButtons = true,
}) {
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "16px 0",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Stack spacing={2} alignItems="center">
                <Typography
                    variant="body2"
                    sx={{ fontSize: "0.875rem", color: "#555" }}
                >
                    Trang {currentPage} / {pageCount}
                </Typography>
                <Pagination
                    count={pageCount}
                    page={currentPage}
                    onChange={(event, page) => onPageChange(page)}
                    color={color}
                    showFirstButton={showFirstLastButtons}
                    showLastButton={showFirstLastButtons}
                    size="medium"
                    sx={{
                        "& .MuiPaginationItem-root": {
                            fontWeight: "bold",
                        },
                        "& .Mui-selected": {
                            backgroundColor: `${color}.main`,
                            color: "#fff",
                        },
                    }}
                />
            </Stack>
        </Box>
    );
}
