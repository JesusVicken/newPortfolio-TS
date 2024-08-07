import { Container, Grid, Typography, styled, Box } from "@mui/material"
import Avatar from '../../../../assets/images/2.jpeg'
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',

    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: '80%',
        borderRadius: '50%',
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth='lg' >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position='relative'>
                                <Box position='absolute' width={'150%'} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position='relative' textAlign='center'>
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color='primary.contrastText' variant="h1" textAlign='center' pb={2}>Jesus Vicken</Typography>
                            <Typography color='primary.contrastText' variant="h2" textAlign='center'>I'm a Fullstack Developer</Typography>
                            <Grid container display='flex' justifyContent='center' spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                                    <a href="/JESUS_CV.pdf" download style={{ textDecoration: 'none' }}>
                                        <StyledButton>
                                            <DownloadIcon />
                                            <Typography>
                                                Download CV
                                            </Typography>
                                        </StyledButton>
                                    </a>
                                </Grid>
                                <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                                    <a href="https://www.linkedin.com/in/jesus-vicken" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        <StyledButton>
                                            <EmailIcon />
                                            <Typography>
                                                Contact me
                                            </Typography>
                                        </StyledButton>
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container >
            </StyledHero>
        </>
    )
}

export default Hero