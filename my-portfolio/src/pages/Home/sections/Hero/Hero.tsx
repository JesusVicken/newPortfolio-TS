import { useState, useEffect, useRef } from 'react';
import { Container, Grid, Typography, styled, Box, keyframes } from "@mui/material"
import Avatar from '../../../../assets/images/2.jpeg'
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';
import StyledButton from "../../../../components/StyledButton/StyledButton";

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 136, 0.3); }
  50% { box-shadow: 0 0 40px rgba(0, 255, 136, 0.6), 0 0 60px rgba(0, 255, 136, 0.3); }
`;

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const words = ['Fullstack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator'];

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const type = () => {
            const currentWord = words[currentWordIndex];

            // Se estiver pausado (após completar a palavra)
            if (isPaused) {
                timeoutId = setTimeout(() => {
                    setIsPaused(false);
                    setIsDeleting(true);
                }, 2000); // Pausa por 2 segundos antes de começar a deletar
                return;
            }

            if (isDeleting) {
                // Deletando
                if (displayText.length > 0) {
                    setDisplayText(currentWord.substring(0, displayText.length - 1));
                    timeoutId = setTimeout(type, 50); // Velocidade de deletar
                } else {
                    // Terminou de deletar, vai para próxima palavra
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                    timeoutId = setTimeout(type, 500); // Pausa antes de começar nova palavra
                }
            } else {
                // Digitando
                if (displayText.length < currentWord.length) {
                    setDisplayText(currentWord.substring(0, displayText.length + 1));
                    timeoutId = setTimeout(type, 100); // Velocidade de digitação
                } else {
                    // Terminou de digitar a palavra completa
                    setIsPaused(true);
                    timeoutId = setTimeout(type, 100);
                }
            }
        };

        timeoutId = setTimeout(type, 200); // Delay inicial

        return () => {
            clearTimeout(timeoutId);
        };
    }, [displayText, isDeleting, isPaused, currentWordIndex, words]);

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
                radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(0, 204, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255, 0, 255, 0.05) 0%, transparent 50%)
            `,
        }
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: '320px',
        height: '320px',
        borderRadius: '50%',
        border: `3px solid ${theme.palette.secondary.main}`,
        animation: `${float} 6s ease-in-out infinite, ${glow} 4s ease-in-out infinite`,
        position: 'relative',
        zIndex: 2,
        [theme.breakpoints.down('md')]: {
            width: '280px',
            height: '280px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '240px',
            height: '240px',
        }
    }))

    const CodeSnippet = styled(Box)(({ theme }) => ({
        background: 'rgba(0, 255, 136, 0.05)',
        border: '1px solid rgba(0, 255, 136, 0.2)',
        borderRadius: '12px',
        padding: theme.spacing(2),
        fontFamily: "'Fira Code', monospace",
        fontSize: '0.9rem',
        color: theme.palette.secondary.main,
        marginTop: theme.spacing(4),
        maxWidth: '400px',
        margin: 'auto',
    }))

    return (
        <StyledHero id="home">
            {/* Animated Background Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '100px',
                    height: '100px',
                    background: 'radial-gradient(circle, rgba(0,255,136,0.3) 0%, transparent 70%)',
                    animation: `${float} 8s ease-in-out infinite`,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '10%',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(0,204,255,0.2) 0%, transparent 70%)',
                    animation: `${float} 10s ease-in-out infinite reverse`,
                }}
            />

            <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 2 }}>
                <Grid container spacing={4} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography
                            variant="h1"
                            sx={{
                                mb: 2,
                                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' }
                            }}
                        >
                            Jesus Vicken
                        </Typography>

                        <Typography
                            variant="h2"
                            sx={{
                                mb: 3,
                                minHeight: '80px',
                                fontSize: { xs: '1.5rem', md: '2rem' },
                                color: 'secondary.main'
                            }}
                        >
                            {displayText}
                            <Box
                                component="span"
                                sx={{
                                    animation: 'blink 1s infinite',
                                    '@keyframes blink': {
                                        '0%, 100%': { opacity: 1 },
                                        '50%': { opacity: 0 }
                                    }
                                }}
                            >
                                |
                            </Box>
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                mb: 4,
                                color: 'text.secondary',
                                lineHeight: 1.6,
                                maxWidth: '500px',
                                mx: { xs: 'auto', md: 0 }
                            }}
                        >
                            Crafting digital experiences with cutting-edge technologies.
                            Passionate about creating scalable solutions and beautiful interfaces.
                        </Typography>

                        <Grid container spacing={3} sx={{ maxWidth: '400px', mx: { xs: 'auto', md: 0 } }}>
                            <Grid item xs={12} sm={6}>
                                <a href="/JESUS_CV.pdf" download style={{ textDecoration: 'none', display: 'block' }}>
                                    <StyledButton variant="primary">
                                        <DownloadIcon />
                                        <Typography variant="button">
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </a>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <a
                                    href="mailto:jesus.vicken@example.com"
                                    style={{ textDecoration: 'none', display: 'block' }}
                                >
                                    <StyledButton variant="secondary">
                                        <EmailIcon />
                                        <Typography variant="button">
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </a>
                            </Grid>
                        </Grid>

                        <CodeSnippet>
                            <Box display="flex" alignItems="center" gap={1} mb={1}>
                                <CodeIcon sx={{ fontSize: 16 }} />
                                <Typography variant="caption" fontFamily="inherit">
                                    // Currently working with modern stack
                                </Typography>
                            </Box>
                            <Typography fontFamily="inherit">
                                const techStack = ['React', 'TypeScript', 'Node.js', 'MongoDB'];
                            </Typography>
                        </CodeSnippet>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            sx={{
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '-20px',
                                    left: '-20px',
                                    right: '-20px',
                                    bottom: '-20px',
                                    background: 'conic-gradient(from 45deg, #00ff88, #00ccff, #ff00ff, #00ff88)',
                                    borderRadius: '50%',
                                    animation: 'spin 4s linear infinite',
                                    zIndex: 1,
                                    filter: 'blur(20px)',
                                    opacity: 0.3,
                                    '@keyframes spin': {
                                        '0%': { transform: 'rotate(0deg)' },
                                        '100%': { transform: 'rotate(360deg)' }
                                    }
                                }
                            }}
                        >
                            <StyledImg src={Avatar} alt="Jesus Vicken - Fullstack Developer" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    )
}

export default Hero