import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import React Quill styles
import "./style.css";

import {
    TextField,
    Button,
    MenuItem,
    FormControl,
    Select,
    InputLabel,
    Typography,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { addData } from "../../store/redux/actions";
import { v4 } from "uuid";

const categories = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Health" },
    { id: 3, name: "Lifestyle" },
];
const initPost = {
    id: v4(),
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    author_id: 1,
    category_id: 1,
    status: "1",
};

const AddNewPost = () => {
    const dispatch = useDispatch();

    const [postData, setPostData] = useState({ ...initPost });

    const handleEditorChange = (value) => {
        setPostData({ ...postData, content: value });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPostData({ ...postData, [name]: value });
    };

    const handleSubmit = () => {
        dispatch(addData({ type: "posts", data: postData }));
        console.log(initPost);

        setPostData({ ...initPost, id: v4() });
        console.log(postData);
    };

    return (
        <div style={{ margin: "auto" }}>
            <Typography
                variant="h3"
                gutterBottom
                sx={{
                    fontSize: "25px",
                    color: "#4A4A4A",
                }}
            >
                Thêm Bài Viết Mới
            </Typography>

            <TextField
                label="Tiêu đề"
                name="title"
                value={postData.title}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
            />

            <p>Content</p>
            <div style={{ marginBottom: "20px" }}>
                <ReactQuill
                    style={{ height: "200px" }}
                    value={postData.content}
                    onChange={handleEditorChange}
                    modules={{
                        toolbar: [
                            [{ header: "1" }, { header: "2" }, { font: [] }],
                            [{ list: "ordered" }, { list: "bullet" }],
                            [{ align: [] }],
                            ["bold", "italic", "underline"],
                            ["link", "image"],
                            [{ color: [] }, { background: [] }],
                            ["blockquote", "code-block"],
                        ],
                    }}
                />
            </div>
            <div style={{ display: "flex", gap: "10px", marginTop: "50px" }}>
                <TextField
                    label="Slug"
                    name="slug"
                    value={postData.slug}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Danh mục</InputLabel>
                    <Select
                        label="Danh mục"
                        name="category_id"
                        value={postData.category_id}
                        onChange={handleInputChange}
                    >
                        {categories.map((category) => (
                            <MenuItem key={category.id} value={category.id}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <TextField
                label="Tóm tắt"
                name="excerpt"
                value={postData.excerpt}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                multiline
                rows={3}
            />

            <FormControl fullWidth margin="normal">
                <InputLabel>Trạng thái</InputLabel>
                <Select
                    label="Trạng thái"
                    name="status"
                    value={postData.status}
                    onChange={handleInputChange}
                >
                    <MenuItem value="1">Đã đăng</MenuItem>
                    <MenuItem value="0">Nháp</MenuItem>
                </Select>
            </FormControl>

            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Lưu bài viết
            </Button>
        </div>
    );
};

export default AddNewPost;
