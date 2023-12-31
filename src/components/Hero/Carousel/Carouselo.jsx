import React from 'react';
import { Carousel } from 'react-carousel-minimal';

function Carouselo() {
 const data = [
    {
      image: "./img/hero/img1.jpg",
      caption: "Vancouver"
    },
    {
      image: "./img/hero/img2.jpg",
      caption: "Patagonia"
    },
    {
      image: "./img/hero/img3.jpg",
      caption: "Arabia"
    },
    {
      image: "./img/hero/img4.jpg",
      caption: "Suiza"
    },
    {
      image: "./img/hero/img5.jpg",
      caption: "Londres"
    },
    {
      image: "./img/hero/img6.jpg",
      caption: "Asia"
    },
    {
      image: "./img/hero/img7.jpg",
      caption: "Brasil"
    },
    {
      image: "./img/hero/img8.jpg",
      caption: "Polonia"
    },
    {
      image: "./img/hero/img9.jpg",
      caption: "America del sur"
    },
    {
      image: "./img/hero/img10.jpg",
      caption: "Italia"
    },
    {
      image: "./img/hero/img11.jpg",
      caption: "España"
    }
    
    
    
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App" >
      <div style={{ textAlign: "center" }}>
        
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={7000}
            width="90vw"
            height="300px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxHeight: "500px",
              width:"82vw"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carouselo;