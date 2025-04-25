import React from 'react';
import { Container, Typography, Box, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { EmojiEvents } from '@mui/icons-material';

const achievements = [
  {
    title: "Qualified for Smart India Hackathon 2024",
    description: "Ranked in the top 30 among 500+ teams by excelling through rigorous internal selection rounds, showcasing strong problem-solving, strategic thinking, and teamwork.",
    date: "April 2024"
  },
  {
    title: "2nd Prize – SRM College Tech Innovation Challenge",
    description: "Won 2nd place in a competition organized by SRM College for presenting a web app solving real-world problems with practical implementation.",
    date: "February 2024"
  },
  {
    title: "Winner – Inter-College Tech Challenge 2023",
    description: "Achieved 1st place among 60+ teams by building an impactful project under the theme 'Code For Change', recognized for innovation and execution.",
    date: "September 2023"
  },
  {
    title: "Silver Medalist – Science & Math Olympiads (School Level)",
    description: "Awarded silver medals in both Science and Mathematics Olympiads during school years for exceptional analytical and logical abilities.",
    date: "2018"
  }
];

const Achievements = () => {
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
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2
            }}
          >
            Achievements
            <EmojiEvents sx={{ fontSize: 40, color: '#ffd700' }} />
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {achievements.map((achievement, index) => (
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
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Typography variant="h5" component="h2" fontWeight={600} color="primary">
                        {achievement.title}
                      </Typography>
                      <Chip 
                        label={achievement.date}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ 
                        lineHeight: 1.6,
                        textAlign: 'justify'
                      }}
                    >
                      {achievement.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Achievements; 