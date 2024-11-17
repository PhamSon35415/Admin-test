import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import FCommonTable from "../../components/Table";
import { getData, deleteData, updateData } from "../../store/redux/actions";
import { useNavigate } from "react-router-dom";

function PostList() {
    const dispatch = useDispatch();
    const { posts, loading } = useSelector((state) => state.posts);

    const columns = [
        { text: "Id", name: "id" },
        { text: "Title", name: "title" },
        { text: "Slug", name: "slug" },
        { text: "Category", name: "category_id" },
        { text: "Actions", name: "action" },
    ];
    useEffect(() => {
        dispatch(getData("posts"));
    }, [dispatch]);

    const handleAdd = () => {
        const newData = { title: "New Post", content: "Post content" };
        dispatch(addData({ type: "posts", data: newData }));
    };

    const onDelete = (id) => {
        dispatch(deleteData({ type: "posts", id }));
    };

    const navigate = useNavigate();
    const onEdit = (row) => {
        navigate(`/update-post/${row.id}`);
    };
    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box>
            <FCommonTable
                title="Quản lý bài viết"
                columns={columns}
                rows={posts}
                loading={loading}
                onUpdate={onEdit}
                onDelete={onDelete}
            />
        </Box>
    );
}

export default PostList;
