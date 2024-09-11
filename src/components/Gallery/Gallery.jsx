import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import galleryImage1 from "../../assets/Gallery/customTattoo.jpg";
import galleryImage2 from "../../assets/Gallery/gallery2.jpg";
import galleryImage3 from "../../assets/Gallery/gallery3.jpg";
import galleryImage4 from "../../assets/Gallery/gallery4.jpg";
import galleryImage5 from "../../assets/Gallery/gallery5.jpg";
import galleryImage6 from "../../assets/Gallery/gallery6.jpg";
import galleryImage7 from "../../assets/Gallery/gallery7.jpg";
import galleryImage8 from "../../assets/Gallery/gallery8.jpg";
import sliderImage1 from "../../assets/Gallery/slider7.jpg";
import sliderImage2 from "../../assets/Gallery/slider1.jpg";
import sliderImage3 from "../../assets/Gallery/slider2.jpg";
import sliderImage4 from "../../assets/Gallery/slider3.jpg";
import sliderImage5 from "../../assets/Gallery/slider4.jpg";
import sliderImage6 from "../../assets/Gallery/slider5.jpg";
import sliderImage7 from "../../assets/Gallery/slider6.jpg";
import "./Gallery.css";

const galleryData = [
  { id: 1, image: galleryImage1 },
  { id: 2, image: galleryImage2 },
  { id: 3, image: galleryImage3 },
  { id: 4, image: galleryImage4 },
  { id: 5, image: galleryImage5 },
  { id: 6, image: galleryImage6 },
  { id: 7, image: galleryImage7 },
  { id: 8, image: galleryImage8 },
];

const sliderData = [
  { id: 1, image: sliderImage1 },
  { id: 2, image: sliderImage2 },
  { id: 3, image: sliderImage3 },
  { id: 4, image: sliderImage4 },
  { id: 5, image: sliderImage5 },
  { id: 6, image: sliderImage6 },
  { id: 7, image: sliderImage7 },
];

const Gallery = () => {
  const handleOpenNewTab = (image) => {
    window.open(image, "_blank");
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="gallery" className="gallery-section">
      <Container maxWidth="lg">
        <div className="text-center pb-12">
          <Typography
            variant="h4"
            style={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "10px",
              textTransform: "uppercase",
              background: "linear-gradient(315deg, rgb(255 211 12) 0%, rgb(159 131 32) 74%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Gallery
          </Typography>
          <Typography variant="body1" style={{ color: "#555", marginBottom: "40px" }}>
            Explore our recent works and studio environment.
          </Typography>
        </div>

        <Grid container spacing={4} justifyContent="center">
          {galleryData.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Card
                elevation={5}
                className="gallery-card"
                onClick={() => handleOpenNewTab(item.image)}
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  title={`Gallery Image ${item.id}`}
                  style={{
                    height: 180,
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>

        <div className="slider-section">
          <Typography
            variant="h5"
            style={{
              fontWeight: "bold",
              color: "#333",
              marginTop: "40px",
              textTransform: "uppercase",
              background: "linear-gradient(315deg, rgb(255 211 12) 0%, rgb(159 131 32) 74%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
              marginBottom:"10px"
            }}
          >
            More Images
          </Typography>
          <div className="slider-wrapper">
            <Slider {...sliderSettings}>
              {sliderData.map((item) => (
                <div key={item.id} className="slider-item">
                  <img src={item.image} alt={`Slider Image ${item.id}`} className="slider-image" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;