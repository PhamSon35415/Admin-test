// src/pages/MemberList.js
import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Typography,
    Box,
} from "@mui/material";
import FCommonTable from "../../components/Table";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getData } from "../../store/redux/actions";
import { Link, useNavigate } from "react-router-dom";

function MemberList() {
    const columns = [
        {
            text: "Id",
            name: "id",
        },
        {
            text: "Email",
            name: "email",
        },
        {
            text: "Fullname",
            name: "name",
        },

        {
            text: "Address",
            name: "address",
        },
        {
            text: "",
            name: "action",
        },
    ];
    const dispatch = useDispatch();
    const { members, loading } = useSelector((state) => state.members);
    useEffect(() => {
        dispatch(getData("members"));
    }, [dispatch]);
    const onDelete = (id) => {
        console.log(id);

        dispatch(deleteData({ type: "members", id }));
    };
    const navigate = useNavigate();
    const onEdit = (row) => {
        console.log(row);

        navigate(`/update-member/${row.id}`);
    };
    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box>
            <FCommonTable
                title={"Quản lý nhân viên"}
                columns={columns}
                rows={members}
                onUpdate={onEdit}
                onDelete={onDelete}
            />
            <Button
                component={Link}
                to={"/add-member"}
                color="success"
                variant="contained"
            >
                Add new
            </Button>
        </Box>
    );
}

export default MemberList;
