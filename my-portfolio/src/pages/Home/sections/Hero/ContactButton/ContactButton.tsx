import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const whatsappLink =
    "https://api.whatsapp.com/send?phone=5561981778422&text=Olá!%20Vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.";

export default function ContactBanner() {
    return (
        <Box
            sx={{
                width: "100%",
                overflow: "hidden",
                py: { xs: 4, md: 5 },
                background: "linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(20,20,20,0.98) 100%)",
                backdropFilter: "blur(16px)",
                borderTop: "1px solid rgba(0, 255, 136, 0.15)",
                borderBottom: "1px solid rgba(0, 255, 136, 0.15)",
                cursor: "pointer",
                position: "relative",
                transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                '&:hover': {
                    background: "linear-gradient(135deg, rgba(15,15,15,0.98) 0%, rgba(25,25,25,0.99) 100%)",
                    borderTop: "1px solid rgba(0, 255, 136, 0.4)",
                    borderBottom: "1px solid rgba(0, 255, 136, 0.4)",
                    boxShadow: `
                        0 0 40px rgba(0, 255, 136, 0.15),
                        inset 0 1px 0 rgba(255,255,255,0.1),
                        inset 0 -1px 0 rgba(255,255,255,0.1)
                    `,
                    transform: "translateY(-2px)",
                }
            }}
            onClick={() => window.open(whatsappLink, "_blank")}
        >
            {/* Texto Principal - Movendo para direita */}
            <motion.div
                style={{
                    whiteSpace: "nowrap",
                    display: "inline-block",
                }}
                animate={{ x: ["100%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 18,
                    ease: "linear",
                }}
            >
                <Typography
                    component="span"
                    sx={{
                        fontWeight: 900,
                        fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "5.5rem" },
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "transparent",
                        WebkitTextStroke: "2px rgba(0, 255, 136, 0.9)",
                        textStroke: "2px rgba(0, 255, 136, 0.9)",
                        padding: "0 3rem",
                        transition: "all 0.3s ease",
                        textShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
                        '&:hover': {
                            WebkitTextStroke: "2px rgba(0, 255, 136, 1)",
                            textStroke: "2px rgba(0, 255, 136, 1)",
                            textShadow: "0 0 30px rgba(0, 255, 136, 0.5)",
                        }
                    }}
                >
                     VAMOS CRIAR JUNTOS 
                </Typography>
            </motion.div>

            {/* Texto Secundário - Movendo para esquerda */}
            <motion.div
                style={{
                    whiteSpace: "nowrap",
                    display: "inline-block",
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 16,
                    ease: "linear",
                }}
            >
                <Typography
                    component="span"
                    sx={{
                        fontWeight: 800,
                        fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem", lg: "4rem" },
                        textTransform: "uppercase",
                        letterSpacing: "0.18em",
                        color: "transparent",
                        WebkitTextStroke: "1.5px rgba(0, 204, 255, 0.8)",
                        textStroke: "1.5px rgba(0, 204, 255, 0.8)",
                        padding: "0 3rem",
                        fontStyle: "italic",
                        textShadow: "0 0 15px rgba(0, 204, 255, 0.2)",
                        transition: "all 0.3s ease",
                        '&:hover': {
                            WebkitTextStroke: "1.5px rgba(0, 204, 255, 1)",
                            textStroke: "1.5px rgba(0, 204, 255, 1)",
                            textShadow: "0 0 25px rgba(0, 204, 255, 0.4)",
                        }
                    }}
                >
                    ● ENTRE EM CONTATO ●
                </Typography>
            </motion.div>

            {/* Texto Terciário - Movimento mais lento */}
            <motion.div
                style={{
                    whiteSpace: "nowrap",
                    display: "inline-block",
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                }}
                animate={{ x: ["100%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 22,
                    ease: "linear",
                    delay: 1
                }}
            >
               
            </motion.div>

            {/* Overlay de Gradiente Mais Sofisticado */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background: `
                        linear-gradient(90deg, 
                            rgba(10,10,10,0.95) 0%, 
                            transparent 120px,
                            transparent calc(100% - 120px),
                            rgba(10,10,10,0.95) 100%
                        ),
                        radial-gradient(
                            ellipse at 30% 50%,
                            rgba(0, 255, 136, 0.08) 0%,
                            transparent 60%
                        ),
                        radial-gradient(
                            ellipse at 70% 50%,
                            rgba(0, 204, 255, 0.06) 0%,
                            transparent 60%
                        )
                    `,
                }}
            />

            {/* Efeito de Brilho Dinâmico */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    opacity: 0,
                    transition: "all 0.6s ease",
                    background: `
                        radial-gradient(
                            circle at 50% 50%,
                            rgba(0, 255, 136, 0.15) 0%,
                            rgba(0, 204, 255, 0.1) 30%,
                            transparent 70%
                        )
                    `,
                    '.MuiBox-root:hover &': {
                        opacity: 1,
                    }
                }}
            />

            {/* Linhas de Efeito Sutil */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.3), transparent)",
                    opacity: 0.5,
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, rgba(0, 204, 255, 0.3), transparent)",
                    opacity: 0.5,
                }}
            />

            {/* Indicador Central Moderno */}
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                    zIndex: 3,
                    textAlign: "center",
                }}
            >
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        y: [0, -3, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    
                </motion.div>

                {/* Seta indicadora */}
                <motion.div
                    animate={{
                        y: [0, 5, 0],
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                    style={{ marginTop: "8px" }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: "rgba(0, 255, 136, 0.8)",
                            fontWeight: 600,
                        }}
                    >
                        ↓
                    </Typography>
                </motion.div>
            </Box>
        </Box>
    );
}