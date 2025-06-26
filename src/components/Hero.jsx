import React from 'react';
import { Box, Typography, Container, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/devp128', color: '#333' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/dev-prasad-narayan-patra', color: '#0077b5' },
    { icon: <FaTwitter />, url: '#', color: '#1da1f2' },
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
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          direction="row"
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
                  maxWidth: '320px',
                  aspectRatio: '1 / 1',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  display: 'block',
                  margin: '0 auto',
                  border: '6px solid #fff',
                  background: '#fff',
                }}
              />
            </motion.div>
          </Grid>

          {/* Content Section - Right */}
          <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ px: { xs: 1, md: 6 }, py: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: '#3f51b5',
                    mb: 1,
                    fontWeight: 600,
                    letterSpacing: 2,
                    fontSize: { xs: '0.95rem', md: '1.05rem' },
                  }}
                >
                  Welcome to my portfolio
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    color: '#212121',
                    mb: 1.5,
                    fontSize: { xs: '2.2rem', md: '3.2rem' },
                    lineHeight: 1.15,
                  }}
                >
                  Hi, I'm{' '}
                  <Box component="span" sx={{ color: '#3f51b5' }}>
                    Dev Prasad Narayan Patra
                  </Box>
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: '#555',
                    mb: 2.5,
                    fontWeight: 500,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                  }}
                >
                  Computer Science Undergraduate & Full Stack Developer
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#444',
                      mb: 1,
                      fontSize: { xs: '1rem', md: '1.15rem' },
                      lineHeight: 1.7,
                    }}
                  >
                    Pursuing B.Tech in CSE with minors in Full Stack Development and DevOps.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#444',
                      mb: 1,
                      fontSize: { xs: '1rem', md: '1.15rem' },
                      lineHeight: 1.7,
                    }}
                  >
                    Passionate about building scalable applications, working with AI/ML, and exploring innovative solutions through system design and clean code.
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" sx={{ color: '#222', fontWeight: 600, mb: 0.5 }}>
                    Key Skills:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2, py: 1, borderRadius: 2, bgcolor: '#f5f7fa', boxShadow: 1 }}>
                      <img src="/mern-icon.png" alt="MERN" style={{ width: 50, height: 35 }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>MERN Stack</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2, py: 1, borderRadius: 2, bgcolor: '#f5f7fa', boxShadow: 1 }}>
                      <img src="/ai-icon.png" alt="AI/ML" style={{ width: 50, height: 35 }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>AI/ML</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2, py: 1, borderRadius: 2, bgcolor: '#f5f7fa', boxShadow: 1 }}>
                      <img src="/devopsicon.png" alt="DevOps" style={{ width: 50, height: 35 }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>DevOps</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2, py: 1, borderRadius: 2, bgcolor: '#f5f7fa', boxShadow: 1 }}>
                      <img src="/systemdesign-icon.png" alt="System Design" style={{ width: 50, height: 35 }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>System Design</Typography>
                    </Box>
                  </Box>
                </Box>
                {/* Social Links */}
                <Box
                  sx={{
                    mt: 4,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    gap: 2,
                    width: { xs: '100%', md: 'auto' },
                  }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.18, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: social.color,
                          fontSize: '2rem',
                          bgcolor: '#f5f7fa',
                          borderRadius: 2,
                          transition: 'all 0.3s',
                          boxShadow: '0 2px 8px rgba(63,81,181,0.08)',
                          '&:hover': {
                            bgcolor: `${social.color}12`,
                            color: social.color,
                            boxShadow: '0 4px 16px rgba(63,81,181,0.14)',
                            transform: 'translateY(-2px) scale(1.13)',
                          },
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
