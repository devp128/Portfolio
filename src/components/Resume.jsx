import React from 'react';
import { Container, Typography, Box, Paper, Grid, Chip, List, ListItem, ListItemText, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { School, Work, Code, Download } from '@mui/icons-material';

const resumeData = {
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Private Engineering College (Affiliated with LPU)",
      year: "2022 – 2026",
      details: [
        "Minors in Full Stack Development and DevOps",
        "Relevant Coursework: Data Structures, Web Development, System Design, AI/ML, Cloud Computing"
      ]
    },
    {
      degree: "Class XII (ICSE)",
      institution: "Rishi Public School",
      year: "2020 – 2022",
      details: [
        "Studied Science stream with Computer Applications",
        "Explored Java and OOP concepts",
        "Participated in inter-school coding competitions"
      ]
    }
  ]
  ,
  experience: [
    {
      role: "Web Developer (Freelance & Academic Projects)",
      company: "Personal Projects & Collaborations",
      year: "2023 – Present",
      details: [
        "Developed full-stack applications using MERN stack",
        "Integrated AI models for image generation (DevAI)",
        "Built gamified learning platform (ConQuest)"
      ]
    }
  ],
  skills: [
    "Languages: JavaScript, C++, Java",
    "Frontend: React, HTML, CSS, Redux Toolkit",
    "Backend: Node.js, Express, MongoDB, SQL",
    "Tools: Git, GitHub, Power BI, Postman",
    "Other: System Design, Linux, REST API, AI/ML basics"
  ]
};

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleDownload = () => {
    // The PDF file should be placed in the public folder
    const resumeUrl = '/Dev_Resume.pdf';
    window.open(resumeUrl, '_blank');
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
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 4,
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2
          }}>
            <Typography variant="h2" 
              component="h1" 
              sx={{ 
                color: '#1a237e',
                fontWeight: 700
              }}
            >
              Resume
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Download />}
              onClick={handleDownload}
              sx={{
                py: 1.5,
                px: 3,
                borderRadius: 2,
                fontWeight: 600,
                boxShadow: '0 4px 14px rgba(26, 35, 126, 0.2)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(26, 35, 126, 0.3)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              Download CV
            </Button>
          </Box>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <School sx={{ color: '#1a237e', mr: 2, fontSize: 30 }} />
                <Typography variant="h4" color="primary" fontWeight={600}>
                  Education
                </Typography>
              </Box>
              {resumeData.education.map((edu, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="h6" fontWeight={600}>
                    {edu.degree}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {edu.institution}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    {edu.year}
                  </Typography>
                  <List dense>
                    {edu.details.map((detail, idx) => (
                      <ListItem key={idx}>
                        <ListItemText primary={detail} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Paper>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants}>
            <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Work sx={{ color: '#1a237e', mr: 2, fontSize: 30 }} />
                <Typography variant="h4" color="primary" fontWeight={600}>
                  Experience
                </Typography>
              </Box>
              {resumeData.experience.map((exp, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="h6" fontWeight={600}>
                    {exp.role}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {exp.company}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    {exp.year}
                  </Typography>
                  <List dense>
                    {exp.details.map((detail, idx) => (
                      <ListItem key={idx}>
                        <ListItemText primary={detail} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Paper>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <Paper elevation={2} sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Code sx={{ color: '#1a237e', mr: 2, fontSize: 30 }} />
                <Typography variant="h4" color="primary" fontWeight={600}>
                  Skills
                </Typography>
              </Box>
              <Grid container spacing={2}>
                {resumeData.skills.map((skill, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Paper 
                      elevation={1}
                      sx={{ 
                        p: 2,
                        backgroundColor: 'rgba(26, 35, 126, 0.05)',
                        borderRadius: 2
                      }}
                    >
                      <Typography variant="body1">
                        {skill}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Resume; 