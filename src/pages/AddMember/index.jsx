import { Box, Button, Paper, TextField, Typography, Grid } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addData } from "../../store/redux/actions";
const initPost = {
    id: v4(),
    name: "",
    email: "",
    phone: "",
    address: "",
};
export default function AddMember() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: v4(),
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        dispatch(addData({ type: "members", data: formData }));
        setFormData({ ...initPost });
    };

    return (
        <div>
            <Typography
                variant="h3"
                gutterBottom
                sx={{
                    fontSize: "25px",
                    color: "#4A4A4A",
                }}
            >
                Thêm Thành Viên
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

            <div style={{ marginTop: "20px" }}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        marginRight: 2,
                        textTransform: "none",
                    }}
                    onClick={handleSubmit}
                >
                    Lưu
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    sx={{ textTransform: "none" }}
                >
                    Hủy
                </Button>
            </div>
        </div>
    );
}
