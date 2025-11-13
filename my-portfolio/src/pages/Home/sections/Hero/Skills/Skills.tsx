// Skills.tsx CORRIGIDO PARA FRAMER MOTION 11

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box, styled, Grid, LinearProgress, Chip, Tabs, Tab } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';

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
                radial-gradient(circle at 80% 20%, rgba(0, 255, 136, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 20% 80%, rgba(0, 204, 255, 0.08) 0%, transparent 50%)
            `,
        }
    }));

    const SkillCategory = styled(Box)(({ theme }) => ({
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: theme.spacing(4),
        borderRadius: '20px',
        height: '100%',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
    }));

    const SkillItem = styled(Box)({
        marginBottom: '24px',
        '&:last-child': {
            marginBottom: 0,
        }
    });

    const skillsData = {
        frontend: [
            { name: 'React', level: 95 },
            { name: 'TypeScript', level: 90 },
            { name: 'JavaScript', level: 98 },
            { name: 'Next.js', level: 85 },
            { name: 'Material-UI', level: 92 },
            { name: 'Tailwind CSS', level: 88 }
        ]
    };

    const softSkills = [
        'Comunicação Eficaz',
        'Trabalho em Equipe',
        'Resolução de Problemas',
        'Gestão de Tempo',
        'Adaptabilidade',
        'Pensamento Crítico',
        'Liderança',
        'Criatividade'
    ];

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    // Variants corrigidos
    const categoryVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as any
            }
        },
        hover: {
            y: -5,
            borderColor: '#00ff88',
            transition: {
                duration: 0.3,
                ease: [0.4, 0.0, 0.2, 1]
            }
        }
    };

    const skillBarVariants = {
        hidden: { width: 0 },
        visible: (level: number) => ({
            width: `${level}%`,
            transition: {
                duration: 1.5,
                ease: "easeOut" as any,
                delay: 0.5
            }
        })
    };

    return (
        <StyledSkills id="skills">
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
                        textAlign="center"
                        mb={2}
                        sx={{
                            background: 'linear-gradient(45deg, #ffffff, #b0b0b0)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Skills & Technologies
                    </Typography>

                    <Typography
                        variant="h6"
                        textAlign="center"
                        color="text.secondary"
                        mb={6}
                    >
                        Domínio completo do stack tecnológico moderno
                    </Typography>
                </motion.div>

                {/* Tabs */}
                <Box sx={{ borderBottom: 1, borderColor: 'rgba(255,255,255,0.1)', mb: 6 }}>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        centered
                    >
                        <Tab label="Frontend" />
                        <Tab label="Soft Skills" />
                    </Tabs>
                </Box>

                <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {activeTab === 0 && (
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={8}>
                                <motion.div
                                    variants={categoryVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    whileHover="hover"
                                    viewport={{ once: true }}
                                >
                                    <SkillCategory>
                                        <Box display="flex" alignItems="center" mb={4}>
                                            <CodeIcon sx={{ mr: 2, color: 'secondary.main', fontSize: 32 }} />
                                            <Typography variant="h4" fontWeight="bold">
                                                Frontend Development
                                            </Typography>
                                        </Box>

                                        {skillsData.frontend.map((skill, index) => (
                                            <SkillItem key={index}>
                                                <Box display="flex" justifyContent="space-between" mb={1}>
                                                    <Typography variant="h6">
                                                        {skill.name}
                                                    </Typography>
                                                    <Typography color="secondary.main" fontWeight={600}>
                                                        {skill.level}%
                                                    </Typography>
                                                </Box>

                                                <Box sx={{
                                                    width: '100%',
                                                    height: 8,
                                                    borderRadius: 10,
                                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                    overflow: 'hidden'
                                                }}>
                                                    <motion.div
                                                        custom={skill.level}
                                                        variants={skillBarVariants}
                                                        initial="hidden"
                                                        whileInView="visible"
                                                        viewport={{ once: true }}
                                                        style={{
                                                            height: '100%',
                                                            background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                                                            borderRadius: 10,
                                                        }}
                                                    />
                                                </Box>
                                            </SkillItem>
                                        ))}
                                    </SkillCategory>
                                </motion.div>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <motion.div
                                    variants={categoryVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    whileHover="hover"
                                >
                                    <SkillCategory>
                                        <Box display="flex" alignItems="center" mb={3}>
                                            <PsychologyIcon sx={{ mr: 2, color: 'secondary.main', fontSize: 32 }} />
                                            <Typography variant="h5" fontWeight="bold">
                                                Soft Skills
                                            </Typography>
                                        </Box>

                                        <Box display="flex" flexWrap="wrap" gap={1}>
                                            {softSkills.map((skill, index) => (
                                                <motion.div key={index} whileHover={{ scale: 1.05 }}>
                                                    <Chip
                                                        label={skill}
                                                        variant="outlined"
                                                        sx={{
                                                            color: 'primary.contrastText',
                                                            borderColor: 'secondary.main',
                                                            mb: 1
                                                        }}
                                                    />
                                                </motion.div>
                                            ))}
                                        </Box>
                                    </SkillCategory>
                                </motion.div>
                            </Grid>
                        </Grid>
                    )}
                </motion.div>
            </Container>
        </StyledSkills>
    );
};

export default Skills;
