import Editor from './Editor';
import {Box,styled} from '@mui/material'
import { useContext } from 'react';
import {DataContext} from '../context/DataProvider'
const Container=styled(Box)`
display: flex;
background:#060606;
height:50vh;
`;

const Code = () =>{

    const { html,setHtml,css,setCss,js,setJs }=useContext(DataContext); 
     return ( 
        <Container>
         <Editor heading="HTML"
                 icon="/"
                 iconColor="#FF3C41"
                 value={html}
                 onChange={setHtml}
         />
         <Editor heading="CSS" 
                 icon="*"
                 iconColor="#0ebeff"
                 value={css}
                 onChange={setCss}
        />
         <Editor heading="JS" 
                 icon="()"
                 iconColor="#FCD000"
                 value={js}
                 onChange={setJs}
         />
        </Container>
     )
}

export default Code