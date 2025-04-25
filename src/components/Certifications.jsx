import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardActions, Button, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { Launch } from '@mui/icons-material';

const certifications = [
  {
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning AI",
    date: "September 2024",
    link: "https://coursera.org/verify/PEP882D5EHGN"
  },
  {
    title: "Prompt Engineering for ChatGPT",
    issuer: "Vanderbilt University",
    date: "August 2024",
    link: "https://coursera.org/verify/QJC7FD4GRY2F"
  },
  {
    title: "Mastering Data Structures & Algorithms using C and C++",
    issuer: "Udemy",
    date: "May 2024",
    link: "https://www.udemy.com/certificate/UC-6ddbbd8d-24fb-49ad-a6e3-3132c8deb58a/"
  },
  {
    title: "MERN Stack",
    issuer: "Cipher Schools",
    date: "April 2024",
    link: "https://www.cipherschools.com"
  }
];

const Certifications = () => {
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
      <Container maxWidth="md">
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
            Certifications
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card 
                  elevation={2}
                  sx={{
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom fontWeight={600} color="primary">
                      {cert.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      {cert.issuer}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Issued: {cert.date}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      startIcon={<Launch />}
                      variant="contained"
                      color="primary"
                      size="small"
                      component={Link}
                      href={cert.link}
                      target="_blank"
                    >
                      View Certificate
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Certifications; 