import { Container, Typography, Box, styled, Grid, Avatar } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code';
import GroupIcon from '@mui/icons-material/Group';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const About = () => {
    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
                radial-gradient(circle at 10% 20%, rgba(0, 255, 136, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(0, 204, 255, 0.05) 0%, transparent 50%)
            `,
        }
    }))

    const FeatureCard = styled(Box)(({ theme }) => ({
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: theme.spacing(4),
        textAlign: 'center',
        transition: 'all 0.4s ease',
        backdropFilter: 'blur(10px)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&:hover': {
            transform: 'translateY(-10px)',
            borderColor: theme.palette.secondary.main,
            boxShadow: `0 20px 40px rgba(0, 255, 136, 0.15)`,
        }
    }))

    const StatNumber = styled(Typography)(({ theme }) => ({
        fontSize: '3rem',
        fontWeight: 700,
        background: 'linear-gradient(45deg, #00ff88, #00ccff)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        lineHeight: 1,
    }))

    return (
        <StyledAbout id="about">
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Typography
                            variant="h2"
                            component="h2"
                            gutterBottom
                            sx={{
                                mb: 3,
                                background: 'linear-gradient(45deg, #ffffff, #b0b0b0)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            About Me
                        </Typography>

                        <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 3, lineHeight: 1.8 }}>
                            Sou um <Box component="span" color="secondary.main" fontWeight="600">Desenvolvedor Fullstack</Box> apaixonado por criar soluções digitais inovadoras que unem tecnologia de ponta e design excepcional.
                        </Typography>

                        <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4, lineHeight: 1.8 }}>
                            Com mais de <Box component="span" color="secondary.main" fontWeight="600">5 anos de experiência</Box>, já trabalhei em diversos projetos, desde aplicações web complexas até sistemas escaláveis, sempre focando em código limpo, performance e experiência do usuário.
                        </Typography>

                        <Grid container spacing={3} sx={{ mt: 4 }}>
                            <Grid item xs={4} textAlign="center">
                                <StatNumber>20+</StatNumber>
                                <Typography color="text.secondary" fontWeight="500">
                                    Projetos
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="center">
                                <StatNumber>15+</StatNumber>
                                <Typography color="text.secondary" fontWeight="500">
                                    Clientes
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="center">
                                <StatNumber>5+</StatNumber>
                                <Typography color="text.secondary" fontWeight="500">
                                    Anos Exp
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <FeatureCard>
                                    <Avatar
                                        sx={{
                                            bgcolor: 'rgba(0, 255, 136, 0.1)',
                                            color: 'secondary.main',
                                            width: 60,
                                            height: 60,
                                            mb: 2
                                        }}
                                    >
                                        <CodeIcon />
                                    </Avatar>
                                    <Typography variant="h5" gutterBottom fontWeight="600">
                                        Clean Code
                                    </Typography>
                                    <Typography color="text.secondary">
                                        Desenvolvo código limpo, mantível e seguindo as melhores práticas do mercado.
                                    </Typography>
                                </FeatureCard>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <FeatureCard>
                                    <Avatar
                                        sx={{
                                            bgcolor: 'rgba(0, 204, 255, 0.1)',
                                            color: 'primary.contrastText',
                                            width: 60,
                                            height: 60,
                                            mb: 2
                                        }}
                                    >
                                        <GroupIcon />
                                    </Avatar>
                                    <Typography variant="h5" gutterBottom fontWeight="600">
                                        Team Work
                                    </Typography>
                                    <Typography color="text.secondary">
                                        Excelente comunicação e colaboração em equipe usando metodologias ágeis.
                                    </Typography>
                                </FeatureCard>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <FeatureCard>
                                    <Avatar
                                        sx={{
                                            bgcolor: 'rgba(255, 0, 255, 0.1)',
                                            color: 'primary.contrastText',
                                            width: 60,
                                            height: 60,
                                            mb: 2
                                        }}
                                    >
                                        <RocketLaunchIcon />
                                    </Avatar>
                                    <Typography variant="h5" gutterBottom fontWeight="600">
                                        Innovation
                                    </Typography>
                                    <Typography color="text.secondary">
                                        Sempre buscando novas tecnologias e soluções criativas para problemas complexos.
                                    </Typography>
                                </FeatureCard>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <FeatureCard>
                                    <Avatar
                                        sx={{
                                            bgcolor: 'rgba(255, 255, 0, 0.1)',
                                            color: 'primary.contrastText',
                                            width: 60,
                                            height: 60,
                                            mb: 2
                                        }}
                                    >
                                        <RocketLaunchIcon />
                                    </Avatar>
                                    <Typography variant="h5" gutterBottom fontWeight="600">
                                        Performance
                                    </Typography>
                                    <Typography color="text.secondary">
                                        Otimização e performance são prioridades em todos os projetos que desenvolvo.
                                    </Typography>
                                </FeatureCard>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledAbout>
    )
}

export default About