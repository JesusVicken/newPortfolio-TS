import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
    onClick?: () => void
    variant?: 'primary' | 'secondary'
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick, variant = 'primary' }) => {

    const StyledButtonElement = styled("button")(({ theme }) => ({
        backgroundColor: variant === 'primary'
            ? 'transparent'
            : 'rgba(0, 255, 136, 0.1)',
        border: variant === 'primary'
            ? `2px solid ${theme.palette.secondary.main}`
            : '2px solid transparent',
        borderRadius: '50px',
        padding: '12px 32px',
        width: '100%',
        color: theme.palette.secondary.main,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fontSize: '1rem',
        fontWeight: '600',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.2), transparent)',
            transition: 'left 0.5s ease',
        },
        '&:hover': {
            backgroundColor: variant === 'primary'
                ? 'rgba(0, 255, 136, 0.1)'
                : 'rgba(0, 255, 136, 0.2)',
            transform: 'translateY(-3px) scale(1.02)',
            boxShadow: '0 10px 30px rgba(0, 255, 136, 0.3)',
            borderColor: variant === 'primary' ? theme.palette.secondary.light : 'transparent',
            '&::before': {
                left: '100%',
            }
        },
        '&:active': {
            transform: 'translateY(-1px) scale(1.01)',
        }
    }))

    return (
        <StyledButtonElement onClick={onClick}>
            {children}
        </StyledButtonElement>
    )
}

export default StyledButton