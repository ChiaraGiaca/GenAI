import React from 'react';
import QuiltedImageList from './QuitedImageList';

function Body() {
    return (
        <div style = {{marginTop: "10%"}}>
            <div className="banner-container">
                <div className="text-center">
                    <h1 className=" text-6xl">Welcome to GenAI Solutions</h1>
                    <h4 className="text-4xl">Explore the latest AI trends for image generation</h4>
                </div>
            </div>
            <div style= {{marginTop: "5%"}}></div>
            <QuiltedImageList></QuiltedImageList>
            <br></br>
            © Website by Chiara Giacanelli
        </div>
    );
};

export default Body;