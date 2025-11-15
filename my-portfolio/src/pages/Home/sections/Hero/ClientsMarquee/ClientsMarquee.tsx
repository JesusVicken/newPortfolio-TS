import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const logos: string[] = [
    "/logos/cris.png",
    "/logos/constrictor.png",
    "/logos/arruas2.png",
    "/logos/cubic.png",
    "/logos/tati.png",
    "/logos/carol.png",
    "/logos/cpp2.png",
    "/logos/camara.svg",
];

export default function ClientsMarquee() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                width: "100%",
                overflow: "hidden",
                py: { xs: 3, md: 4 },
                background: "rgba(10,10,10,0.6)",
                backdropFilter: "blur(8px)",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                position: 'relative',
            }}
        >
            {/* Section Title - Mais minimalista */}
            <Box sx={{ textAlign: 'center', mb: { xs: 2, md: 3 } }}>
                <Typography
                    variant="h6"
                    component={motion.p}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    sx={{
                        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                        fontWeight: 300,
                        color: 'rgba(255,255,255,0.6)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        maxWidth: '500px',
                        mx: 'auto',
                        px: 2,
                    }}
                >
                    Empresas que confiam no nosso trabalho
                </Typography>
            </Box>

            {/* Single Marquee com loop infinito */}
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}
            >
                <motion.div
                    style={{
                        display: "flex",
                        alignItems: 'center',
                        gap: '1.5rem',
                        width: 'max-content', // Importante para o loop
                    }}
                    animate={{
                        x: [0, -((logos.length * 150) + (logos.length * 24))] // Calcula a distância exata
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 20, // Velocidade ajustada
                        ease: "linear",
                        repeatType: "loop",
                    }}
                >
                    {/* Renderiza várias vezes para garantir continuidade */}
                    {[...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <Box
                            key={`logo-${index}`}
                            component={motion.div}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            sx={{
                                height: { xs: "40px", sm: "45px", md: "50px" },
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: { xs: 0.5, md: 1 },
                                borderRadius: 1,
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.03)',
                                backdropFilter: 'blur(4px)',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                flexShrink: 0,
                                minWidth: '120px', // Largura mínima consistente
                            }}
                        >
                            <img
                                src={logo}
                                alt={`client-logo-${index % logos.length}`}
                                style={{
                                    height: "100%",
                                    width: "auto",
                                    maxWidth: "100px",
                                    objectFit: "contain",
                                    opacity: 0.7,
                                    filter: "brightness(0) invert(1)",
                                    transition: 'all 0.2s ease',
                                }}
                            />
                        </Box>
                    ))}
                </motion.div>

                {/* Gradient Overlays mais suaves */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        pointerEvents: 'none',
                        background: `
                            linear-gradient(90deg, 
                                rgba(10,10,10,0.9) 0%, 
                                transparent 20px, 
                                transparent calc(100% - 20px), 
                                rgba(10,10,10,0.9) 100%)
                        `,
                        zIndex: 2,
                    }}
                />
            </Box>
        </Box>
    );
}