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
import deliciousmeal from './images/deliciousmeal.PNG'
import intelligentperson from './images/intelligentperson.PNG'
import poorpeople from './images/poorpeople.PNG'


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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        
      </Accordion>
    </div>
  );
}
