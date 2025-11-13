import { useState } from 'react';
import { Container, Typography, Box, styled, Grid, LinearProgress, Chip, Tabs, Tab } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PsychologyIcon from '@mui/icons-material/Psychology';
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
                radial-gradient(circle at 80% 20%, rgba(0, 255, 136, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 20% 80%, rgba(0, 204, 255, 0.08) 0%, transparent 50%)
            `,
        }
    }))

    const SkillCategory = styled(Box)(({ theme }) => ({
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: theme.spacing(4),
        borderRadius: '20px',
        height: '100%',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
        '&:hover': {
            borderColor: theme.palette.secondary.main,
            transform: 'translateY(-5px)',
        }
    }))

    const SkillBar = styled(LinearProgress)(({ theme }) => ({
        height: 8,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        '& .MuiLinearProgress-bar': {
            background: 'linear-gradient(45deg, #00ff88, #00ccff)',
            borderRadius: 10,
        }
    }))

    const SkillItem = styled(Box)({
        marginBottom: '24px',
        '&:last-child': {
            marginBottom: 0,
        }
    })

    const skillsData = {
        frontend: [
            { name: 'React', level: 95 },
            { name: 'TypeScript', level: 90 },
            { name: 'JavaScript', level: 98 },
            { name: 'Next.js', level: 85 },
            { name: 'Material-UI', level: 92 },
            { name: 'Tailwind CSS', level: 88 }
        ],
        backend: [
            { name: 'Node.js', level: 90 },
            { name: 'Python', level: 85 },
            { name: 'Java', level: 75 },
            { name: 'PostgreSQL', level: 88 },
            { name: 'MongoDB', level: 82 },
            { name: 'Redis', level: 78 }
        ],
        mobile: [
            { name: 'React Native', level: 85 },
            { name: 'Flutter', level: 70 },
            { name: 'iOS Development', level: 65 },
            { name: 'Android Development', level: 68 }
        ]
    }

    const tools = [
        'Git & GitHub',
        'Docker',
        'AWS',
        'Figma',
        'Jest',
        'Webpack',
        'VS Code',
        'Postman'
    ]

    const softSkills = [
        'Comunicação Eficaz',
        'Trabalho em Equipe',
        'Resolução de Problemas',
        'Gestão de Tempo',
        'Adaptabilidade',
        'Pensamento Crítico',
        'Liderança',
        'Criatividade'
    ]

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <StyledSkills id="skills">
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
                    Skills & Technologies
                </Typography>

                <Typography
                    variant="h6"
                    textAlign="center"
                    color="text.secondary"
                    mb={6}
                    maxWidth="600px"
                    mx="auto"
                >
                    Domínio completo do stack tecnológico moderno, desde o frontend até o backend e mobile
                </Typography>

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
                        <Tab label="Backend" />
                        <Tab label="Mobile" />
                        <Tab label="Tools" />
                    </Tabs>
                </Box>

                {activeTab === 0 && (
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8}>
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
                                            <Typography variant="h6" fontWeight="500">
                                                {skill.name}
                                            </Typography>
                                            <Typography variant="body1" color="secondary.main" fontWeight="600">
                                                {skill.level}%
                                            </Typography>
                                        </Box>
                                        <SkillBar variant="determinate" value={skill.level} />
                                    </SkillItem>
                                ))}
                            </SkillCategory>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <SkillCategory>
                                <Box display="flex" alignItems="center" mb={3}>
                                    <PsychologyIcon sx={{ mr: 2, color: 'secondary.main', fontSize: 32 }} />
                                    <Typography variant="h5" fontWeight="bold">
                                        Soft Skills
                                    </Typography>
                                </Box>
                                <Box display="flex" flexWrap="wrap" gap={1}>
                                    {softSkills.map((skill, index) => (
                                        <Chip
                                            key={index}
                                            label={skill}
                                            variant="outlined"
                                            sx={{
                                                color: 'primary.contrastText',
                                                borderColor: 'secondary.main',
                                                mb: 1,
                                                fontWeight: 500,
                                            }}
                                        />
                                    ))}
                                </Box>
                            </SkillCategory>
                        </Grid>
                    </Grid>
                )}

                {activeTab === 1 && (
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8}>
                            <SkillCategory>
                                <Box display="flex" alignItems="center" mb={4}>
                                    <StorageIcon sx={{ mr: 2, color: 'secondary.main', fontSize: 32 }} />
                                    <Typography variant="h4" fontWeight="bold">
                                        Backend Development
                                    </Typography>
                                </Box>
                                {skillsData.backend.map((skill, index) => (
                                    <SkillItem key={index}>
                                        <Box display="flex" justifyContent="space-between" mb={1}>
                                            <Typography variant="h6" fontWeight="500">
                                                {skill.name}
                                            </Typography>
                                            <Typography variant="body1" color="secondary.main" fontWeight="600">
                                                {skill.level}%
                                            </Typography>
                                        </Box>
                                        <SkillBar variant="determinate" value={skill.level} />
                                    </SkillItem>
                                ))}
                            </SkillCategory>
                        </Grid>
                    </Grid>
                )}

                {activeTab === 2 && (
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8}>
                            <SkillCategory>
                                <Box display="flex" alignItems="center" mb={4}>
                                    <MobileFriendlyIcon sx={{ mr: 2, color: 'secondary.main', fontSize: 32 }} />
                                    <Typography variant="h4" fontWeight="bold">
                                        Mobile Development
                                    </Typography>
                                </Box>
                                {skillsData.mobile.map((skill, index) => (
                                    <SkillItem key={index}>
                                        <Box display="flex" justifyContent="space-between" mb={1}>
                                            <Typography variant="h6" fontWeight="500">
                                                {skill.name}
                                            </Typography>
                                            <Typography variant="body1" color="secondary.main" fontWeight="600">
                                                {skill.level}%
                                            </Typography>
                                        </Box>
                                        <SkillBar variant="determinate" value={skill.level} />
                                    </SkillItem>
                                ))}
                            </SkillCategory>
                        </Grid>
                    </Grid>
                )}

                {activeTab === 3 && (
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8}>
                            <SkillCategory>
                                <Box display="flex" alignItems="center" mb={4}>
                                    <DesignServicesIcon sx={{ mr: 2, color: 'secondary.main', fontSize: 32 }} />
                                    <Typography variant="h4" fontWeight="bold">
                                        Development Tools
                                    </Typography>
                                </Box>
                                <Box display="flex" flexWrap="wrap" gap={2}>
                                    {tools.map((tool, index) => (
                                        <Chip
                                            key={index}
                                            label={tool}
                                            sx={{
                                                background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                                                color: 'primary.main',
                                                fontWeight: 600,
                                                fontSize: '1rem',
                                                padding: '12px 16px',
                                                height: 'auto',
                                            }}
                                        />
                                    ))}
                                </Box>
                            </SkillCategory>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </StyledSkills>
    )
}

export default Skills