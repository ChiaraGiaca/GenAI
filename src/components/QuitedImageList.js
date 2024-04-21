import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import deliciousadobe from './home-images/delicious-adobe.jpg'
import futuristic from './home-images/futuristic.jpg'
import home1 from './home-images/home1.jpg'
import home2 from './home-images/home2.jpg'
import intelligent from './home-images/intelligent-leonardo.jpg'
import people from './home-images/people.jpg'
import stable from './home-images/stable.jpg'
import leonardo from './home-images/leonardo-2.jpg'
import dalle from './home-images/dalle.jpg'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


const itemData = [
  {
    img: home2,
    rows: 2,
    cols: 2,
  },
  {
    img: stable,
    title: 'Burger',
  },
  {
    img: intelligent,
    title: 'Camera',
  },
  {
    img: dalle,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: futuristic,
    rows: 2,
    cols: 2,
  },
  {
    img: home1,
    title: 'stable',
    rows: 2,
    cols: 2,
  },
  {
    img: leonardo,
    title: 'Basketball',
    rows: 2,
    cols: 2,
  },
  {
    img: deliciousadobe,
    title: 'Fern',
  },
 
];


export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: "100%", height: "50%", display: "flex", justifyContent: "center", alignItems: "center"}}
      variant="quilted"
      cols={4}
      rowHeight={250}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
          
        </ImageListItem>
      ))}
    </ImageList>
  );
}
