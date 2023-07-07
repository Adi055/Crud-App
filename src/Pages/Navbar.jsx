import { Link } from "react-router-dom"
import { styled } from "styled-components"

const Navbar=()=>{

    return (
        <div >
           <div style={{display:"flex",justifyContent:"space-evenly",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",height:"50px"}}>
          <h1 style={{color:"rgb(50, 49, 49)",position:"relative",right:"250px",bottom:"20px"}}>Crud App</h1>
              <div style={{position:"relative",right:"400px",padding:"10px"}}>
            <Link to="/" style={{textDecoration:"none",color:"rgb(50, 49, 49)",marginRight:"40px",fontSize:"17px"}}>Home</Link>
            <Link to="/login" style={{textDecoration:"none",color:"rgb(50, 49, 49)",marginRight:"40px",fontSize:"17px"}}>Login</Link>
            <Link to="/admin" style={{textDecoration:"none",color:"rgb(50, 49, 49)",marginRight:"40px",fontSize:"17px"}}>Admin</Link>
            </div>
            </div>
        </div>
    )
}
export default Navbar




// import {
//     Box,
//     Button,
//     ButtonGroup,
//     Container,
//     Flex,
//     HStack,
//     IconButton,
//     useBreakpointValue, 
    
//   } from '@chakra-ui/react'
  
//   import { FiMenu } from 'react-icons/fi'
  
//  import { Link  } from 'react-router-dom'


// let Navbar=()=>{

//     const isDesktop = useBreakpointValue({ base: false, lg: true })
//     return (
//       <Box as="section" pb={{ base: '10', md: '24' }}>
//         <Box as="nav" bg="bg.surface" boxShadow="sm">
//           <Container py={{ base: '4', lg: '2' }} mr='800px'>
//             <HStack spacing="1" justify="space-between">
//            <h1>Crud App</h1>
//               {isDesktop ? (
//                 <Flex justify="space-between" flex="1">
//                   <ButtonGroup variant="text" colorScheme="gray" spacing="0" >
//                     <Button><Link to="/">Home</Link></Button>
//                     <Button><Link to="/login">Login</Link></Button>
//                     <Button><Link to="/admin">Admin</Link></Button>
//                   </ButtonGroup>
//                   <HStack spacing="2" ml='450px'>
                    
//                     <Link to="/signin"><Button variant="tertiary" bg="rgb(210, 248, 248)" color="blue"  borderRadius="1.5em" width="7vw" height="2.7vw">Log in</Button></Link>
//                     <Link to="/signup"><Button variant="primary"  bg="blue" color="white" borderRadius="1.5em" width="7.5vw" height="2.7vw">Sign up</Button></Link>
//                     <br />
//                     <Button variant="primary" border='1px solid rgb(177, 170, 170)'   borderRadius="1.5em" width="7.5vw" height="2.7vw">Free Trial</Button>
//                   </HStack> 
//                 </Flex>
//               ) : (
//                 <IconButton
//                   variant="tertiary"
//                   icon={<FiMenu fontSize="1.25rem" />}
//                   aria-label="Open Menu"
//                 />
//               )}
//             </HStack>
//           </Container>
//         </Box>
//       </Box>
//     )
// }
// export default Navbar


  
  