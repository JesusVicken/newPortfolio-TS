import { useState, useEffect, useMemo, useRef } from 'react';
import { Container, Grid, Typography, styled, Box } from "@mui/material";
import { motion } from "framer-motion";
import Avatar from "../../../../assets/images/2.jpeg";
import BgImage from "../../../../../public/bg.jpg";
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';
import StyledButton from "../../../../components/StyledButton/StyledButton";

// Typing effect
const useTypingEffect = (words: string[], speed = 100, eraseSpeed = 50, pause = 2000) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = words[index];
        let timeout: any;

        if (!isDeleting) {
            if (displayText.length < current.length) {
                timeout = setTimeout(() => {
                    setDisplayText(current.slice(0, displayText.length + 1));
                }, speed);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), pause);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(current.slice(0, displayText.length - 1));
                }, eraseSpeed);
            } else {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % words.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, index]);

    return displayText;
};

// MAIN HERO WRAPPER
const HeroWrapper = styled("section")(() => ({
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    background: "#000",
}));

// BACKGROUND IMAGE WITH STRONG REVEAL
const BackgroundReveal = styled("div")<{
    mouseX: number;
    mouseY: number;
    hovering: boolean;
}>(({ mouseX, mouseY, hovering }) => ({
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: hovering ? "brightness(1.25) contrast(1.25)" : "brightness(0.1)", // 👈 MAIS VISÍVEL
    transition: "filter 0.2s ease-out",

    // CIRCLE REVEAL
    maskImage: hovering
        ? `radial-gradient(circle 550px at ${mouseX}px ${mouseY}px, white 0%, transparent 100%)`
        : "none",
    WebkitMaskImage: hovering
        ? `radial-gradient(circle 550px at ${mouseX}px ${mouseY}px, white 0%, transparent 100%)`
        : "none",

    zIndex: 0,
}));

// DARK OVERLAY (DEIXEI BEM MAIS FRACO)
const Overlay = styled("div")(() => ({
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.65)", // 👈 ERA 0.95 — agora o BG aparece BEM mais
    zIndex: 1,
}));

// AVATAR
const FloatingAvatar = styled(motion.img)(({ theme }) => ({
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    border: `3px solid ${theme.palette.secondary.main}`,
    zIndex: 3,
}));

const CodeBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    background: "rgba(0,255,136,0.05)",
    border: "1px solid rgba(0,255,136,0.2)",
    borderRadius: "10px",
    color: theme.palette.secondary.main,
    fontFamily: "'Fira Code', monospace",
    width: "fit-content",
}));

const Hero = () => {
    const words = useMemo(
        () => ["Fullstack Developer", "UI/UX Enthusiast", "Problem Solver", "Tech Innovator"],
        []
    );

    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const displayText = useTypingEffect(words);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setMouse({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        const el = ref.current;
        if (!el) return;

        el.addEventListener("mousemove", handleMove);
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));

        return () => {
            el.removeEventListener("mousemove", handleMove);
            el.removeEventListener("mouseenter", () => setHovering(true));
            el.removeEventListener("mouseleave", () => setHovering(false));
        };
    }, []);

    return (
        <HeroWrapper ref={ref} id="home">

            {/* BACKGROUND REVEAL */}
            <BackgroundReveal
                mouseX={mouse.x}
                mouseY={mouse.y}
                hovering={hovering}
            />

            {/* DARK OVERLAY */}
            <Overlay />

            {/* CONTENT */}
            <Container sx={{ position: "relative", zIndex: 3 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h1" sx={{ fontSize: "3.5rem", fontWeight: 800, color: "#fff" }}>
                            Jesus Vicken
                        </Typography>

                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: "2rem",
                                color: "#00ff88",
                                minHeight: "60px"
                            }}
                        >
                            {displayText}|
                        </Typography>

                        <Typography sx={{ color: "#ccc", mb: 3 }}>
                            Crafting digital experiences with cutting-edge technologies.
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <a href="/JESUS_CV.pdf" download style={{ textDecoration: "none" }}>
                                    <StyledButton variant="primary">
                                        <DownloadIcon /> CV
                                    </StyledButton>
                                </a>
                            </Grid>

                            <Grid item xs={6}>
                                <a href="mailto:jesus.vicken@example.com" style={{ textDecoration: "none" }}>
                                    <StyledButton variant="secondary">
                                        <EmailIcon /> Contact
                                    </StyledButton>
                                </a>
                            </Grid>
                        </Grid>

                        <CodeBox>
                            <Typography>const techStack = ['React','TS','Node','MongoDB']</Typography>
                        </CodeBox>
                    </Grid>

                    <Grid item xs={12} md={6} display="flex" justifyContent="center">
                        <FloatingAvatar
                            src={Avatar}
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </HeroWrapper>
    );
};

export default Hero;
