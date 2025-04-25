import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Container } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const menuItems = [
    { text: 'ABOUT', path: '/' },
    { text: 'RESUME', path: '/resume' },
    { text: 'PROJECTS', path: '/projects' },
    { text: 'CERTIFICATIONS', path: '/certifications' },
    { text: 'ACHIEVEMENTS', path: '/achievements' },
    { text: 'CONTACT', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 2 } }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h6" 
              component={Link} 
              to="/" 
              sx={{ 
                color: '#1a237e',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: { xs: '1.2rem', sm: '1.5rem' }
              }}
            >
              Dev Prasad Narayan Patra
            </Typography>
          </motion.div>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#1a237e' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {menuItems.map((item) => (
                <motion.div
                  key={item.text}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Typography
                    component={Link}
                    to={item.path}
                    sx={{
                      color: isActive(item.path) ? '#1a237e' : '#666',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      position: 'relative',
                      '&:hover': {
                        color: '#1a237e'
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: isActive(item.path) ? '100%' : '0%',
                        height: '2px',
                        bottom: -4,
                        left: 0,
                        backgroundColor: '#1a237e',
                        transition: 'width 0.3s ease'
                      },
                      '&:hover::after': {
                        width: '100%'
                      }
                    }}
                  >
                    {item.text}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: 240,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)'
          }
        }}
      >
        <Box sx={{ pt: 8 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem 
                button 
                key={item.text}
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  backgroundColor: isActive(item.path) ? 'rgba(26, 35, 126, 0.08)' : 'transparent'
                }}
              >
                <ListItemText 
                  primary={item.text}
                  sx={{
                    color: isActive(item.path) ? '#1a237e' : '#666',
                    '& .MuiTypography-root': {
                      fontWeight: 600
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 