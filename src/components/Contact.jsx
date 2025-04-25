import React from 'react';
import { Container, Typography, Box, Paper, Grid, Button, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, LinkedIn, GitHub, Phone } from '@mui/icons-material';

const contact = {
  name: "Dev Prasad Narayan Patra",
  email: "devprasad2000@example.com",  // Replace with real email
  phone: "+91-8448150244",        // Optional
  linkedIn: "https://www.linkedin.com/in/dev-prasad-narayan-patra",
  github: "https://github.com/devp128",
  message: `Have a question or want to work together? 
Feel free to reach out for collaborations, internships, freelance projects, or just to say hi!`
};

const Contact = () => {
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

  const contactMethods = [
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: '#d32f2f'
    },
    {
      icon: <LinkedIn sx={{ fontSize: 40 }} />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: contact.linkedIn,
      color: '#0077b5'
    },
    {
      icon: <GitHub sx={{ fontSize: 40 }} />,
      label: "GitHub",
      value: "Check my repositories",
      href: contact.github,
      color: '#333'
    },
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
      color: '#00c853'
    }
  ];

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
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                color: '#1a237e',
                fontWeight: 700,
                mb: 2
              }}
            >
              Get In Touch
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ maxWidth: '800px', mx: 'auto' }}
            >
              {contact.message}
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {contactMethods.map((method, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        color: method.color,
                        mb: 2
                      }}
                    >
                      {method.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      component="h3"
                      gutterBottom
                      fontWeight={600}
                    >
                      {method.label}
                    </Typography>
                    <Button
                      variant="text"
                      component={Link}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: method.color,
                        '&:hover': {
                          backgroundColor: `${method.color}10`
                        }
                      }}
                    >
                      {method.value}
                    </Button>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div variants={itemVariants}>
            <Paper 
              elevation={2}
              sx={{ 
                p: 4, 
                mt: 6,
                textAlign: 'center',
                backgroundColor: '#1a237e',
                color: 'white'
              }}
            >
              <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                Let's Create Something Amazing Together
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component={Link}
                href={`mailto:${contact.email}`}
                sx={{
                  backgroundColor: 'white',
                  color: '#1a237e',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)'
                  }
                }}
              >
                Send Message
              </Button>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 