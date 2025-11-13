import { useState } from 'react';
import { Container, Typography, Box, styled, Grid, Card, CardContent, CardActions, Button, Chip, Tabs, Tab } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
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
                radial-gradient(circle at 30% 70%, rgba(0, 255, 136, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 70% 30%, rgba(0, 204, 255, 0.05) 0%, transparent 50%)
            `,
        }
    }))

    const ProjectCard = styled(Card)(({ theme }) => ({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        overflow: 'hidden',
        '&:hover': {
            transform: 'translateY(-12px) scale(1.02)',
            borderColor: theme.palette.secondary.main,
            boxShadow: `0 25px 50px rgba(0, 255, 136, 0.2)`,
            '& .project-image': {
                transform: 'scale(1.1)',
            }
        }
    }))

    const projectsData = [
        {
            title: 'E-Commerce Platform',
            description: 'Plataforma completa de e-commerce com sistema de pagamentos, carrinho, wishlist e painel administrativo. Desenvolvida com React, Node.js e MongoDB.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Redux'],
            githubUrl: 'https://github.com/jesusvicken/ecommerce-platform',
            liveUrl: 'https://ecommerce-jv.vercel.app',
            image: '/project1.jpg',
            category: 'fullstack',
            featured: true
        },
        {
            title: 'TaskFlow Manager',
            description: 'Aplicativo de gerenciamento de tarefas com drag-and-drop, notificações em tempo real e colaboração em equipe usando WebSockets.',
            technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Material-UI'],
            githubUrl: 'https://github.com/jesusvicken/taskflow-manager',
            liveUrl: 'https://taskflow-jv.vercel.app',
            image: '/project2.jpg',
            category: 'fullstack',
            featured: true
        },
        {
            title: 'Weather Analytics',
            description: 'Dashboard meteorológico com previsões em tempo real, gráficos interativos e machine learning para previsões personalizadas.',
            technologies: ['Vue.js', 'Chart.js', 'Python', 'FastAPI', 'TensorFlow'],
            githubUrl: 'https://github.com/jesusvicken/weather-analytics',
            liveUrl: 'https://weather-jv.vercel.app',
            image: '/project3.jpg',
            category: 'frontend'
        },
        {
            title: 'Social Media Dashboard',
            description: 'Ferramenta de análise de redes sociais que consome múltiplas APIs e apresenta métricas através de visualizações interativas.',
            technologies: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
            githubUrl: 'https://github.com/jesusvicken/social-dashboard',
            liveUrl: 'https://social-jv.vercel.app',
            image: '/project4.jpg',
            category: 'fullstack'
        },
        {
            title: 'Fitness Tracker App',
            description: 'Aplicativo mobile para acompanhamento de exercícios, dieta e progresso fitness com sincronização em nuvem e analytics.',
            technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js', 'Expo'],
            githubUrl: 'https://github.com/jesusvicken/fitness-tracker',
            liveUrl: 'https://play.google.com/store/apps/details?id=com.jv.fitness',
            image: '/project5.jpg',
            category: 'mobile'
        },
        {
            title: 'AI Content Generator',
            description: 'Plataforma de geração de conteúdo com IA integrada, suporte multi-idioma e editor markdown avançado.',
            technologies: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
            githubUrl: 'https://github.com/jesusvicken/ai-content-generator',
            liveUrl: 'https://ai-content-jv.vercel.app',
            image: '/project6.jpg',
            category: 'fullstack',
            featured: true
        }
    ]

    const filteredProjects = activeFilter === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === activeFilter);

    const handleFilterChange = (event: React.SyntheticEvent, newValue: string) => {
        setActiveFilter(newValue);
    };

    return (
        <StyledProjects id="projects">
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    textAlign="center"
                    mb={2}
                    sx={{
                        background: 'linear-gradient(45deg, #ffffff, #b0b0b0)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Featured Projects
                </Typography>

                <Typography
                    variant="h6"
                    textAlign="center"
                    color="text.secondary"
                    mb={6}
                    maxWidth="700px"
                    mx="auto"
                >
                    Confira alguns dos projetos que desenvolvi, combinando as mais modernas tecnologias
                    com design inovador e performance excepcional.
                </Typography>

                {/* Filter Tabs */}
                <Box sx={{ borderBottom: 1, borderColor: 'rgba(255,255,255,0.1)', mb: 6 }}>
                    <Tabs
                        value={activeFilter}
                        onChange={handleFilterChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        centered
                    >
                        <Tab label="All Projects" value="all" />
                        <Tab label="Fullstack" value="fullstack" />
                        <Tab label="Frontend" value="frontend" />
                        <Tab label="Mobile" value="mobile" />
                    </Tabs>
                </Box>

                <Grid container spacing={4}>
                    {filteredProjects.map((project, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <ProjectCard>
                                <Box
                                    className="project-image"
                                    sx={{
                                        height: 200,
                                        background: `linear-gradient(45deg, ${project.featured ? '#00ff88' : '#00ccff'}, ${project.featured ? '#00ccff' : '#ff00ff'})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        position: 'relative',
                                        transition: 'transform 0.4s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'primary.main',
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem'
                                    }}
                                >
                                    <VisibilityIcon sx={{ fontSize: 48, opacity: 0.8 }} />
                                    {project.featured && (
                                        <Chip
                                            label="Featured"
                                            sx={{
                                                position: 'absolute',
                                                top: 16,
                                                right: 16,
                                                background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                                                color: 'primary.main',
                                                fontWeight: 'bold'
                                            }}
                                        />
                                    )}
                                </Box>
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Typography gutterBottom variant="h5" component="h3" fontWeight="bold">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.6 }}>
                                        {project.description}
                                    </Typography>
                                    <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
                                        {project.technologies.map((tech, techIndex) => (
                                            <Chip
                                                key={techIndex}
                                                label={tech}
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    borderColor: 'secondary.main',
                                                    color: 'primary.contrastText',
                                                    fontWeight: 500,
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </CardContent>
                                <CardActions sx={{ p: 3, pt: 0 }}>
                                    <Button
                                        size="medium"
                                        startIcon={<GitHubIcon />}
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: 'text.primary',
                                            fontWeight: 600,
                                            '&:hover': {
                                                color: 'secondary.main',
                                            }
                                        }}
                                    >
                                        Code
                                    </Button>
                                    <Button
                                        size="medium"
                                        startIcon={<LaunchIcon />}
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                                            color: 'primary.main',
                                            fontWeight: 600,
                                            px: 3,
                                            '&:hover': {
                                                background: 'linear-gradient(45deg, #00ccff, #00ff88)',
                                                transform: 'translateY(-2px)',
                                            }
                                        }}
                                    >
                                        Live Demo
                                    </Button>
                                </CardActions>
                            </ProjectCard>
                        </Grid>
                    ))}
                </Grid>

                <Box textAlign="center" mt={8}>
                    <Typography variant="h5" color="text.secondary" mb={3}>
                        Interested in seeing more?
                    </Typography>
                    <Button
                        variant="outlined"
                        size="large"
                        href="https://github.com/jesusvicken"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            borderColor: 'secondary.main',
                            color: 'secondary.main',
                            px: 4,
                            py: 1.5,
                            fontSize: '1.1rem',
                            '&:hover': {
                                background: 'rgba(0, 255, 136, 0.1)',
                                borderColor: 'secondary.light',
                                transform: 'translateY(-2px)',
                            }
                        }}
                        startIcon={<GitHubIcon />}
                    >
                        Explore GitHub
                    </Button>
                </Box>
            </Container>
        </StyledProjects>
    )
}

export default Projects