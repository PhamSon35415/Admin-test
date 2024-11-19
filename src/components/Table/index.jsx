import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Box,
    AppBar,
    Toolbar,
    IconButton,
    TableSortLabel,
} from "@mui/material";
import { memo, useState } from "react";
import PaginationComponent from "../Pagination";

export default function FCommonTable({
    title,
    rows,
    columns,
    onDelete,
    maxWidth,
    onUpdate,
}) {
    const [page, setPage] = useState(1);
    const rowsPerPage = 6;
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("");
    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const sortRows = (rows) => {
        const rowsCopy = [...rows];
        return rowsCopy.sort((a, b) => {
            if (orderBy) {
                const aValue = a[orderBy];
                const bValue = b[orderBy];
                if (aValue < bValue) {
                    return order === "asc" ? -1 : 1;
                }
                if (aValue > bValue) {
                    return order === "asc" ? 1 : -1;
                }
            }
            return 0;
        });
    };

    const sortedRows = sortRows(rows);
    const currentRows = sortedRows.slice(
        (page - 1) * rowsPerPage,
        page * rowsPerPage
    );

    return (
        <Box>
            <Typography
                variant="h3"
                gutterBottom
                sx={{
                    fontSize: "25px",
                    color: "#4A4A4A",
                }}
            >
                {title}
            </Typography>

            <TableContainer
                component={Paper}
                sx={{
                    maxWidth: maxWidth,
                    margin: "0 auto",
                    height: "450px",
                    overflow: "hidden",
                }}
            >
                <Table aria-label="common table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#1976d2" }}>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.name}
                                    width={column?.width}
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "1rem",
                                        color: "#fff",
                                        textAlign: column.align || "left",
                                    }}
                                >
                                    <TableSortLabel
                                        active={orderBy === column.name}
                                        direction={
                                            orderBy === column.name
                                                ? order
                                                : "asc"
                                        }
                                        onClick={() =>
                                            handleRequestSort(column.name)
                                        }
                                    >
                                        {column.text}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentRows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    "&:nth-of-type(even)": {
                                        backgroundColor: "#f5f5f5",
                                    },
                                    "&:hover": {
                                        backgroundColor: "#e0f7fa",
                                    },
                                }}
                            >
                                {columns.map((column) => {
                                    if (column.name === "action") {
                                        return (
                                            <TableCell
                                                key={`${row.id}-${column.name}`}
                                                sx={{ textAlign: "center" }}
                                            >
                                                <Button
                                                    key={`edit-${row.id}`}
                                                    variant="contained"
                                                    color="primary"
                                                    size="small"
                                                    sx={{
                                                        mr: 1,
                                                        textTransform: "none",
                                                    }}
                                                    onClick={() =>
                                                        onUpdate(row)
                                                    }
                                                >
                                                    Chỉnh Sửa
                                                </Button>
                                                <Button
                                                    key={`delete-${row.id}`}
                                                    variant="contained"
                                                    color="error"
                                                    size="small"
                                                    sx={{
                                                        textTransform: "none",
                                                    }}
                                                    onClick={() =>
                                                        onDelete(row.id)
                                                    }
                                                >
                                                    Xóa
                                                </Button>
                                            </TableCell>
                                        );
                                    }
                                    return (
                                        <TableCell
                                            key={`${row.id}-${column.name}`}
                                            sx={{
                                                textAlign:
                                                    column.align || "left",
                                                fontSize: "0.95rem",
                                                color: "#555",
                                            }}
                                        >
                                            {row[column.name]}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <PaginationComponent
                totalItems={rows.length}
                itemsPerPage={rowsPerPage}
                currentPage={page}
                onPageChange={(newPage) => setPage(newPage)}
                color="primary"
            />
        </Box>
    );
}
