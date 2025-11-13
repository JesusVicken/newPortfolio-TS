import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box, styled, Grid, Card, CardContent, CardActions, Button, Chip, Tabs, Tab } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

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
        transition: 'all 0.4s ease',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        overflow: 'hidden',
    }))

    // SEUS PROJETOS REAIS - CAMINHOS CORRETOS
    const projectsData = [
        {
            title: 'Constrictor Team',
            description: 'Site oficial da Constrictor Team com design moderno e responsivo, showcasing de produtos e serviços.',
            technologies: ['React', 'TypeScript', 'Material-UI', 'Vite'],
            githubUrl: 'https://github.com/seu-user/constrictor',
            liveUrl: 'https://www.constrictorteam.com.br/',
            image: '/constrictor.jpg', // ← CAMINHO DIRETO DA PUBLIC
            category: 'frontend',
            featured: true
        },
        {
            title: 'CPP Extreme Landing Page',
            description: 'Plataforma fitness com sistema de agendamentos, planos de treino e área do aluno integrada.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            githubUrl: 'https://github.com/seu-user/cpp-extreme',
            liveUrl: 'https://cppextremebsb.vercel.app/',
            image: '/cpp.jpg', // ← CAMINHO DIRETO DA PUBLIC
            category: 'fullstack',
            featured: true
        },
        {
            title: 'Tati Neuro',
            description: 'Site profissional para neuropsicóloga com blog integrado, agendamento online e área de pacientes.',
            technologies: ['Next.js', 'TypeScript', 'Styled Components'],
            githubUrl: 'https://github.com/seu-user/tatineuro',
            liveUrl: 'https://tatineuro.vercel.app/',
            image: '/tati.jpg', // ← CAMINHO DIRETO DA PUBLIC
            category: 'frontend'
        },
        {
            title: 'Depireux Fit',
            description: 'Plataforma de coaching fitness com sistema de planos alimentares, acompanhamento e métricas.',
            technologies: ['React', 'Firebase', 'Chart.js', 'PWA'],
            githubUrl: 'https://github.com/seu-user/depireuxfit',
            liveUrl: 'https://depireuxfit.vercel.app/',
            image: '/cris.jpg', // ← CAMINHO DIRETO DA PUBLIC
            category: 'fullstack'
        },
        {
            title: 'Cubic Esquadrias',
            description: 'Site institucional para empresa de esquadrias em alumínio com catálogo de produtos e orçamentos.',
            technologies: ['React', 'Material-UI', 'Formik', 'EmailJS'],
            githubUrl: 'https://github.com/seu-user/cubice',
            liveUrl: 'https://cubicesquadrias.vercel.app/',
            image: '/cubic.JPG', // ← CAMINHO DIRETO DA PUBLIC
            category: 'frontend'
        },
        {
            title: 'Carolina Nantet',
            description: 'Portfolio profissional com design elegante, showcase de trabalhos e formulário de contato integrado.',
            technologies: ['React', 'Framer Motion', 'Styled Components'],
            githubUrl: 'https://github.com/seu-user/carol',
            liveUrl: 'https://carolinanantet.vercel.app/',
            image: '/carol.jpg', // ← CAMINHO DIRETO DA PUBLIC
            category: 'frontend'
        },
        {
            title: 'CPP Extreme Site',
            description: 'Landing page moderna para academia com captura de leads, informações de planos e localização.',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
            githubUrl: 'https://github.com/seu-user/cpp-site',
            liveUrl: 'https://cppextreme.vercel.app/',
            image: '/cppsite.jpg', // ← CAMINHO DIRETO DA PUBLIC
            category: 'frontend'
        },
        {
            title: 'Arruas Tattoo',
            description: 'Landing page moderna para estudio de tatuagem e artista tatuador.',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
            githubUrl: 'https://github.com/seu-user/cpp-site',
            liveUrl: 'https://arruastattoo.vercel.app/',
            image: '/tatto.jpg', // ← CAMINHO DIRETO DA PUBLIC
            category: 'frontend'
        },
        {
            title: 'Pet Shop Landing Page',
            description: 'Landing page moderna para Pet Shop.',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
            githubUrl: 'https://github.com/seu-user/cpp-site',
            liveUrl: 'https://pet-shop-landingpage.vercel.app/',
            image: '/pet.jpg', // ← CAMINHO DIRETO DA PUBLIC
            category: 'frontend'
        }
    ]

    const filteredProjects = activeFilter === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === activeFilter);

    const handleFilterChange = (event: React.SyntheticEvent, newValue: string) => {
        setActiveFilter(newValue);
    };

    // Animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -12,
            scale: 1.02,
            borderColor: '#00ff88',
            boxShadow: '0 25px 50px rgba(0, 255, 136, 0.2)',
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <StyledProjects id="projects">
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
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
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
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
                        </Tabs>
                    </Box>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <Grid container spacing={4}>
                        {filteredProjects.map((project, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <motion.div
                                    variants={cardVariants}
                                    whileHover="hover"
                                    style={{ height: '100%' }}
                                >
                                    <ProjectCard>
                                        <motion.div
                                            variants={imageVariants}
                                            style={{ height: '200px', overflow: 'hidden' }}
                                        >
                                            {/* IMAGEM REAL DO PROJETO */}
                                            <Box
                                                sx={{
                                                    height: '100%',
                                                    background: `url(${project.image})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat',
                                                    position: 'relative'
                                                }}
                                            >
                                                {/* Overlay escuro para melhor legibilidade */}
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'rgba(0, 0, 0, 0.4)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        fontSize: '1.5rem',
                                                        textAlign: 'center',
                                                        padding: 2
                                                    }}
                                                >
                                                    {project.title}
                                                </Box>
                                                {project.featured && (
                                                    <Chip
                                                        label="Featured"
                                                        sx={{
                                                            position: 'absolute',
                                                            top: 16,
                                                            right: 16,
                                                            background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                                                            color: 'primary.main',
                                                            fontWeight: 'bold',
                                                            zIndex: 2
                                                        }}
                                                    />
                                                )}
                                            </Box>
                                        </motion.div>
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
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
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
                </motion.div>
            </Container>
        </StyledProjects>
    )
}

export default Projects