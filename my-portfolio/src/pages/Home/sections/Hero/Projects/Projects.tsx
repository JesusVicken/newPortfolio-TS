import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Typography, Box, styled, Grid, Card, CardContent, CardActions, Button, Chip, Tabs, Tab, alpha } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
                radial-gradient(circle at 30% 70%, ${alpha(theme.palette.secondary.main, 0.05)} 0%, transparent 50%),
                radial-gradient(circle at 70% 30%, ${alpha('#00ccff', 0.05)} 0%, transparent 50%)
            `,
        }
    }))

    const ProjectCard = styled(Card)(({ theme }) => ({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: alpha(theme.palette.background.paper, 0.8),
        border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
        borderRadius: '24px',
        backdropFilter: 'blur(20px)',
        overflow: 'hidden',
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.03)} 0%, transparent 50%)`,
            opacity: 0,
            transition: 'opacity 0.3s ease',
        },
        '&:hover::before': {
            opacity: 1,
        }
    }))

    const projectsData = [
        {
            title: 'Constrictor Team',
            description: 'Site oficial da Constrictor Team com design moderno e responsivo, showcasing de produtos e serviços.',
            technologies: ['React', 'TypeScript', 'Material-UI', 'Vite'],
            githubUrl: 'https://github.com/jesusvicken/constrictor',
            liveUrl: 'https://www.constrictorteam.com.br/',
            image: '/constrictor.jpg',
            category: 'frontend',
            featured: true
        },
        {
            title: 'CPP Extreme Landing Page',
            description: 'Plataforma fitness com sistema de agendamentos, planos de treino e área do aluno integrada.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            githubUrl: 'https://github.com/jesusvicken/cpp-extreme',
            liveUrl: 'https://cppextremebsb.vercel.app/',
            image: '/cpp.jpg',
            category: 'fullstack',
            featured: true
        },
        {
            title: 'Tati Neuro',
            description: 'Site profissional para neuropsicóloga com blog integrado, agendamento online e área de pacientes.',
            technologies: ['Next.js', 'TypeScript', 'Styled Components'],
            githubUrl: 'https://github.com/jesusvicken/tatineuro',
            liveUrl: 'https://tatineuro.vercel.app/',
            image: '/tati.jpg',
            category: 'frontend'
        },
        {
            title: 'Depireux Fit',
            description: 'Plataforma de coaching fitness com sistema de planos alimentares, acompanhamento e métricas.',
            technologies: ['React', 'Firebase', 'Chart.js', 'PWA'],
            githubUrl: 'https://github.com/jesusvicken/depireuxfit',
            liveUrl: 'https://depireuxfit.vercel.app/',
            image: '/cris.jpg',
            category: 'fullstack'
        },
        {
            title: 'Cubic Esquadrias',
            description: 'Site institucional para empresa de esquadrias em alumínio com catálogo de produtos e orçamentos.',
            technologies: ['React', 'Material-UI', 'Formik', 'EmailJS'],
            githubUrl: 'https://github.com/jesusvicken/cubice',
            liveUrl: 'https://cubicesquadrias.vercel.app/',
            image: '/cubic.JPG',
            category: 'frontend'
        },
        {
            title: 'Carolina Nantet',
            description: 'Portfolio profissional com design elegante, showcase de trabalhos e formulário de contato integrado.',
            technologies: ['React', 'Framer Motion', 'Styled Components'],
            githubUrl: 'https://github.com/jesusvicken/carol',
            liveUrl: 'https://carolinanantet.vercel.app/',
            image: '/carol.jpg',
            category: 'frontend'
        },
        {
            title: 'CPP Extreme Site',
            description: 'Landing page moderna para academia com captura de leads, informações de planos e localização.',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
            githubUrl: 'https://github.com/jesusvicken/cpp-site',
            liveUrl: 'https://cppextreme.vercel.app/',
            image: '/cppsite.jpg',
            category: 'frontend'
        },
        {
            title: 'Arruas Tattoo',
            description: 'Landing page moderna para estudio de tatuagem e artista tatuador.',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
            githubUrl: 'https://github.com/jesusvicken/arruas-tattoo',
            liveUrl: 'https://arruastattoo.vercel.app/',
            image: '/tatto.jpg',
            category: 'frontend'
        },
        {
            title: 'Pet Shop Landing Page',
            description: 'Landing page moderna para Pet Shop.',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
            githubUrl: 'https://github.com/jesusvicken/pet-shop',
            liveUrl: 'https://pet-shop-landingpage.vercel.app/',
            image: '/pet.jpg',
            category: 'frontend'
        }
    ]

    const filteredProjects = activeFilter === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === activeFilter);

    const handleFilterChange = (event: React.SyntheticEvent, newValue: string) => {
        setActiveFilter(newValue);
    };

    // Animations otimizadas
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                duration: 0.8
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        },
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <StyledProjects id="projects">
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        gutterBottom
                        textAlign="center"
                        mb={3}
                        sx={{
                            background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 800,
                            fontSize: { xs: '2.5rem', md: '3.5rem' }
                        }}
                    >
                        Featured Projects
                    </Typography>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <Typography
                            variant="h6"
                            textAlign="center"
                            color="text.secondary"
                            mb={6}
                            maxWidth="700px"
                            mx="auto"
                            sx={{ lineHeight: 1.7 }}
                        >
                            Explore minha jornada através de projetos reais que combinam
                            <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}> tecnologia de ponta </Box>
                            com
                            <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}> design excepcional </Box>
                        </Typography>
                    </motion.div>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Box sx={{
                        borderBottom: 1,
                        borderColor: 'rgba(255,255,255,0.1)',
                        mb: 8,
                        position: 'relative'
                    }}>
                        <Tabs
                            value={activeFilter}
                            onChange={handleFilterChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            centered
                            sx={{
                                '& .MuiTab-root': {
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    py: 2,
                                    px: 4,
                                    mx: 1,
                                    borderRadius: '12px 12px 0 0',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 255, 136, 0.05)',
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: 'rgba(0, 255, 136, 0.1)',
                                    }
                                }
                            }}
                        >
                            <Tab label="All Projects" value="all" />
                            <Tab label="Fullstack" value="fullstack" />
                            <Tab label="Frontend" value="frontend" />
                        </Tabs>
                    </Box>
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <Grid container spacing={4}>
                            {filteredProjects.map((project, index) => (
                                <Grid item xs={12} md={6} lg={4} key={index}>
                                    <motion.div
                                        variants={cardVariants}
                                        whileHover="hover"
                                        onHoverStart={() => setHoveredProject(index)}
                                        onHoverEnd={() => setHoveredProject(null)}
                                        style={{ height: '100%' }}
                                    >
                                        <ProjectCard
                                            sx={{
                                                transform: hoveredProject === index ? 'translateY(-8px)' : 'none',
                                                boxShadow: hoveredProject === index
                                                    ? '0 25px 50px rgba(0, 255, 136, 0.15)'
                                                    : '0 10px 30px rgba(0, 0, 0, 0.2)',
                                                borderColor: hoveredProject === index ? 'secondary.main' : 'rgba(255,255,255,0.1)'
                                            }}
                                        >
                                            {/* Project Image */}
                                            <motion.div
                                                variants={imageVariants}
                                                style={{
                                                    height: '220px',
                                                    overflow: 'hidden',
                                                    position: 'relative'
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        height: '100%',
                                                        background: `linear-gradient(45deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${project.image})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        backgroundRepeat: 'no-repeat',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        position: 'relative'
                                                    }}
                                                >
                                                    {/* Project Title Overlay */}
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileHover={{ opacity: 1, y: 0 }}
                                                        style={{
                                                            position: 'absolute',
                                                            bottom: 0,
                                                            left: 0,
                                                            right: 0,
                                                            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                                            padding: '20px 16px 16px',
                                                            textAlign: 'center'
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="h6"
                                                            sx={{
                                                                color: 'white',
                                                                fontWeight: 700,
                                                                fontSize: '1.1rem'
                                                            }}
                                                        >
                                                            {project.title}
                                                        </Typography>
                                                    </motion.div>

                                                    {/* Featured Badge */}
                                                    {project.featured && (
                                                        <motion.div
                                                            initial={{ scale: 0, rotate: -180 }}
                                                            animate={{ scale: 1, rotate: 0 }}
                                                            transition={{ delay: 0.5, type: "spring" }}
                                                            style={{
                                                                position: 'absolute',
                                                                top: 16,
                                                                right: 16,
                                                            }}
                                                        >
                                                            <Chip
                                                                icon={<StarIcon sx={{ color: 'primary.main' }} />}
                                                                label="Featured"
                                                                sx={{
                                                                    background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                                                                    color: 'primary.main',
                                                                    fontWeight: 'bold',
                                                                    '& .MuiChip-icon': {
                                                                        color: 'primary.main !important'
                                                                    }
                                                                }}
                                                            />
                                                        </motion.div>
                                                    )}

                                                    {/* Hover Action Buttons */}
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        whileHover={{ opacity: 1 }}
                                                        style={{
                                                            position: 'absolute',
                                                            top: '50%',
                                                            left: '50%',
                                                            transform: 'translate(-50%, -50%)',
                                                            display: 'flex',
                                                            gap: '12px',
                                                            zIndex: 2
                                                        }}
                                                    >
                                                        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                                                            <Button
                                                                variant="contained"
                                                                startIcon={<LaunchIcon />}
                                                                href={project.liveUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                sx={{
                                                                    background: 'rgba(255,255,255,0.95)',
                                                                    color: 'primary.main',
                                                                    fontWeight: 600,
                                                                    minWidth: 'auto',
                                                                    px: 2,
                                                                    '&:hover': {
                                                                        background: 'white',
                                                                        transform: 'translateY(-2px)'
                                                                    }
                                                                }}
                                                            >
                                                                Live
                                                            </Button>
                                                        </motion.div>
                                                    </motion.div>
                                                </Box>
                                            </motion.div>

                                            {/* Project Content */}
                                            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="h3"
                                                    fontWeight="bold"
                                                    sx={{
                                                        mb: 2,
                                                        background: 'linear-gradient(135deg, #ffffff 0%, #b0b0b0 100%)',
                                                        backgroundClip: 'text',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                    }}
                                                >
                                                    {project.title}
                                                </Typography>

                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    paragraph
                                                    sx={{
                                                        lineHeight: 1.6,
                                                        mb: 3,
                                                        fontSize: '0.95rem'
                                                    }}
                                                >
                                                    {project.description}
                                                </Typography>

                                                <Box display="flex" flexWrap="wrap" gap={1} mt="auto">
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <motion.div
                                                            key={techIndex}
                                                            whileHover={{
                                                                scale: 1.05,
                                                                y: -2
                                                            }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <Chip
                                                                label={tech}
                                                                size="small"
                                                                variant="outlined"
                                                                sx={{
                                                                    borderColor: 'secondary.main',
                                                                    color: 'primary.contrastText',
                                                                    fontWeight: 500,
                                                                    fontSize: '0.75rem',
                                                                    background: 'rgba(0, 255, 136, 0.05)'
                                                                }}
                                                            />
                                                        </motion.div>
                                                    ))}
                                                </Box>
                                            </CardContent>

                                            {/* Project Actions */}
                                            <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
                                                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                                                    <Button
                                                        size="medium"
                                                        startIcon={<GitHubIcon />}
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        sx={{
                                                            color: 'text.primary',
                                                            fontWeight: 600,
                                                            flex: 1,
                                                            '&:hover': {
                                                                color: 'secondary.main',
                                                                background: 'rgba(0, 255, 136, 0.05)'
                                                            }
                                                        }}
                                                    >
                                                        Code
                                                    </Button>
                                                </motion.div>

                                                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                                                    <Button
                                                        size="medium"
                                                        startIcon={<LaunchIcon />}
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        sx={{
                                                            background: 'linear-gradient(135deg, #00ff88, #00ccff)',
                                                            color: 'primary.main',
                                                            fontWeight: 700,
                                                            flex: 1,
                                                            px: 3,
                                                            '&:hover': {
                                                                background: 'linear-gradient(135deg, #00ccff, #00ff88)',
                                                                boxShadow: '0 8px 25px rgba(0, 255, 136, 0.3)'
                                                            }
                                                        }}
                                                    >
                                                        Demo
                                                    </Button>
                                                </motion.div>
                                            </CardActions>
                                        </ProjectCard>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </AnimatePresence>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Box
                        textAlign="center"
                        mt={12}
                        sx={{
                            background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.05), rgba(0, 204, 255, 0.05))',
                            borderRadius: '24px',
                            padding: '40px 24px',
                            border: '1px solid rgba(0, 255, 136, 0.1)'
                        }}
                    >
                        <Typography variant="h4" color="text.primary" mb={2} fontWeight={700}>
                            Ready to Build Something Amazing?
                        </Typography>

                        <Typography variant="h6" color="text.secondary" mb={4} maxWidth="500px" mx="auto">
                            Let's collaborate to bring your next project to life with cutting-edge technology and stunning design.
                        </Typography>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                variant="outlined"
                                size="large"
                                href="https://github.com/jesusvicken"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    borderColor: 'secondary.main',
                                    color: 'secondary.main',
                                    px: 6,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    borderWidth: '2px',
                                    '&:hover': {
                                        background: 'rgba(0, 255, 136, 0.1)',
                                        borderColor: 'secondary.light',
                                        borderWidth: '2px'
                                    }
                                }}
                                startIcon={<GitHubIcon />}
                            >
                                Explore More on GitHub
                            </Button>
                        </motion.div>
                    </Box>
                </motion.div>
            </Container>
        </StyledProjects>
    )
}

export default Projects