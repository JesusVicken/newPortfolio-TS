import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Button, Container, useTheme, useMediaQuery } from "@mui/material";

const words = [
    "Inovação.",
    "Sustentabilidade.",
    "Displays Inteligentes.",
    "Soluções Modernas.",
];

export default function HeroApp() {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Typewriter Effect
    useEffect(() => {
        const currentWord = words[wordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 1200);
                }
            } else {
                setText(currentWord.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setWordIndex((wordIndex + 1) % words.length);
                }
            }
        }, isDeleting ? 70 : 120);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex]);

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                height: { xs: '90vh', md: '100vh' },
                minHeight: '600px',
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
            }}
        >
            {/* Video Background */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.7, // Aumentei a opacidade para 70%
                    }}
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>

                {/* Gradient Overlay - Reduzi a opacidade para o vídeo aparecer mais */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(10,10,10,0.7) 0%, rgba(26,26,26,0.5) 50%, rgba(10,10,10,0.7) 100%)',
                    }}
                />
            </Box>

            {/* Content */}
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Box
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            position: 'relative',
                            zIndex: 1,
                            color: 'white',
                            px: { xs: 2, sm: 3 },
                        }}
                    >
                        {/* Main Heading */}
                        <Typography
                            variant="h1"
                            component={motion.h1}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            sx={{
                                fontSize: {
                                    xs: '2.5rem',
                                    sm: '3.5rem',
                                    md: '4.5rem',
                                    lg: '5rem',
                                },
                                fontWeight: 700,
                                lineHeight: 1.1,
                                mb: 3,
                                background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '0 2px 10px rgba(0,0,0,0.3)', // Adicionei sombra para melhor contraste
                            }}
                        >
                            Tecnologia &
                            <br />
                            Criatividade em
                        </Typography>

                        {/* Typewriter Text */}
                        <Box
                            sx={{
                                fontSize: {
                                    xs: '2rem',
                                    sm: '2.8rem',
                                    md: '3.5rem',
                                    lg: '4rem',
                                },
                                fontWeight: 600,
                                color: 'secondary.main',
                                minHeight: { xs: '80px', sm: '100px', md: '120px' },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: { xs: 'center', md: 'flex-start' },
                                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                mb: 4,
                                textShadow: '0 2px 8px rgba(0,0,0,0.4)', // Sombra para melhor legibilidade
                            }}
                        >
                            {text}
                            <Box
                                component={motion.span}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                sx={{ ml: 0.5 }}
                            >
                                |
                            </Box>
                        </Box>

                        {/* Description */}
                        <Typography
                            variant="h5"
                            component={motion.p}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            sx={{
                                fontSize: {
                                    xs: '1.1rem',
                                    sm: '1.3rem',
                                    md: '1.5rem',
                                },
                                fontWeight: 300,
                                color: 'text.secondary',
                                maxWidth: { xs: '100%', md: '80%', lg: '70%' },
                                lineHeight: 1.6,
                                mb: 6,
                                mx: { xs: 'auto', md: 0 },
                                textAlign: { xs: 'center', md: 'left' },
                                textShadow: '0 1px 4px rgba(0,0,0,0.5)', // Sombra para melhor contraste
                            }}
                        >
                            Soluções modernas, impacto real e design inteligente para transformar
                            suas ideias em realidade digital.
                        </Typography>

                        {/* CTA Buttons */}
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            sx={{
                                display: 'flex',
                                gap: 3,
                                flexDirection: { xs: 'column', sm: 'row' },
                                alignItems: 'center',
                                justifyContent: { xs: 'center', md: 'flex-start' },
                            }}
                        >
                            <Box
                                component={motion.div}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    href="#contato"
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        background: 'linear-gradient(45deg, #00ff88, #00cc66)',
                                        '&:hover': {
                                            background: 'linear-gradient(45deg, #00cc66, #00ff88)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 10px 25px rgba(0, 255, 136, 0.3)',
                                        },
                                        transition: 'all 0.3s ease',
                                        minWidth: { xs: '200px', sm: '220px' },
                                    }}
                                >
                                    Entre em Contato
                                </Button>
                            </Box>

                            <Box
                                component={motion.div}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    href="#projetos"
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        borderColor: 'secondary.main',
                                        color: 'secondary.main',
                                        '&:hover': {
                                            borderColor: 'secondary.light',
                                            color: 'secondary.light',
                                            backgroundColor: 'rgba(0, 255, 136, 0.1)',
                                            transform: 'translateY(-2px)',
                                        },
                                        transition: 'all 0.3s ease',
                                        minWidth: { xs: '200px', sm: '220px' },
                                    }}
                                >
                                    Ver Projetos
                                </Button>
                            </Box>
                        </Box>

                        {/* Scroll Indicator
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            sx={{
                                position: 'absolute',
                                bottom: { xs: 20, md: 40 },
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: { xs: 'none', md: 'flex' },
                                flexDirection: 'column',
                                alignItems: 'center',
                                color: 'text.secondary',
                            }}
                        >
                            <Typography variant="body2" sx={{ mb: 1, fontSize: '0.8rem', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                                
                            </Typography>
                            <Box
                                component={motion.div}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                sx={{
                                    width: '2px',
                                    height: '30px',
                                    backgroundColor: 'secondary.main',
                                    borderRadius: '1px',
                                    boxShadow: '0 0 8px rgba(0, 255, 136, 0.5)',
                                }}
                            />
                        </Box> */}
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}