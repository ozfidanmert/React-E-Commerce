import React from 'react'
import Container from '@mui/material/Container';

const PageContainer = ({ children }) => {
    return (
        <Container maxWidth='lg'>
            {children}
        </Container>
    )
}

export default PageContainer