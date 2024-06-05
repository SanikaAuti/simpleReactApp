import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api';
import { Container, Grid, Card, CardContent, Typography, TextField } from '@mui/material';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await fetchPosts();
      setPosts(postsData);
    };
    getPosts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.weather.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.base.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <TextField
        label="Search Posts"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Grid container spacing={3}>
        {filteredPosts.map(post => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {post.weather}
                </Typography>
                <Typography variant="body2">
                  {post.base}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;
