import React from 'react';
import { Box, Typography, Container, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/devp128', color: '#333' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/dev-prasad-narayan-patra', color: '#0077b5' },
    { icon: <FaYoutube />, url: '#', color: '#ff0000' },
    { icon: <FaTwitter />, url: '#', color: '#1da1f2' },
    { icon: <FaInstagram />, url: '#', color: '#e4405f' },
  ];

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f5f5f5 0%, #e8eaf6 100%)',
        position: 'relative',
        overflow: 'hidden',
        py: 4
      }}
    >
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={4} 
          alignItems="center"
        >
          {/* Image Section - Left */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src="/profile-image.jpg"
                alt="Dev Prasad Narayan Patra"
                sx={{
                  width: '100%',
                  maxWidth: { xs: '300px', md: '400px' },
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  margin: { xs: '0 auto', md: '0' },
                  display: 'block',
                  transform: { xs: 'none', md: 'perspective(1000px) rotateY(-5deg)' },
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: { xs: 'none', md: 'perspective(1000px) rotateY(0deg)' }
                  }
                }}
              />
            </motion.div>
          </Grid>

          {/* Content Section - Right */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    color: '#1a237e',
                    mb: 1,
                    fontWeight: 600,
                    letterSpacing: 1.5
                  }}
                >
                  WELCOME TO MY PORTFOLIO
                </Typography>
                
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontWeight: 700,
                    color: '#1a237e',
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2
                  }}
                >
                  Hi, I'm Dev Prasad Narayan Patra
                </Typography>

                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: '#666',
                    mb: 3,
                    fontWeight: 500
                  }}
                >
                  A Computer Science undergraduate and Full Stack Developer
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#666',
                    mb: 4,
                    lineHeight: 1.8,
                    fontSize: '1.1rem'
                  }}
                >
                  Pursuing B.Tech in CSE with minors in Full Stack Development and DevOps.
                  Passionate about building scalable applications using the MERN stack, working with AI/ML technologies, 
                  and exploring innovative solutions through system design and clean code practices.
                </Typography>

                {/* Social Links */}
                <Box 
                  sx={{ 
                    display: 'flex',
                    gap: 2,
                    mt: 4
                  }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: social.color,
                          fontSize: '1.8rem',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: `${social.color}15`,
                            transform: 'translateY(-5px)'
                          }
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 