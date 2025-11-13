import { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useScrollTrigger,
    Slide
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
        setMobileOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
    ];

    const drawer = (
        <Box
            sx={{
                width: 250,
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                height: '100%',
                padding: 2
            }}
        >
            <Box display="flex" justifyContent="flex-end" mb={2}>
                <IconButton onClick={handleDrawerToggle} sx={{ color: 'secondary.main' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        sx={{
                            cursor: 'pointer',
                            borderRadius: 2,
                            mb: 1,
                            backgroundColor: activeSection === item.id ? 'secondary.main' : 'transparent',
                            '&:hover': {
                                backgroundColor: 'secondary.main',
                                transform: 'translateX(8px)',
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <ListItemText
                            primary={item.label}
                            sx={{
                                color: activeSection === item.id ? 'primary.main' : 'text.primary',
                                fontWeight: activeSection === item.id ? 600 : 400,
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <HideOnScroll>
                <AppBar
                    position="fixed"
                    sx={{
                        background: 'rgba(10, 10, 10, 0.95)',
                        backdropFilter: 'blur(20px)',
                        borderBottom: '1px solid rgba(0, 255, 136, 0.1)',
                    }}
                >
                    <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                        <Box
                            component="span"
                            sx={{
                                background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 700,
                                fontSize: '1.5rem',
                            }}
                        >
                            JV
                        </Box>

                        {/* Desktop Menu */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                            {navItems.map((item) => (
                                <Box
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    sx={{
                                        cursor: 'pointer',
                                        px: 3,
                                        py: 1,
                                        borderRadius: 3,
                                        background: activeSection === item.id
                                            ? 'linear-gradient(45deg, #00ff88, #00ccff)'
                                            : 'transparent',
                                        color: activeSection === item.id ? 'primary.main' : 'text.primary',
                                        fontWeight: 600,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                                            color: 'primary.main',
                                            transform: 'translateY(-2px)',
                                        },
                                    }}
                                >
                                    {item.label}
                                </Box>
                            ))}
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                display: { md: 'none' },
                                color: 'secondary.main'
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 250,
                        border: 'none',
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default NavBar;