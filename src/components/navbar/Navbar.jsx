import React from 'react'
import { LinkContainerStyled, NavbarContainerStyles, } from './NavbarStyles'


import {FaHouseUser} from "react-icons/fa"
import {AiOutlineMenuUnfold} from "react-icons/ai"

import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <NavbarContainerStyles>
         <motion.div whileTap={{scale:0.90}}>
            <LinkContainerStyled>
                <AiOutlineMenuUnfold/>
            </LinkContainerStyled>
        </motion.div>
        
        <div>
            
            <a href="">
                <img src="./src/img/logo.png" alt="LogoEmpresa" />
            </a>
        </div>

        <motion.div whileTap={{scale:0.90}}>
            <LinkContainerStyled>
                <FaHouseUser/>
             </LinkContainerStyled>
        </motion.div>
    </NavbarContainerStyles>
    
       
        
    
  )
}

export default Navbar
