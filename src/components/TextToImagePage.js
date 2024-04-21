import React from 'react';
import Button from '@mui/material/Button';
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import BasicTable from './Table';
import QuiltedImageList from './QuitedImageList';

import firstSlide from './images/texttoimage1.png'
import secondSlide from './images/texttoimage2.png'
import thirdSlide from './images/texttoimage3.png'
import dalle1 from './images/dalle1.png'
import dalle2 from './images/dalle2.png'
import dalle3 from './images/dalle3.png'
import leonardo1 from './images/leonardo1.png'
import leonardo2 from './images/leonardo2.png'
import leonardo3 from './images/leonardo3.png'
import krea1 from './images/krea1.png'
import krea2 from './images/krea2.png'
import krea3 from './images/krea3.png'
import stable1 from './images/stable1.png'
import stable2 from './images/stable2.png'
import stable3 from './images/stable3.png'


function TextToImagePage() {

   
    const [openStable, setOpenStable] = React.useState(false);
    const [openDalle, setOpenDalle] = React.useState(false);
    const [openAdobe, setOpenAdobe] = React.useState(false);
    const [openLeo, setOpenLeo] = React.useState(false);
    const [openKrea, setOpenKrea] = React.useState(false);

    const handleClickOpenStable = () => {
    setOpenStable(true);
    };

    const handleCloseStable = () => {
    setOpenStable(false);
    };
    
    const handleClickOpenDalle = () => {
    setOpenDalle(true);
    };

    const handleCloseDalle = () => {
    setOpenDalle(false);
    };

    const handleClickOpenAdobe = () => {
        setOpenAdobe(true);
    };
    
    const handleCloseAdobe = () => {
    setOpenAdobe(false);
    };

    const handleClickOpenLeo = () => {
        setOpenLeo(true);
    };
    
    const handleCloseLeo = () => {
    setOpenLeo(false);
    };


    const handleClickOpenKrea= () => {
        setOpenKrea(true);
    };
        
    const handleCloseKrea = () => {
    setOpenKrea(false);
    };

    return <div  style = {{marginTop: "8%"}}>
        <ul>
            <div>STABLE DIFFUSION 3 (2024)</div>
            <p style= {{fontSize: "12px"}}>
            </p>
            <div id="carousel-stable" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner-stable">
                <div class="carousel-item active">
                <img class="d-block w-90" src= {stable1} alt="First slide"style={{marginLeft:"auto",marginRight:"auto"}}/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-80" src={stable2} alt="Second slide" style={{marginLeft:"auto",marginRight:"auto"}}/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-80" src={stable3} alt="Third slide"style={{marginLeft:"auto",marginRight:"auto"}}/>
                </div>
            </div>
            <a class="carousel-control-prev" id= "dalle-prev" href="#carousel-stable" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" id= "dalle-next" href="#carousel-stable" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
            <br/>
            <Button onClick={handleClickOpenStable} style= {{color: "white", backgroundColor: yellow[600], fontWeight: "bold"}}>FIND OUT MORE</Button>
            <Dialog
                open={openStable}
                onClose={handleCloseStable}
                aria-labelledby="draggable-dialog-title-stable"
            >
            <DialogTitle id="draggable-dialog-stable">
                Detailed Evaluation of IMAGEN
            </DialogTitle>
            <DialogContent>
                
                <BasicTable name = 'stable'></BasicTable>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCloseStable}>
                Cancel
                </Button>
                <Button onClick={handleCloseStable}>Subscribe</Button>
            </DialogActions>
            </Dialog>
            <hr/>
            <div>DALLE 3 (2023)</div>
            <p style= {{fontSize: "12px"}}>Compared to its predecessors, DALL-E 3 showcases advanced nuance and more detailed recognition, allowing a seamless transformation of your ideas into precise visuals. </p>
            <div id="carousel-dalle" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner-dalle">
                <div class="carousel-item active">
                <img class="d-block w-80" src= {dalle1} alt="First slide"style={{marginLeft:"auto",marginRight:"auto"}}/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-80" src={dalle2} alt="Second slide" style={{marginLeft:"auto",marginRight:"auto"}}/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-80" src={dalle3} alt="Third slide"style={{marginLeft:"auto",marginRight:"auto"}}/>
                </div>
            </div>
            <a class="carousel-control-prev" id= "dalle-prev" href="#carousel-dalle" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" id= "dalle-next" href="#carousel-dalle" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
            <br/>
            <Button onClick={handleClickOpenDalle} style= {{color: "white", backgroundColor: yellow[600], fontWeight: "bold"}}>FIND OUT MORE</Button>
            <Dialog
                open={openDalle}
                onClose={handleCloseDalle}
                aria-labelledby="draggable-dialog-title-dalle"
            >
            <DialogTitle id="draggable-dialog-title-dalle">
                Explore DALLE 3
            </DialogTitle>
            <DialogContent>
                
                <BasicTable name = 'dalle'></BasicTable>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCloseDalle}>
                Cancel
                </Button>
                <Button onClick={handleCloseDalle}>Subscribe</Button>
            </DialogActions>
            </Dialog>
            <hr/>
            <div>ADOBE FIREFLY (2023)<br/>
            <p style= {{fontSize: "12px"}}>Adobe Firefly is a standalone web application available at firefly.adobe.com. 
            It offers new ways to ideate, create, and communicate while significantly improving creative workflows using generative AI.
            </p>
            <div id="carousel-adobe" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-90" src= {firstSlide} alt="First slide"style={{marginLeft:"auto",marginRight:"auto"}}/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-90" src={secondSlide} alt="Second slide" style={{marginLeft:"auto",marginRight:"auto"}}/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-90" src={thirdSlide} alt="Third slide"style={{marginLeft:"auto",marginRight:"auto"}}/>
                </div>
            </div>
            <a class="carousel-control-prev" id = "adobe-prev"href="#carousel-adobe" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" id= "adobe-prev" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" id = "adobe-next" href="#carousel-adobe" role="button" data-slide="next">
                <span class="carousel-control-next-icon" id = "adobe-next" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            <br/>
            <Button onClick={handleClickOpenAdobe} style= {{color: "white", backgroundColor: yellow[600], fontWeight: "bold"}}>FIND OUT MORE</Button>
            <Dialog
                open={openAdobe}
                onClose={handleCloseAdobe}
                aria-labelledby="draggable-dialog-title-adobe"
            >
            <DialogTitle id="draggable-dialog-title-adobe">
                Explore ADOBE FIREFLY
            </DialogTitle>
            <DialogContent>
               
                <BasicTable name = 'adobe'></BasicTable>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCloseAdobe}>
                Cancel
                </Button>
                <Button onClick={handleCloseAdobe}>Subscribe</Button>
            </DialogActions>
            </Dialog>
            </div>
            </div>
            <hr/>
            <div>LEONARDO.AI
                
            </div>
            <p style= {{fontSize: "12px"}}>Leonardo AI is a platform that lets you create art, images and more with pre-trained or custom AI models. You can explore different styles, genres and themes, and join a community of over 4 million artists and creators.</p>
            <div id="carousel-leonardo" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-95" src= {leonardo1} alt="First slide" style={{marginLeft:"auto",marginRight:"auto"}}/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-95" src={leonardo2} alt="Second slide" style={{marginLeft:"auto",marginRight:"auto"}}/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-95" src={leonardo3} alt="Third slide" style={{marginLeft:"auto",marginRight:"auto"}}/>
                </div>
            </div>
            <a class="carousel-control-prev" id = "adobe-prev"href="#carousel-leonardo" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" id= "adobe-prev" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" id = "adobe-next" href="#carousel-leonardo" role="button" data-slide="next">
                <span class="carousel-control-next-icon" id = "adobe-next" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
            <br/>
            <Button onClick={handleClickOpenLeo} style= {{color: "white", backgroundColor: yellow[600], fontWeight: "bold"}}>FIND OUT MORE</Button>
            <Dialog
                open={openLeo}
                onClose={handleCloseLeo}
                aria-labelledby="draggable-dialog-title-leonardo"
            >
            <DialogTitle id="draggable-dialog-title-leonardo">
                Explore Leonardo.AI
            </DialogTitle>
            <DialogContent>
                
                <BasicTable name = 'leonardo'></BasicTable>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCloseLeo}>
                Cancel
                </Button>
            </DialogActions>
            </Dialog>
            <hr/>
            <div>KREA.AI
                
            </div>
            <p style= {{fontSize: "12px"}}>Krea AI is a revolutionary platform that merges advanced AI technologies with user-friendly design to transform simple sketches and prompts into detailed images instantly.</p>
            <div id="carousel-krea" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-70" src= {krea1} alt="First slide" style={{marginLeft:"auto",marginRight:"auto"}}/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-70" src={krea2} alt="Second slide" style={{marginLeft:"auto",marginRight:"auto"}}/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-70" src={krea3} alt="Third slide" style={{marginLeft:"auto",marginRight:"auto"}}/>
                </div>
            </div>
            <a class="carousel-control-prev" id = "adobe-prev"href="#carousel-krea" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" id= "adobe-prev" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" id = "adobe-next" href="#carousel-krea" role="button" data-slide="next">
                <span class="carousel-control-next-icon" id = "adobe-next" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
            <br/>
            <Button onClick={handleClickOpenKrea} style= {{color: "white", backgroundColor: yellow[600], fontWeight: "bold"}}>FIND OUT MORE</Button>
            <Dialog
                open={openKrea}
                onClose={handleCloseKrea}
                aria-labelledby="draggable-dialog-title-krea"
            >
            <DialogTitle id="draggable-dialog-title-krea">
                Detailed Evaluation
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                To subscribe to this website, please enter your email address here. We
                will send updates occasionally.
                </DialogContentText>
                <BasicTable></BasicTable>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCloseKrea}>
                Cancel
                </Button>
                <Button onClick={handleCloseKrea}>Subscribe</Button>
            </DialogActions>
            </Dialog>
            
        </ul>
        
    </div>
}

export default TextToImagePage;