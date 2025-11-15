import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Button, Container, useTheme, useMediaQuery } from "@mui/material";

const words = [
    "Site institucional.",
    "Loja virtual.",
    "Sites Inteligentes.",
    "Design Moderno.",
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
                        opacity: 0.9, // Aumentei para 90% de opacidade
                    }}
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>

                {/* Gradient Overlay reduzido */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(10,10,10,0.3) 0%, rgba(26,26,26,0.2) 50%, rgba(10,10,10,0.3) 100%)', // Reduzi bastante a opacidade
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
                                textShadow: '0 4px 12px rgba(0,0,0,0.8)', // Sombra mais forte
                            }}
                        >
                            {text}
                            <Box
                                component={motion.span}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                sx={{
                                    ml: 0.5,
                                    textShadow: '0 4px 12px rgba(0,0,0,0.8)' // Sombra no cursor também
                                }}
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
                                color: 'rgba(255,255,255,0.9)', // Texto mais branco
                                maxWidth: { xs: '100%', md: '80%', lg: '70%' },
                                lineHeight: 1.6,
                                mb: 6,
                                mx: { xs: 'auto', md: 0 },
                                textAlign: { xs: 'center', md: 'left' },
                                textShadow: '0 2px 8px rgba(0,0,0,0.8)', // Sombra mais forte
                                backgroundColor: 'rgba(0,0,0,0.4)', // Fundo escuro para melhor legibilidade
                                backdropFilter: 'blur(8px)',
                                padding: 3,
                                borderRadius: 2,
                                border: '1px solid rgba(255,255,255,0.1)',
                            }}
                        >
                            Soluções de <stromg>Sites modernos</stromg>, com impacto real e design inteligente para transformar
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
                            {/* Botão Principal com efeito de preenchimento */}
                            <Box
                                component={motion.div}
                                whileHover="hover"
                                whileTap="tap"
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: '50px',
                                    minWidth: { xs: '200px', sm: '220px' },
                                }}
                            >
                                {/* Background animado */}
                                <motion.div
                                    variants={{
                                        hover: {
                                            scale: 1.05,
                                            transition: { duration: 0.3 }
                                        },
                                        tap: {
                                            scale: 0.95,
                                            transition: { duration: 0.1 }
                                        }
                                    }}
                                    style={{
                                        position: 'relative',
                                        display: 'inline-block',
                                    }}
                                >
                                    {/* Efeito de onda ao passar o mouse */}
                                    <motion.div
                                        variants={{
                                            hover: {
                                                scale: 1.2,
                                                opacity: 0,
                                                transition: {
                                                    duration: 0.6,
                                                    ease: "easeOut"
                                                }
                                            }
                                        }}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(45deg, #00ff88, #00cc66)',
                                            borderRadius: '50px',
                                            transform: 'translate(-50%, -50%) scale(0)',
                                            opacity: 0.3,
                                            zIndex: 1,
                                        }}
                                    />

                                    {/* Botão principal */}
                                    <Button
                                        href="#contato"
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            position: 'relative',
                                            zIndex: 2,
                                            px: 4,
                                            py: 1.5,
                                            fontSize: '1.1rem',
                                            fontWeight: 600,
                                            background: 'transparent',
                                            border: '2px solid #00ff88',
                                            color: '#00ff88',
                                            borderRadius: '50px',
                                            overflow: 'hidden',
                                            minWidth: { xs: '200px', sm: '220px' },
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: '-100%',
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(45deg, #00ff88, #00cc66)',
                                                transition: 'left 0.4s ease',
                                                zIndex: -1,
                                            },
                                            '&:hover::before': {
                                                left: 0,
                                            },
                                            '&:hover': {
                                                background: 'transparent',
                                                color: '#0a0a0a',
                                                borderColor: '#00ff88',
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 10px 25px rgba(0, 255, 136, 0.5)', // Sombra mais forte
                                            },
                                            transition: 'all 0.4s ease',
                                        }}
                                    >
                                        Quero um orçamento
                                    </Button>
                                </motion.div>
                            </Box>
                        </Box>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}