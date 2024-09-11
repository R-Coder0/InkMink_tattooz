import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import Review1 from '../../assets/Testimonial/review1.jpg';
import Review2 from '../../assets/Testimonial/review2.webp';
import Review3 from '../../assets/Testimonial/review3.jpg';
import Review4 from '../../assets/Testimonial/review4.webp';
import "./Testimonial.css";

const testimonialData = [
  {
    id: 1,
    name: "Virendar Kumar",
    text: "Wonderful experience at Ink Mink Tattooz, I got inked my first tattoo here, excellent service it took less than 15 mins to design a tattoo on my hand",
    img: Review4,
    rating: 5,
  },
  {
    id: 2,
    name: "Sushil Kumar",
    text: "I got my first tattoo from ink mink  m2k rohini fully satisfied with the tattoo and overall surroundings.they took all precautions before creating my lifetime moment. they used a new needle with a new ink pot.10 out of 10",
    img: Review1,
    rating: 4,
  },
  {
    id: 3,
    name: "Ridhi Garg",
    text: "I just got my tattoo done by Kamal and he did an amazing job. He added all the details that I hadn’t even thought of while planning for the Tattoo. A beautiful job done :)",
    img: Review3,
    rating: 4,
  },
  {
    id: 4,
    name: "Rahul Sharma",
    text: "Before coming, I was worried about what kind of tattoo cover up I should do.. but Kamal ji did a great job on my old tattoo, not only covered it up but also made it new.",
    img: Review2,
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section py-10">
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="testimonial-title"
        >
          What Our Clients Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {testimonialData.map(({ id, name, text, img, rating }) => (
            <Grid item xs={12} sm={6} md={3} key={id}>
              <Card className="testimonial-card">
                <CardMedia className="testimonial-image-container">
                  <img src={img} alt={name} className="testimonial-image" />
                </CardMedia>
                <CardContent className="testimonial-card-content">
                  <Typography
                    variant="h6"
                    component="h2"
                    align="center"
                    gutterBottom
                  >
                    {name}
                  </Typography>
                  <Box display="flex" justifyContent="center" mb={1}>
                    <Rating value={rating} readOnly />
                  </Box>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    align="center"
                  >
                    “{text}”
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Testimonial;
