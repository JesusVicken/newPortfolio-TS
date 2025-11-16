import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Typography, Box, styled, Grid, Card, CardContent, CardActions, Button, Chip, Tabs, Tab, alpha, useTheme, useMediaQuery } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar o ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [typedTitle, setTypedTitle] = useState('');
    const [typedSubtitle, setTypedSubtitle] = useState('');
    const [currentTypingIndex, setCurrentTypingIndex] = useState(0);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Textos para digitação
    const typingTexts = [
        "Sites de Sucesso",
        "Cases de Impacto Real",
        "Projetos que vende para sua Empresa",
        "Soluções Digitais Otimizadas"
    ];

    const subtitles = [
        "Projetos reais que geraram +300% de conversão para nossos clientes através de tecnologia moderna e design estratégico",
        "Cada projeto é uma história de sucesso, com métricas reais e resultados comprovados para negócios de todos os tamanhos",
        "Desenvolvemos soluções que não apenas impressionam visualmente, mas também geram retorno tangível para seus investimentos",
        "Da ideia à implementação, criamos experiências digitais que conquistam clientes e superam expectativas"
    ];

    // Refs para animações GSAP
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const tabsRef = useRef(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const ctaRef = useRef(null);

    // Efeito de digitação
    useEffect(() => {
        const currentTitle = typingTexts[currentTypingIndex];
        const currentSubtitle = subtitles[currentTypingIndex];

        let titleIndex = 0;
        let subtitleIndex = 0;

        // Reset para novo texto
        setTypedTitle('');
        setTypedSubtitle('');

        const titleInterval = setInterval(() => {
            if (titleIndex <= currentTitle.length) {
                setTypedTitle(currentTitle.substring(0, titleIndex));
                titleIndex++;
            } else {
                clearInterval(titleInterval);

                // Inicia digitação do subtítulo após título completo
                const subtitleInterval = setInterval(() => {
                    if (subtitleIndex <= currentSubtitle.length) {
                        setTypedSubtitle(currentSubtitle.substring(0, subtitleIndex));
                        subtitleIndex++;
                    } else {
                        clearInterval(subtitleInterval);

                        // Aguarda e muda para próximo texto
                        setTimeout(() => {
                            setCurrentTypingIndex((prev) =>
                                prev === typingTexts.length - 1 ? 0 : prev + 1
                            );
                        }, 3000);
                    }
                }, 30); // Velocidade do subtítulo
            }
        }, 100); // Velocidade do título

        return () => {
            clearInterval(titleInterval);
        };
    }, [currentTypingIndex]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animação do título principal (agora controlado pela digitação)
            gsap.fromTo(titleRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animação do subtítulo
            gsap.fromTo(subtitleRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: subtitleRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animação das tabs
            gsap.fromTo(tabsRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.6,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: tabsRef.current,
                        start: "top 85%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animação dos cards em stagger
            cardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.fromTo(card,
                        {
                            y: 100,
                            opacity: 0,
                            scale: 0.8,
                            rotationY: 15
                        },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            rotationY: 0,
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: "back.out(1.4)",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 90%",
                                end: "bottom 20%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }
            });

            // Animação da seção CTA
            gsap.fromTo(ctaRef.current,
                {
                    scale: 0.9,
                    opacity: 0,
                    y: 50
                },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.8)",
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 85%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Efeito parallax para o background
            gsap.to(sectionRef.current, {
                backgroundPosition: "50% 100%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, [activeFilter]);

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
        background: `
            radial-gradient(circle at 20% 80%, ${alpha(theme.palette.secondary.main, 0.08)} 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${alpha('#00ccff', 0.08)} 0%, transparent 50%),
            linear-gradient(180deg, ${theme.palette.background.default} 0%, ${alpha(theme.palette.background.default, 0.95)} 100%)
        `,
        backgroundSize: '100% 100%',
        backgroundPosition: '50% 0%',
    }))

    const ProjectCard = styled(Card)(({ theme }) => ({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: `linear-gradient(135deg, 
            ${alpha(theme.palette.background.paper, 0.9)} 0%, 
            ${alpha(theme.palette.background.paper, 0.7)} 100%
        )`,
        border: `1px solid ${alpha(theme.palette.secondary.main, 0.15)}`,
        borderRadius: '28px',
        backdropFilter: 'blur(20px)',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, 
                ${alpha(theme.palette.secondary.main, 0.1)} 0%, 
                transparent 50%,
                ${alpha('#00ccff', 0.05)} 100%)`,
            opacity: 0,
            transition: 'opacity 0.4s ease',
            zIndex: 1,
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, 
                transparent 0%, 
                ${alpha(theme.palette.background.default, 0.8)} 100%)`,
            opacity: 0,
            transition: 'opacity 0.4s ease',
            zIndex: 1,
        },
        '&:hover': {
            transform: 'translateY(-12px) scale(1.02)',
            borderColor: alpha(theme.palette.secondary.main, 0.4),
            boxShadow: `
                0 25px 50px ${alpha(theme.palette.secondary.main, 0.15)},
                0 0 0 1px ${alpha(theme.palette.secondary.main, 0.1)}
            `,
            '&::before': {
                opacity: 1,
            },
            '&::after': {
                opacity: 1,
            }
        }
    }))

    const projectsData = [
        {
            title: 'Constrictor Team',
            description: 'Site oficial da Constrictor Team com design moderno e responsivo, showcasing de produtos e serviços.',
            technologies: ['React', 'TypeScript', 'Material-UI', 'Vite'],
            githubUrl: 'https://github.com/JesusVicken/constrictorteam',
            liveUrl: 'https://www.constrictorteam.com.br/',
            image: '/constrictor.jpg',
            category: 'frontend',
            featured: true,
            stats: { clients: '50+', conversion: '40%' }
        },
        {
            title: 'CPP Extreme Landing Page',
            description: 'Plataforma fitness com sistema de agendamentos, planos de treino e área do aluno integrada.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            githubUrl: 'https://github.com/JesusVicken/cppextremebsb',
            liveUrl: 'https://cppextremebsb.vercel.app/',
            image: '/cpp.jpg',
            category: 'fullstack',
            featured: true,
            stats: { clients: '200+', conversion: '35%' }
        },
        {
            title: 'Tati Neuro',
            description: 'Site profissional para neuropsicóloga com blog integrado, agendamento online e área de pacientes.',
            technologies: ['Next.js', 'TypeScript', 'Styled Components'],
            githubUrl: 'https://github.com/jesusvicken/tatineuro',
            liveUrl: 'https://tatineuro.vercel.app/',
            image: '/tati.jpg',
            category: 'frontend',
            stats: { clients: '80+', conversion: '25%' }
        },
        {
            title: 'Depireux Fit',
            description: 'Plataforma de coaching fitness com sistema de planos alimentares, acompanhamento e métricas.',
            technologies: ['React', 'Firebase', 'Chart.js', 'PWA'],
            githubUrl: 'https://github.com/JesusVicken/depireuxfitness',
            liveUrl: 'https://depireuxfit.vercel.app/',
            image: '/cris.jpg',
            category: 'fullstack',
            stats: { clients: '150+', conversion: '30%' }
        },
        {
            title: 'Cubic Esquadrias',
            description: 'Site institucional para empresa de esquadrias em alumínio com catálogo de produtos e orçamentos.',
            technologies: ['React', 'Material-UI', 'Formik', 'EmailJS'],
            githubUrl: 'https://github.com/jesusvicken/cubicesquadrias',
            liveUrl: 'https://cubicesquadrias.vercel.app/',
            image: '/cubic.JPG',
            category: 'frontend',
            stats: { clients: '45+', conversion: '28%' }
        },
        {
            title: 'Carolina Nantet',
            description: 'Portfolio profissional com design elegante, showcase de trabalhos e formulário de contato integrado.',
            technologies: ['React', 'Framer Motion', 'Styled Components'],
            githubUrl: 'https://github.com/JesusVicken/nantetfisioterapeuta',
            liveUrl: 'https://carolinanantet.vercel.app/',
            image: '/carol.jpg',
            category: 'frontend',
            stats: { clients: '60+', conversion: '22%' }
        }
    ]

    const filteredProjects = activeFilter === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === activeFilter);

    const handleFilterChange = (event: React.SyntheticEvent, newValue: string) => {
        setActiveFilter(newValue);
    };

    const addToCardsRef = (el: HTMLDivElement | null, index: number) => {
        cardsRef.current[index] = el;
    };

    // Animação hover para stats
    const handleCardHover = (index: number) => {
        setHoveredProject(index);
        if (cardsRef.current[index]) {
            gsap.to(cardsRef.current[index], {
                y: -15,
                rotationX: 5,
                duration: 0.6,
                ease: "back.out(1.7)"
            });
        }
    };

    const handleCardLeave = (index: number) => {
        setHoveredProject(null);
        if (cardsRef.current[index]) {
            gsap.to(cardsRef.current[index], {
                y: 0,
                rotationX: 0,
                duration: 0.6,
                ease: "back.out(1.7)"
            });
        }
    };

    return (
        <StyledProjects id="projects" ref={sectionRef}>
            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                {/* Header Section com Digitação */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        ref={titleRef}
                        variant="h1"
                        component="h2"
                        gutterBottom
                        sx={{
                            background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 50%, #0099ff 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 900,
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1,
                            mb: 3,
                            minHeight: '120px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {typedTitle}
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            style={{
                                marginLeft: '4px',
                                color: '#00ff88'
                            }}
                        >
                            |
                        </motion.span>
                    </Typography>

                    <Typography
                        ref={subtitleRef}
                        variant="h5"
                        color="text.secondary"
                        sx={{
                            maxWidth: '800px',
                            mx: 'auto',
                            lineHeight: 1.6,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            fontWeight: 300,
                            minHeight: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {typedSubtitle}
                    </Typography>

                    {/* Indicador de Progresso */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 1 }}>
                        {typingTexts.map((_, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: currentTypingIndex === index
                                        ? 'secondary.main'
                                        : 'rgba(255,255,255,0.2)',
                                    transition: 'all 0.3s ease'
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                {/* Filter Tabs */}
                <Box ref={tabsRef} sx={{ mb: 8 }}>
                    <Tabs
                        value={activeFilter}
                        onChange={handleFilterChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        centered
                        sx={{
                            '& .MuiTab-root': {
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                py: 2.5,
                                px: 5,
                                mx: 1,
                                borderRadius: '16px',
                                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                background: 'rgba(255,255,255,0.02)',
                                border: '2px solid transparent',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 255, 136, 0.08)',
                                    borderColor: 'rgba(0, 255, 136, 0.2)',
                                    transform: 'translateY(-2px)'
                                },
                                '&.Mui-selected': {
                                    backgroundColor: 'rgba(0, 255, 136, 0.12)',
                                    borderColor: 'secondary.main',
                                    boxShadow: '0 8px 32px rgba(0, 255, 136, 0.15)'
                                }
                            },
                            '& .MuiTabs-indicator': {
                                display: 'none'
                            }
                        }}
                    >
                        <Tab label="🎯 Todos os Projetos" value="all" />
                        <Tab label="⚡ Fullstack" value="fullstack" />
                        <Tab label="🎨 Frontend" value="frontend" />
                    </Tabs>
                </Box>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <Grid container spacing={4}>
                        {filteredProjects.map((project, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <Box
                                    ref={(el) => addToCardsRef(el as HTMLDivElement | null, index)}
                                    onMouseEnter={() => handleCardHover(index)}
                                    onMouseLeave={() => handleCardLeave(index)}
                                    sx={{ height: '100%' }}
                                >
                                    <ProjectCard>
                                        {/* Project Image */}
                                        <Box
                                            sx={{
                                                height: '260px',
                                                overflow: 'hidden',
                                                position: 'relative',
                                                background: `linear-gradient(45deg, 
                                                    ${alpha(theme.palette.secondary.main, 0.1)}, 
                                                    ${alpha('#00ccff', 0.1)}
                                                ), url(${project.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                display: 'flex',
                                                alignItems: 'flex-end',
                                                justifyContent: 'space-between',
                                                p: 3
                                            }}
                                        >
                                            {/* Stats Overlay */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileHover={{ opacity: 1, y: 0 }}
                                                style={{
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: 0,
                                                    right: 0,
                                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                                                    padding: '20px 24px 16px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Box>
                                                    <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                                                        {project.stats.clients} Clientes
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: 'white', fontSize: '0.8rem' }}>
                                                        Atendidos
                                                    </Typography>
                                                </Box>
                                                <Box textAlign="right">
                                                    <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                                                        {project.stats.conversion} Conversão
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: 'white', fontSize: '0.8rem' }}>
                                                        Taxa Média
                                                    </Typography>
                                                </Box>
                                            </motion.div>

                                            {/* Featured Badge */}
                                            {project.featured && (
                                                <motion.div
                                                    initial={{ scale: 0, rotate: -180 }}
                                                    animate={{ scale: 1, rotate: 0 }}
                                                    transition={{ delay: 0.5, type: "spring" }}
                                                >
                                                    <Chip
                                                        icon={<StarIcon sx={{ color: 'primary.main' }} />}
                                                        label="Destaque"
                                                        sx={{
                                                            background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                                                            color: 'primary.main',
                                                            fontWeight: 'bold',
                                                            fontSize: '0.8rem',
                                                            height: '32px'
                                                        }}
                                                    />
                                                </motion.div>
                                            )}

                                            {/* Action Buttons */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileHover={{ opacity: 1, scale: 1 }}
                                                style={{
                                                    display: 'flex',
                                                    gap: '8px',
                                                    zIndex: 2
                                                }}
                                            >
                                                <Button
                                                    size="small"
                                                    startIcon={<GitHubIcon />}
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    sx={{
                                                        background: 'rgba(0,0,0,0.8)',
                                                        color: 'white',
                                                        minWidth: 'auto',
                                                        px: 2,
                                                        borderRadius: '20px',
                                                        '&:hover': {
                                                            background: 'rgba(0,0,0,0.9)',
                                                            transform: 'translateY(-2px)'
                                                        }
                                                    }}
                                                />
                                                <Button
                                                    size="small"
                                                    startIcon={<LaunchIcon />}
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    sx={{
                                                        background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                                                        color: 'primary.main',
                                                        minWidth: 'auto',
                                                        px: 2,
                                                        borderRadius: '20px',
                                                        fontWeight: 'bold',
                                                        '&:hover': {
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 8px 20px rgba(0, 255, 136, 0.3)'
                                                        }
                                                    }}
                                                />
                                            </motion.div>
                                        </Box>

                                        {/* Project Content */}
                                        <CardContent sx={{ flexGrow: 1, p: 4, position: 'relative', zIndex: 2 }}>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h3"
                                                fontWeight="800"
                                                sx={{
                                                    mb: 2,
                                                    background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                                                    backgroundClip: 'text',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    fontSize: '1.4rem'
                                                }}
                                            >
                                                {project.title}
                                            </Typography>

                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                sx={{
                                                    lineHeight: 1.6,
                                                    mb: 3,
                                                    fontSize: '0.95rem',
                                                    minHeight: '72px'
                                                }}
                                            >
                                                {project.description}
                                            </Typography>

                                            {/* Technologies */}
                                            <Box display="flex" flexWrap="wrap" gap={1}>
                                                {project.technologies.map((tech, techIndex) => (
                                                    <motion.div
                                                        key={techIndex}
                                                        whileHover={{ scale: 1.1, y: -2 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <Chip
                                                            label={tech}
                                                            size="small"
                                                            sx={{
                                                                background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 204, 255, 0.1))',
                                                                border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                                                                color: 'primary.contrastText',
                                                                fontWeight: 600,
                                                                fontSize: '0.7rem',
                                                                height: '28px'
                                                            }}
                                                        />
                                                    </motion.div>
                                                ))}
                                            </Box>
                                        </CardContent>

                                        {/* Project Actions */}
                                        <CardActions sx={{ p: 4, pt: 0, gap: 2 }}>
                                            <Button
                                                fullWidth
                                                variant="outlined"
                                                startIcon={<GitHubIcon />}
                                                href={project.githubUrl}
                                                target="_blank"
                                                sx={{
                                                    borderColor: 'rgba(255,255,255,0.3)',
                                                    color: 'text.primary',
                                                    fontWeight: 600,
                                                    py: 1.5,
                                                    borderRadius: '14px',
                                                    '&:hover': {
                                                        borderColor: 'secondary.main',
                                                        background: 'rgba(0, 255, 136, 0.05)',
                                                        transform: 'translateY(-2px)'
                                                    }
                                                }}
                                            >
                                                Código
                                            </Button>
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                startIcon={<LaunchIcon />}
                                                href={project.liveUrl}
                                                target="_blank"
                                                sx={{
                                                    background: 'linear-gradient(135deg, #00ff88, #00ccff)',
                                                    color: 'primary.main',
                                                    fontWeight: 700,
                                                    py: 1.5,
                                                    borderRadius: '14px',
                                                    boxShadow: '0 8px 25px rgba(0, 255, 136, 0.2)',
                                                    '&:hover': {
                                                        background: 'linear-gradient(135deg, #00ccff, #00ff88)',
                                                        boxShadow: '0 12px 35px rgba(0, 255, 136, 0.3)',
                                                        transform: 'translateY(-2px)'
                                                    }
                                                }}
                                            >
                                                Ver Site
                                            </Button>
                                        </CardActions>
                                    </ProjectCard>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </AnimatePresence>

                {/* CTA Section */}
                <Box ref={ctaRef} sx={{ mt: 12 }}>
                    <Box
                        sx={{
                            background: `linear-gradient(135deg, 
                                ${alpha(theme.palette.secondary.main, 0.08)} 0%, 
                                ${alpha('#00ccff', 0.08)} 100%
                            )`,
                            borderRadius: '32px',
                            padding: { xs: '40px 24px', md: '60px 40px' },
                            border: `2px solid ${alpha(theme.palette.secondary.main, 0.15)}`,
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: `radial-gradient(circle at 30% 70%, 
                                    ${alpha(theme.palette.secondary.main, 0.1)} 0%, 
                                    transparent 50%
                                )`,
                            }
                        }}
                    >
                        <Typography variant="h3" color="text.primary" mb={3} fontWeight={800}>
                            Pronto para Transformar Sua Ideia em Realidade?
                        </Typography>

                        <Typography variant="h6" color="text.secondary" mb={4} sx={{ maxWidth: '600px', mx: 'auto' }}>
                            Vamos criar juntos um projeto que vai impressionar seus clientes e gerar resultados reais para seu negócio.
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    href="#contact"
                                    sx={{
                                        background: 'linear-gradient(135deg, #00ff88, #00ccff)',
                                        color: 'primary.main',
                                        px: 6,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        fontWeight: 700,
                                        borderRadius: '16px',
                                        boxShadow: '0 12px 30px rgba(0, 255, 136, 0.25)',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #00ccff, #00ff88)',
                                            boxShadow: '0 16px 40px rgba(0, 255, 136, 0.35)',
                                            transform: 'translateY(-3px)'
                                        }
                                    }}
                                >
                                    Iniciar Projeto
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    href="https://github.com/jesusvicken"
                                    target="_blank"
                                    startIcon={<GitHubIcon />}
                                    sx={{
                                        borderColor: 'secondary.main',
                                        color: 'secondary.main',
                                        px: 5,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        borderRadius: '16px',
                                        borderWidth: '2px',
                                        '&:hover': {
                                            background: 'rgba(0, 255, 136, 0.1)',
                                            borderColor: 'secondary.light',
                                            borderWidth: '2px',
                                            transform: 'translateY(-3px)'
                                        }
                                    }}
                                >
                                    Ver GitHub
                                </Button>
                            </motion.div>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </StyledProjects>
    )
}

export default Projects