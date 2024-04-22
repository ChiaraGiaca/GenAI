import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import deliciousmeal from './images/deliciousmeal.PNG'
import intelligentperson from './images/intelligentperson.PNG'
import poorpeople from './images/poorpeople.PNG'
import hands from './images/hands.PNG'

export default function EvaluationPage() {
    const [prompt, setPrompt] = React.useState('');
    const [img, setImg] = React.useState('');
    const [description, setDesct] = React.useState('')

    const handleChange = (event) => {
        setPrompt(event.target.value);
    
        if (event.target.value == 'deliciousmeal'){
            setImg(deliciousmeal)
            setDesct('As we can notice, most of the models depict an healthy (and good, for sure) meal, but not in the conception that most of humans have for delicious. The only model that seems to depict what we consider delicious in the commonsense knowledge is the Adobe Firefly. It seems that the models were trained on ”restaurant-like” pictures and associate the deliciousness of such meals to well presented plates instead of the tastiness of the meal itself.')
        } else if (event.target.value == 'poorpeople') {
            setImg(poorpeople)
            setDesct('Models seem biased from the concept that poor people belong mostly to african or east-asia worlds, but that’s effectively what our commonsense usually imagines. The only model that wasn’t able to depict a truthful image is the Adobe Firefly, showing happy people smiling in front of normal buildings (they seem italian buildings actually). The most appealing results were given by Leonardo.AI and the STABLE DIFFUSION model. Especially in the latter, the output contains real fine-grained details such as the home wrecks on the ground and the expression of people')
         }
        else  {
            setImg(intelligentperson)
            setDesct(' DALLE3 and the STABLE DIFFUSION3 models weren’t able to depict a person, but rather preferred to show a more abstract vision of the meaning of the prompt. On the other hand, the KREA model depicted a man with glasses, that’s in line with the commonsense knowledge of humans (even if it’s influenced by the bias of men being more intelligent than women). The firefly and LEONARDO models were able to output both men and women pictures. Even in this case the Firefly model seems to outperform the outputs of the other models, depicting ealistic and true to reality images')
        }
      

    };

    function createData(name, fidelty, details, aesthetics, control, api) {
        return { name, fidelty, details, aesthetics, control, api };
      }
      
      const rows = [
        createData('DALLE3', ' Good fidelty but sometimes the model fails to generalize', 'Strong attention to details', 'Pictures have high aesthetic, especially the ones with intricate landscapes', 'None', 'Very easy to access with OPENAI Account'),
        createData('ADOBE FIREFLY', ' The model struggles depicting groups of people in landscapes (it always focuses on human figures infrontof environments)', 'Very strong attention to details', 'Strong variety of styles', 'Many tools: image type, structure, styles', 'API available'),
        createData('LEONARDO.AI', 'High fidelty and generalization', 'Strong attention to details', 'Many different styles', 'Many options: different models, input dimension, number of generated images', 'Available with the upgrade plan'),
        createData('KREA.AI', 'Good fidelty', 'Little details', 'Sometimes a little too dark', 'High. The platform allows real time monitoring and customization of the output', 'Not available'),
        createData('STABLE DIFFUSION 3', 'Strong fidelty', 'Really detailed outputs but just one per prompt', 'Good at generalization', 'None', 'Available on Fireworks.AI and Google Colab'),
      ];
      

  return (
    <div style = {{marginTop: "8%"}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Models comparison
        </AccordionSummary>
        <AccordionDetails>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell  style ={{fontWeight: 'bold'}}>Model Name</TableCell>
                <TableCell  align="right" style ={{fontWeight: 'bold'}}>Fidelty</TableCell>
                <TableCell   align="right"style ={{fontWeight: 'bold'}}>Details</TableCell>
                <TableCell  align="right" style ={{fontWeight: 'bold'}}>Aesthetics</TableCell>
                <TableCell  align="right" style ={{fontWeight: 'bold'}}>Configurability and Control</TableCell>
                <TableCell   align="right" style ={{fontWeight: 'bold'}}>API Integration</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.fidelty}</TableCell>
                <TableCell align="right">{row.details}</TableCell>
                <TableCell align="right">{row.aesthetics}</TableCell>
                <TableCell align="right">{row.control}</TableCell>
                <TableCell align="right">{row.api}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Are the models able to resonate?
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Prompt</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={prompt}
            label="prompt"
            onChange={handleChange}
            >
            <MenuItem value='intelligent' name = 'intelligent'>Generate an image depicting an intelligent person</MenuItem>
            <MenuItem value='poorpeople'>Group of poor people in their homes</MenuItem>
            <MenuItem value='deliciousmeal'>Generate a very delicious meal</MenuItem>
            </Select><br/>
            Results:

            <img src= {img} style={{width: "60%", marginLeft: "auto", marginRight: "auto"}}>
            
            </img>
            <div>{description}</div>

        </FormControl>
        </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Are they able to generate hands effectively?
        </AccordionSummary>
        <AccordionDetails>
          Here are the results for the prompt: "A group of people with their hands in the sky"
          <img src= {hands} style={{width: "60%", marginLeft: "20%", marginRight: "auto"}}>
            
            </img>
            <div>
            As can be noticed, all the models struggle with hand generation (most of the hands have less or
 more fingers than normal or the generation is partially complete). The models that gave the best
 results have been the LEONARDO and the STABLE DIFFUSION.
            </div>
           
        </AccordionDetails>
       
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          What's the best model?
        </AccordionSummary>
        <AccordionDetails>
          It depends!
          <br/><br/>
          <ul>
            <li>If you need real-time generation and don't need very strong details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg> KREA.AI can be the solution</li>
            <li>If you need just one well-generated output <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg> STABLE DIFFUSION 3 or LEONARDO.AI can help you</li>
<li>If you need a more artistic vibe <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg> choosing ADOBE FIREFLY or DALLE 3 could be beneficial</li>
          </ul>
        </AccordionDetails>
        
      </Accordion>
    </div>
  );
}
