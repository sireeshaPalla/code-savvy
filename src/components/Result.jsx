import {Box,styled} from '@mui/material'
import {useContext, useState, useEffect} from 'react'
import { DataContext } from '../context/DataProvider';
const Container=styled(Box)`
    height:41vh;
`
const Result = () =>{
    const {html,css,js}=useContext(DataContext);
    const srcCode =`
        <html>
        <body>${html}</body>
        <style> ${css}</style>
         <script> ${js}</script>
        </html>
     `
     
     const [src,setSrc]= useState('')
       useEffect( () => {
         const timeOut = setTimeout(() => {
               setSrc(srcCode);
            },1000)
            return() => clearTimeout(timeOut);
       }, [html, css, js] )
     return (
        <Container>
         <iframe 
             srcDoc={src}
             title="Output"
             sandbox='allow-scripts'
             width="100%"
             height="100%"
         />
        </Container>
    );
}
export default Result