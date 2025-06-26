import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch } from '@mui/icons-material';

const projects = [
  {
    title: "DevAI – AI Image Generator",
    description: "Built a full-featured AI art platform with user registration, image generation via Hugging Face models, post sharing, and downloads.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Hugging Face"],
    image: "/project1.jpg",
    github: "https://github.com/devp128/DevAI",
    demo: "https://devai-9gwb.onrender.com/"
  },
  {
    title: "ConQuest – Learn Indian Constitution",
    description: "An educational platform that makes constitutional literacy engaging through card games, quizzes, and an AI chatbot.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Unity/Three.js"],
    image: "/project2.jpg",
    github: "https://github.com/devp128/ConxQuest-Edu",
    demo: "https://conxquest.vercel.app/"
  },
  {
    title: "PennyPilot – Expense Tracker",
    description: "A modern, full-stack expense tracker to manage your spending, visualize trends, and stay on budget. Features include authentication, category charts, responsive UI, and seamless expense management.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Recharts"],
    image: "/dashboard.jpg", // Replace with your actual image path
    github: "https://github.com/devp128/PennyPilot",
    demo: "https://penny-pilot-three.vercel.app/"
  },
  {
    title: "To-Do App with Redux Toolkit",
    description: "Simple React-based productivity tool with CRUD features and persistent state using Redux Toolkit.",
    techStack: ["React", "Redux Toolkit", "Vite"],
    image: "/project3.jpg",
    github: "https://github.com/devp128/To-Do",
    demo: "https://your-todo-app.com"
  },

];


const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      pt: { xs: 10, md: 12 },
      pb: 8,
      backgroundColor: '#f5f5f5'
    }}>
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              mb: 6,
              textAlign: 'center',
              color: '#1a237e',
              fontWeight: 700
            }}
          >
            Projects
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants}>
                  <Card 
                    elevation={2}
                    sx={{
                      display: 'flex',
                      height: '100%',
                      minHeight: 280,
                      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: '40%',
                        objectFit: 'cover',
                        borderRadius: '4px 0 0 4px'
                      }}
                      image={project.image}
                      alt={project.title}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" component="h2" gutterBottom fontWeight={600} color="primary">
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                          {project.techStack.map((tech, idx) => (
                            <Chip
                              key={idx}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(26, 35, 126, 0.08)',
                                color: '#1a237e',
                                fontWeight: 500
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button 
                          startIcon={<GitHub />}
                          variant="outlined" 
                          color="primary"
                          size="small"
                          component={Link}
                          href={project.github}
                          target="_blank"
                          sx={{ mr: 1 }}
                        >
                          Code
                        </Button>
                        <Button
                          startIcon={<Launch />}
                          variant="contained"
                          color="primary"
                          size="small"
                          component={Link}
                          href={project.demo}
                          target="_blank"
                        >
                          Live Demo
                        </Button>
                      </CardActions>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 