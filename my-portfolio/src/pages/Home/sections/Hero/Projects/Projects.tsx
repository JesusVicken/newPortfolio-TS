// Projects.tsx CORRIGIDO PARA FRAMER MOTION 11

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Container, Typography, Box, styled, Grid, Card, CardContent,
    CardActions, Button, Chip, Tabs, Tab
} from "@mui/material";
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
    }));

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
    }));

    // PROJETOS
    const projectsData = [ /* ... o mesmo conteúdo que você enviou ... */];

    const filteredProjects =
        activeFilter === 'all'
            ? projectsData
            : projectsData.filter(project => project.category === activeFilter);

    const handleFilterChange = (event: React.SyntheticEvent, newValue: string) => {
        setActiveFilter(newValue);
    };

    // VARIANTS corrigidos
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut" as any
            }
        },
        hover: {
            y: -12,
            scale: 1.02,
            borderColor: '#00ff88',
            boxShadow: '0 25px 50px rgba(0, 255, 136, 0.2)',
            transition: {
                duration: 0.3,
                ease: [0.4, 0.0, 0.2, 1]
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.4,
                ease: "easeOut" as any
            }
        }
    };

    return (
        <StyledProjects id="projects">
            <Container maxWidth="lg">

                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="h2"
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
                        Confira alguns dos meus trabalhos mais recentes
                    </Typography>
                </motion.div>

                {/* FILTER TABS */}
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

                {/* LISTA DE PROJETOS */}
                <Grid container spacing={4}>
                    {filteredProjects.map((project, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                viewport={{ once: true }}
                            >
                                <ProjectCard>
                                    {/* IMAGEM DO PROJETO */}
                                    <motion.div variants={imageVariants}>
                                        <Box
                                            sx={{
                                                height: '200px',
                                                background: `url(${project.image}) center/cover no-repeat`,
                                                position: 'relative'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    bottom: 0,
                                                    left: 0,
                                                    right: 0,
                                                    background: 'rgba(0,0,0,0.4)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 'bold',
                                                    color: 'white',
                                                    fontSize: '1.5rem'
                                                }}
                                            >
                                                {project.title}
                                            </Box>
                                        </Box>
                                    </motion.div>

                                    <CardContent>
                                        <Typography variant="h5" fontWeight="bold">
                                            {project.title}
                                        </Typography>

                                        <Typography color="text.secondary" paragraph>
                                            {project.description}
                                        </Typography>

                                        <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
                                            {project.technologies.map((tech, i) => (
                                                <Chip
                                                    key={i}
                                                    label={tech}
                                                    size="small"
                                                    variant="outlined"
                                                    sx={{
                                                        borderColor: 'secondary.main',
                                                        color: 'primary.contrastText'
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </CardContent>

                                    <CardActions sx={{ p: 3, pt: 0 }}>
                                        <Button
                                            startIcon={<GitHubIcon />}
                                            href={project.githubUrl}
                                            target="_blank"
                                        >
                                            Code
                                        </Button>

                                        <Button
                                            startIcon={<LaunchIcon />}
                                            href={project.liveUrl}
                                            target="_blank"
                                            sx={{
                                                background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                                                color: 'primary.main',
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

            </Container>
        </StyledProjects>
    );
};

export default Projects;
