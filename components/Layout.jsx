import React, { Children } from 'react'
import Header from './Header'

const Layout = ({Children}) => {
    return (
        <>
            <Header />
            {Children}
        </>    
)
}

export default Layout