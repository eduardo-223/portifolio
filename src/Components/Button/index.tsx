import { ReactNode } from "react"
import { Container } from "./styled"

interface ButtonProps{
    children: ReactNode
}

export const Button = ({children}:ButtonProps) =>{
    return(
        <Container>
            {children}
        </Container>
    )
}