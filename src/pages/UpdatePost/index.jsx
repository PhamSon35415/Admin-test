import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import React Quill styles

import {
    TextField,
    Button,
    MenuItem,
    FormControl,
    Select,
    InputLabel,
    Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { updateData, getData } from "../../store/redux/actions";
import { useParams, useNavigate } from "react-router-dom";

const categories = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Health" },
    { id: 3, name: "Lifestyle" },
];

const UpdatePost = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [postData, setPostData] = useState({
        title: "",
        slug: "",
        content: "",
        excerpt: "",
        category_id: 1,
        status: "1",
    });

    const { posts, loading } = useSelector((state) => state.posts);

    useEffect(() => {
        if (!posts || posts.length === 0) {
            dispatch(getData("posts"));
        }

        const postToEdit = posts.find((post) => post.id === id);
        if (postToEdit) {
            setPostData(postToEdit);
        }
    }, [dispatch, id, posts]);

    const handleEditorChange = (value) => {
        setPostData({ ...postData, content: value });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPostData({ ...postData, [name]: value });
    };

    const handleSubmit = () => {
        dispatch(updateData({ type: "posts", id: id, data: postData }));
        navigate("/posts");
    };

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

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
                Cập Nhật Bài Viết
            </Typography>

            <TextField
                label="Tiêu đề"
                name="title"
                value={postData.title}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
            />

            <p>Nội dung</p>
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

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "40px",
                    marginBottom: "30px",
                }}
            >
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

export default UpdatePost;
