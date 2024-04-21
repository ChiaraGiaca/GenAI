import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import brain from './brain.png'
import reply from './reply.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const pages = ['EXPLORE SOLUTIONS', 'EVALUATION'];
const pagesPath = ['./TextToImagePage', './EvaluationPage']

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar  style={{ backgroundColor: "white", color: "black"}}>
      <div className='inverted-border-radius'></div>
        <Toolbar disableGutters>
            <Router>
              <Link to = "/"><img src={brain} alt="Logo" 
            style={{ width: 
            '50px',
          marginLeft: '20px' }} />
          <img src={reply} alt="Logo" 
            style={{ width: 
            '80px', marginRight: 
            '20px',
          marginLeft: '20px' }} />
          </Link>
          </Router>GenAI Solutions
            <Box sx={{ display: 'flex', 
            justifyContent: 'flex-end', 
            flexGrow: 1 }}>
              {pages.map((page) => (
                <Router>
                <Link to={pagesPath[pages.indexOf(page)]} className="nav-link">
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, 
                    marginRight: '10px',
                    color: page.toLowerCase() == "evaluation" ? 'white' :'black',
                   display: 'block', 
                   backgroundColor:  page.toLowerCase() == "evaluation" ? 'black' :'white',
                   fontWeight: 'bold' }}
                >
                  {page}
                </Button>
                </Link>

                </Router>
              ))}
            </Box>
        </Toolbar>
       
    </AppBar>
  );
}
export default Header;