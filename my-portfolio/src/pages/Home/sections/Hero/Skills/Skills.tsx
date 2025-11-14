import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Typography, Box, styled, Grid, Chip, Tabs, Tab, alpha } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageIcon from '@mui/icons-material/Storage';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';

const Skills = () => {
    const [activeTab, setActiveTab] = useState(0);

    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
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
                radial-gradient(circle at 80% 20%, ${alpha(theme.palette.secondary.main, 0.08)} 0%, transparent 50%),
                radial-gradient(circle at 20% 80%, ${alpha('#00ccff', 0.08)} 0%, transparent 50%)
            `,
        }
    }));

    const SkillCategory = styled(Box)(({ theme }) => ({
        background: alpha(theme.palette.background.paper, 0.6),
        border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
        padding: theme.spacing(4),
        borderRadius: '24px',
        height: '100%',
        backdropFilter: 'blur(20px)',
        position: 'relative',
        overflow: 'hidden',
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
    }));

    const SkillItem = styled(Box)({
        marginBottom: '28px',
        '&:last-child': {
            marginBottom: 0,
        }
    });

    const SkillBarContainer = styled(Box)(({ theme }) => ({
        width: '100%',
        height: 8,
        borderRadius: '10px',
        backgroundColor: alpha(theme.palette.common.white, 0.1),
        overflow: 'hidden',
        position: 'relative'
    }));

    const skillsData = {
        frontend: [
            { name: 'React', level: 95, color: '#61DAFB' },
            { name: 'TypeScript', level: 90, color: '#3178C6' },
            { name: 'JavaScript', level: 98, color: '#F7DF1E' },
            { name: 'Next.js', level: 85, color: '#000000' },
            { name: 'Material-UI', level: 92, color: '#007FFF' },
            { name: 'Tailwind CSS', level: 88, color: '#06B6D4' }
        ],
        backend: [
            { name: 'Node.js', level: 90, color: '#339933' },
            { name: 'Python', level: 85, color: '#3776AB' },
            { name: 'PostgreSQL', level: 88, color: '#336791' },
            { name: 'MongoDB', level: 82, color: '#47A248' },
            { name: 'Firebase', level: 80, color: '#FFCA28' },
            { name: 'Express.js', level: 85, color: '#000000' }
        ],
        tools: [
            { name: 'Git & GitHub', level: 95, color: '#F05032' },
            { name: 'Docker', level: 75, color: '#2496ED' },
            { name: 'Figma', level: 85, color: '#F24E1E' },
            { name: 'VS Code', level: 98, color: '#007ACC' },
            { name: 'Jest', level: 80, color: '#C21325' },
            { name: 'Webpack', level: 75, color: '#8DD6F9' }
        ]
    };

    const softSkills = [
        { name: 'Comunicação Eficaz', emoji: '💬' },
        { name: 'Trabalho em Equipe', emoji: '👥' },
        { name: 'Resolução de Problemas', emoji: '🔍' },
        { name: 'Gestão de Tempo', emoji: '⏰' },
        { name: 'Adaptabilidade', emoji: '🔄' },
        { name: 'Pensamento Crítico', emoji: '🎯' },
        { name: 'Liderança', emoji: '🌟' },
        { name: 'Criatividade', emoji: '🎨' }
    ];

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    // Animations otimizadas
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const skillBarVariants = {
        hidden: { width: 0 },
        visible: (level: number) => ({
            width: `${level}%`,
            transition: {
                duration: 1.2,
                ease: "easeOut",
                delay: 0.3
            }
        })
    };

    const chipVariants = {
        hover: {
            scale: 1.05,
            y: -2,
            transition: {
                duration: 0.2
            }
        },
        tap: {
            scale: 0.95
        }
    };

    const tabContent = [
        {
            icon: <CodeIcon sx={{ fontSize: 32 }} />,
            title: "Frontend Development",
            skills: skillsData.frontend
        },
        {
            icon: <StorageIcon sx={{ fontSize: 32 }} />,
            title: "Backend Development",
            skills: skillsData.backend
        },
        {
            icon: <DesignServicesIcon sx={{ fontSize: 32 }} />,
            title: "Tools & Technologies",
            skills: skillsData.tools
        },
        {
            icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
            title: "Soft Skills",
            skills: []
        }
    ];

    return (
        <StyledSkills id="skills">
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
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
                        Skills & Technologies
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
                            maxWidth="600px"
                            mx="auto"
                            sx={{ lineHeight: 1.7 }}
                        >
                            Domínio completo do stack tecnológico moderno, desde
                            <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}> frontend </Box>
                            até
                            <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}> backend </Box>
                            e
                            <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}> ferramentas de desenvolvimento </Box>
                        </Typography>
                    </motion.div>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Box sx={{
                        borderBottom: 1,
                        borderColor: 'rgba(255,255,255,0.1)',
                        mb: 6,
                    }}>
                        <Tabs
                            value={activeTab}
                            onChange={handleTabChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            centered
                            sx={{
                                '& .MuiTab-root': {
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    py: 2,
                                    px: 4,
                                    mx: 1,
                                    borderRadius: '12px 12px 0 0',
                                    transition: 'all 0.3s ease',
                                    minHeight: '60px',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 255, 136, 0.05)',
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: 'rgba(0, 255, 136, 0.1)',
                                    }
                                }
                            }}
                        >
                            <Tab icon={<CodeIcon />} iconPosition="start" label="Frontend" />
                            <Tab icon={<StorageIcon />} iconPosition="start" label="Backend" />
                            <Tab icon={<DesignServicesIcon />} iconPosition="start" label="Tools" />
                            <Tab icon={<PsychologyIcon />} iconPosition="start" label="Soft Skills" />
                        </Tabs>
                    </Box>
                </motion.div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {activeTab !== 3 ? (
                            <Grid container spacing={4}>
                                <Grid item xs={12} lg={8}>
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <SkillCategory>
                                            <Box display="flex" alignItems="center" mb={4}>
                                                <Box
                                                    sx={{
                                                        background: 'linear-gradient(135deg, #00ff88, #00ccff)',
                                                        borderRadius: '16px',
                                                        p: 1,
                                                        mr: 3,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    {tabContent[activeTab].icon}
                                                </Box>
                                                <Typography variant="h4" fontWeight="bold">
                                                    {tabContent[activeTab].title}
                                                </Typography>
                                            </Box>

                                            {tabContent[activeTab].skills.map((skill, index) => (
                                                <motion.div
                                                    key={index}
                                                    variants={itemVariants}
                                                    style={{ marginBottom: '28px' }}
                                                >
                                                    <SkillItem>
                                                        <Box display="flex" justifyContent="space-between" mb={2}>
                                                            <Box display="flex" alignItems="center" gap={2}>
                                                                <Box
                                                                    sx={{
                                                                        width: 12,
                                                                        height: 12,
                                                                        borderRadius: '50%',
                                                                        background: skill.color,
                                                                        boxShadow: `0 0 10px ${skill.color}`
                                                                    }}
                                                                />
                                                                <Typography variant="h6" fontWeight="600">
                                                                    {skill.name}
                                                                </Typography>
                                                            </Box>
                                                            <Typography
                                                                variant="body1"
                                                                color="secondary.main"
                                                                fontWeight="700"
                                                                sx={{ fontSize: '1.1rem' }}
                                                            >
                                                                {skill.level}%
                                                            </Typography>
                                                        </Box>

                                                        <SkillBarContainer>
                                                            <motion.div
                                                                custom={skill.level}
                                                                variants={skillBarVariants}
                                                                initial="hidden"
                                                                animate="visible"
                                                                style={{
                                                                    height: '100%',
                                                                    background: `linear-gradient(90deg, ${skill.color}, ${alpha(skill.color, 0.8)})`,
                                                                    borderRadius: '10px',
                                                                    boxShadow: `0 0 20px ${alpha(skill.color, 0.3)}`
                                                                }}
                                                            />
                                                        </SkillBarContainer>
                                                    </SkillItem>
                                                </motion.div>
                                            ))}
                                        </SkillCategory>
                                    </motion.div>
                                </Grid>

                                <Grid item xs={12} lg={4}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <SkillCategory sx={{ height: '100%' }}>
                                            <Box display="flex" alignItems="center" mb={4}>
                                                <Box
                                                    sx={{
                                                        background: 'linear-gradient(135deg, #ff6b6b, #ffa726)',
                                                        borderRadius: '16px',
                                                        p: 1,
                                                        mr: 3,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <PsychologyIcon sx={{ fontSize: 32, color: 'white' }} />
                                                </Box>
                                                <Typography variant="h5" fontWeight="bold">
                                                    Soft Skills
                                                </Typography>
                                            </Box>

                                            <Box display="flex" flexWrap="wrap" gap={1.5}>
                                                {softSkills.map((skill, index) => (
                                                    <motion.div
                                                        key={index}
                                                        variants={chipVariants}
                                                        whileHover="hover"
                                                        whileTap="tap"
                                                    >
                                                        <Chip
                                                            icon={<span style={{ fontSize: '1.2rem' }}>{skill.emoji}</span>}
                                                            label={skill.name}
                                                            variant="outlined"
                                                            sx={{
                                                                color: 'primary.contrastText',
                                                                borderColor: 'secondary.main',
                                                                fontWeight: 500,
                                                                fontSize: '0.9rem',
                                                                background: 'rgba(0, 255, 136, 0.05)',
                                                                '& .MuiChip-icon': {
                                                                    marginLeft: '8px',
                                                                    marginRight: '-4px'
                                                                }
                                                            }}
                                                        />
                                                    </motion.div>
                                                ))}
                                            </Box>
                                        </SkillCategory>
                                    </motion.div>
                                </Grid>
                            </Grid>
                        ) : (
                            // Soft Skills Full View
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <SkillCategory>
                                    <Box display="flex" alignItems="center" mb={4}>
                                        <Box
                                            sx={{
                                                background: 'linear-gradient(135deg, #ff6b6b, #ffa726)',
                                                borderRadius: '16px',
                                                p: 2,
                                                mr: 3,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <PsychologyIcon sx={{ fontSize: 40, color: 'white' }} />
                                        </Box>
                                        <Box>
                                            <Typography variant="h4" fontWeight="bold" mb={1}>
                                                Soft Skills & Competências
                                            </Typography>
                                            <Typography variant="h6" color="text.secondary">
                                                Habilidades interpessoais que fazem a diferença no desenvolvimento de projetos
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Grid container spacing={3}>
                                        {softSkills.map((skill, index) => (
                                            <Grid item xs={12} sm={6} md={3} key={index}>
                                                <motion.div
                                                    variants={itemVariants}
                                                    whileHover={{ scale: 1.05, y: -5 }}
                                                    style={{ height: '100%' }}
                                                >
                                                    <Box
                                                        sx={{
                                                            background: 'rgba(255, 255, 255, 0.05)',
                                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                                            borderRadius: '16px',
                                                            padding: 3,
                                                            textAlign: 'center',
                                                            height: '100%',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            transition: 'all 0.3s ease',
                                                            '&:hover': {
                                                                borderColor: 'secondary.main',
                                                                background: 'rgba(0, 255, 136, 0.05)'
                                                            }
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="h3"
                                                            sx={{ mb: 2, fontSize: '2.5rem' }}
                                                        >
                                                            {skill.emoji}
                                                        </Typography>
                                                        <Typography
                                                            variant="h6"
                                                            fontWeight="600"
                                                            textAlign="center"
                                                        >
                                                            {skill.name}
                                                        </Typography>
                                                    </Box>
                                                </motion.div>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </SkillCategory>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </Container>
        </StyledSkills>
    );
};

export default Skills;