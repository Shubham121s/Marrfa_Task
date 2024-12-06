import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Chip,
} from "@mui/material";
import { CircularProgress } from "@mui/material";

const mockResults = [
    {
      id: 1,
      title: "React Basics",
      category: "Programming",
      description: "Learn the fundamentals of React for development.",
      image: "https://source.unsplash.com/300x200/?coding,react",
      tags: ["React", "JavaScript", "Frontend"],
    },
    {
      id: 2,
      title: "Healthy Living",
      category: "Lifestyle",
      description: "Tips and tricks for a healthier lifestyle.",
      image: "https://source.unsplash.com/300x200/?health,lifestyle",
      tags: ["Health", "Wellness", "Lifestyle"],
    },
    {
      id: 3,
      title: "Explore the World",
      category: "Travel",
      description: "Discover amazing destinations worldwide.",
      image: "https://source.unsplash.com/300x200/?travel,adventure",
      tags: ["Travel", "Adventure", "Exploration"],
    },
    {
      id: 4,
      title: "Machine Learning 101",
      category: "Technology",
      description: "An introductory guide to world of machine learning.",
      image: "https://source.unsplash.com/300x200/?technology,machine-learning",
      tags: ["AI", "ML", "Data Science"],
    },
    {
      id: 5,
      title: "Quick Recipes for Busy People",
      category: "Food",
      description: "Delicious recipes you cook in under 30 minutes.",
      image: "https://source.unsplash.com/300x200/?food,cooking",
      tags: ["Food", "Quick Recipes", "Healthy"],
    },
    {
      id: 6,
      title: "Boost Your Productivity",
      category: "Self-Development",
      description: "Learn how to make the most of time every day.",
      image: "https://source.unsplash.com/300x200/?productivity,self-help",
      tags: ["Productivity", "Self-Improvement",],
    },
    {
      id: 7,
      title: "The World of Cryptocurrency",
      category: "Finance",
      description: "Explore the rise of digital currencies and blockchain.",
      image: "https://source.unsplash.com/300x200/?cryptocurrency,finance",
      tags: ["Finance", "Crypto", "Blockchain"],
    },
    {
      id: 8,
      title: "Nature Photography Tips",
      category: "Photography",
      description: "Capture stunning nature shots with these expert tips.",
      image: "https://source.unsplash.com/300x200/?photography,nature",
      tags: ["Photography", "Nature", "Camera"],
    },
  ];
  

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(mockResults);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setLoading(true);
    setTimeout(() => {
      const filteredResults = mockResults.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setResults(filteredResults);
      setLoading(false);
    }, 500);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <TextField
        label="Search Blogs"
        variant="outlined"
        fullWidth
        value={query}
        onChange={handleSearch}
        sx={{
          mb: 3,
          borderRadius: 2,
          transition: "all 0.3s",
          "&:focus-within": {
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          },
        }}
      />
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {results.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                sx={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: "primary.main",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      overflow: "hidden",
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {item.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        sx={{
                          mr: 1,
                          mb: 1,
                          background: "rgba(76, 175, 80, 0.1)",
                          color: "primary.main",
                        }}
                      />
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 2 }}
                    color="primary"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {results.length === 0 && !loading && (
        <Typography
          variant="body1"
          sx={{
            mt: 4,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          No results found. Try searching for something else!
        </Typography>
      )}
    </Box>
  );
};

export default SearchPage;
