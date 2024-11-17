import { Box, Button, Paper, TextField, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 } from "uuid";
import { getData, updateData } from "../../store/redux/actions";

const initState = {
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
};

export default function UpdateMember() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initState);
    const { members, loading } = useSelector((state) => state.members);

    useEffect(() => {
        if (Array.isArray(members) && members.length === 0) {
            dispatch(getData("members"));
        }

        const member = members.find((m) => m.id === id);
        if (member) {
            setFormData(member);
        }
    }, [dispatch, id, members]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        dispatch(updateData({ type: "members", data: formData }));
        navigate(`/members`);
    };

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

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
                Cập Nhật Thành Viên
            </Typography>

            <TextField
                fullWidth
                label="Tên Thành Viên"
                variant="outlined"
                name="name"
                value={formData.name}
                margin="normal"
                onChange={handleInputChange}
                required
            />

            <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                value={formData.email}
                margin="normal"
                onChange={handleInputChange}
                required
            />

            <TextField
                fullWidth
                label="Số Điện Thoại"
                variant="outlined"
                name="phone"
                type="tel"
                value={formData.phone}
                margin="normal"
                onChange={handleInputChange}
            />

            <TextField
                fullWidth
                label="Địa Chỉ"
                variant="outlined"
                name="address"
                value={formData.address}
                margin="normal"
                onChange={handleInputChange}
            />

            <Button
                variant="contained"
                color="primary"
                sx={{ marginRight: 2, textTransform: "none" }}
                onClick={handleSubmit}
            >
                Lưu
            </Button>
            <Button
                variant="outlined"
                color="error"
                margin="normal"
                sx={{ textTransform: "none" }}
                onClick={() => navigate(`/members`)}
            >
                Hủy
            </Button>
        </Box>
    );
}
