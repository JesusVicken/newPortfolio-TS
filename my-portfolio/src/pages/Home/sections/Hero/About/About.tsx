import { Container, Typography, Box, styled, Grid, Button, Card, CardContent } from "@mui/material"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import StorefrontIcon from '@mui/icons-material/Storefront'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

// Registrar o ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const About = () => {
    const sectionRef = useRef(null)
    const cardsRef = useRef([])
    const titleRef = useRef(null)
    const featuresRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animação do título
            gsap.fromTo(titleRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            )

            // Animação dos cards em sequência
            cardsRef.current.forEach((card, index) => {
                gsap.fromTo(card,
                    { y: 100, opacity: 0, scale: 0.8 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        delay: index * 0.2,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        }
                    }
                )
            })

            // Animação das features
            gsap.fromTo(featuresRef.current,
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: featuresRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            )

        }, sectionRef)

        return () => ctx.revert()
    }, [])

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

    const ServiceCard = styled(Card)(({ theme }) => ({
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: theme.spacing(4),
        textAlign: 'center',
        transition: 'all 0.4s ease',
        backdropFilter: 'blur(10px)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(45deg, #00ff88, #00ccff)',
            transform: 'scaleX(0)',
            transition: 'transform 0.4s ease',
        },
        '&:hover': {
            transform: 'translateY(-10px)',
            borderColor: 'rgba(0, 255, 136, 0.3)',
            boxShadow: `0 20px 40px rgba(0, 255, 136, 0.2)`,
            '&::before': {
                transform: 'scaleX(1)',
            }
        }
    }))

    const FeatureItem = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2),
        background: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        transition: 'all 0.3s ease',
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.05)',
            borderColor: 'rgba(0, 255, 136, 0.2)',
            transform: 'translateX(10px)'
        }
    }))

    const PriceTag = styled(Typography)(({ theme }) => ({
        fontSize: '3rem',
        fontWeight: 700,
        background: 'linear-gradient(45deg, #00ff88, #00ccff)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        lineHeight: 1,
        margin: '20px 0'
    }))

    const addToRefs = (el: any) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el)
        }
    }

    return (
        <StyledAbout id="about" ref={sectionRef}>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                {/* Título Principal */}
                <Box ref={titleRef} sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="h2"
                        component="h2"
                        gutterBottom
                        sx={{
                            mb: 2,
                            background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: { xs: '2.5rem', md: '3.5rem' }
                        }}
                    >
                        Sites Profissionais & Lojas Virtuais
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}>
                        Transforme sua presença digital com sites modernos, responsivos e otimizados para conversão
                    </Typography>
                </Box>

                <Grid container spacing={4} alignItems="center">
                    {/* Coluna de Features */}
                    <Grid item xs={12} lg={5} ref={featuresRef}>
                        <Typography variant="h4" gutterBottom sx={{ mb: 4, color: 'white' }}>
                            Por que escolher nossos serviços?
                        </Typography>

                        <FeatureItem>
                            <CheckCircleIcon sx={{ color: 'secondary.main', mr: 2 }} />
                            <Box>
                                <Typography variant="h6" color="white" gutterBottom>
                                    Design Responsivo
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Perfeito em todos os dispositivos
                                </Typography>
                            </Box>
                        </FeatureItem>

                        <FeatureItem>
                            <CheckCircleIcon sx={{ color: 'secondary.main', mr: 2 }} />
                            <Box>
                                <Typography variant="h6" color="white" gutterBottom>
                                    Otimizado para SEO
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Melhor posicionamento no Google
                                </Typography>
                            </Box>
                        </FeatureItem>

                        <FeatureItem>
                            <CheckCircleIcon sx={{ color: 'secondary.main', mr: 2 }} />
                            <Box>
                                <Typography variant="h6" color="white" gutterBottom>
                                    Alta Performance
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Carregamento rápido e eficiente
                                </Typography>
                            </Box>
                        </FeatureItem>

                        <FeatureItem>
                            <CheckCircleIcon sx={{ color: 'secondary.main', mr: 2 }} />
                            <Box>
                                <Typography variant="h6" color="white" gutterBottom>
                                    Suporte 24/7
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Suporte técnico sempre disponível
                                </Typography>
                            </Box>
                        </FeatureItem>

                        <Box sx={{ mt: 4, p: 3, background: 'rgba(0, 255, 136, 0.1)', borderRadius: '12px', border: '1px solid rgba(0, 255, 136, 0.2)' }}>
                            <Typography variant="h6" color="secondary.main" gutterBottom>
                                🎯 Resultados Garantidos
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Aumento médio de 300% nas conversões após a implementação
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Coluna de Serviços */}
                    <Grid item xs={12} lg={7}>
                        <Grid container spacing={3}>
                            {/* Site Profissional */}
                            <Grid item xs={12} md={6} ref={addToRefs}>
                                <ServiceCard>
                                    <DesignServicesIcon
                                        sx={{
                                            fontSize: 48,
                                            color: 'secondary.main',
                                            mb: 2
                                        }}
                                    />
                                    <Typography variant="h5" gutterBottom fontWeight="600" color="white">
                                        Site Profissional
                                    </Typography>
                                    <Typography color="text.secondary" paragraph>
                                        Site institucional moderno e responsivo para sua empresa
                                    </Typography>

                                    <PriceTag>R$ 1.497</PriceTag>

                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        ou 12x de R$ 149,70
                                    </Typography>

                                    <Box sx={{ textAlign: 'left', mb: 3 }}>
                                        <Typography variant="body2" color="white" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <CheckCircleIcon sx={{ fontSize: 16, color: 'secondary.main', mr: 1 }} />
                                            Design Responsivo
                                        </Typography>
                                        <Typography variant="body2" color="white" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <CheckCircleIcon sx={{ fontSize: 16, color: 'secondary.main', mr: 1 }} />
                                            5 Páginas Incluídas
                                        </Typography>
                                        <Typography variant="body2" color="white" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <CheckCircleIcon sx={{ fontSize: 16, color: 'secondary.main', mr: 1 }} />
                                            SEO Básico
                                        </Typography>
                                        <Typography variant="body2" color="white" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <CheckCircleIcon sx={{ fontSize: 16, color: 'secondary.main', mr: 1 }} />
                                            Formulário de Contato
                                        </Typography>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        fullWidth
                                        size="large"
                                        sx={{
                                            background: 'linear-gradient(45deg, #00ff88, #00cc66)',
                                            '&:hover': {
                                                background: 'linear-gradient(45deg, #00cc66, #00ff88)',
                                                transform: 'translateY(-2px)'
                                            },
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        Quero Meu Site
                                    </Button>
                                </ServiceCard>
                            </Grid>

                            {/* Loja Virtual */}
                            <Grid item xs={12} md={6} ref={addToRefs}>
                                <ServiceCard>
                                    <StorefrontIcon
                                        sx={{
                                            fontSize: 48,
                                            color: 'secondary.main',
                                            mb: 2
                                        }}
                                    />
                                    <Typography variant="h5" gutterBottom fontWeight="600" color="white">
                                        Loja Virtual
                                    </Typography>
                                    <Typography color="text.secondary" paragraph>
                                        E-commerce completo para vender seus produtos online
                                    </Typography>

                                    <PriceTag>R$ 2.997</PriceTag>

                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        ou 12x de R$ 299,70
                                    </Typography>

                                    <Box sx={{ textAlign: 'left', mb: 3 }}>
                                        <Typography variant="body2" color="white" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <CheckCircleIcon sx={{ fontSize: 16, color: 'secondary.main', mr: 1 }} />
                                            Catálogo de Produtos
                                        </Typography>
                                        <Typography variant="body2" color="white" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <CheckCircleIcon sx={{ fontSize: 16, color: 'secondary.main', mr: 1 }} />
                                            Carrinho de Compras
                                        </Typography>
                                        <Typography variant="body2" color="white" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <CheckCircleIcon sx={{ fontSize: 16, color: 'secondary.main', mr: 1 }} />
                                            Pagamento Integrado
                                        </Typography>
                                        <Typography variant="body2" color="white" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <CheckCircleIcon sx={{ fontSize: 16, color: 'secondary.main', mr: 1 }} />
                                            Painel Administrativo
                                        </Typography>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        fullWidth
                                        size="large"
                                        sx={{
                                            background: 'linear-gradient(45deg, #00ff88, #00cc66)',
                                            '&:hover': {
                                                background: 'linear-gradient(45deg, #00cc66, #00ff88)',
                                                transform: 'translateY(-2px)'
                                            },
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        Quero Minha Loja
                                    </Button>
                                </ServiceCard>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledAbout>
    )
}

export default About