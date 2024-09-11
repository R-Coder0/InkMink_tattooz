import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  useTheme,
} from "@mui/material";
import emailjs from "emailjs-com";
import CustomTattooImage from "../../assets/Services/customTattoo.jpg";
import CoverUpTattooImage from "../../assets/Services/coverupTattoo.jpg";
import TattooRemovalImage from "../../assets/Services/tatoo removal.webp";
import PiercingImage from "../../assets/Services/pearcing.jpg";
import './Services.css';

const servicesData = [
  {
    name: "Custom Tattoos",
    image: CustomTattooImage,
    description: "Creating custom tattoos is our specialty. Whether you want something small and delicate or a large, detailed piece, our artists have the skills and creativity to make it happen. We take the time to understand what you want and work hard to exceed your expectations.",
  },
  {
    name: "Cover-Up Tattoos",
    image: CoverUpTattooImage,
    description: "Have an old tattoo you no longer love? Our artists are experts at cover-ups. We can transform your old ink into something new and exciting. Our cover-up techniques are designed to effectively mask old tattoos while incorporating fresh, new designs.",
  },
  {
    name: "Tattoo Removal",
    image: TattooRemovalImage,
    description: "In addition to creating beautiful tattoos, we also offer tattoo removal services. Our advanced techniques make the removal process as comfortable and efficient as possible. Whether you need a complete removal or just a touch-up, we’re here to help.",
  },
  {
    name: "Piercings",
    image: PiercingImage,
    description: "We also offer professional piercing services in a clean and safe environment. Our experienced piercers use sterilized equipment and follow strict hygiene protocols. From ear piercings to body piercings, we have a wide range of options to suit your style.",
  },
];

const ServicesAndEnquiry = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const theme = useTheme();

  const handleOpenEnquiry = () => setOpenEnquiry(true);
  const handleCloseEnquiry = () => setOpenEnquiry(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_krujb75";
    const templateId = "template_6aaki5l";
    const userId = "T6wnoirwOCcGcwYf3";
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      to_email: "your_email@example.com" // Replace with your email or configure dynamically
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then(() => {
        alert("Enquiry submitted successfully!");
        handleCloseEnquiry();
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        alert("There was an error submitting your enquiry.");
        console.error(err);
      });
  };

  return (
    <div id="services" className="anchor" style={{ padding: "40px 0", backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <div className="text-center pb-12">
          <Typography
            variant="h4"
            style={{
              fontWeight: "bold",
              color: theme.palette.text.primary,
              marginBottom: "10px",
              textTransform: "uppercase",
              background: "linear-gradient(315deg, rgb(255 211 12) 0%, rgb(159 131 32) 74%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Explore Our Services
          </Typography>
          <Typography variant="body1" style={{ color: theme.palette.text.secondary, marginBottom: "40px" }}>
            In the bustling neighborhood of Rohini, there's a commitment to excellence in tattoo artistry...
          </Typography>
        </div>

        <Grid container spacing={4} justifyContent="center">
          {servicesData.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.name}>
              <Card
                elevation={5}
                className="service-card"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                  backgroundColor: theme.palette.background.paper,
                }}
              >
                <CardMedia
                  component="div"
                  className="service-image"
                  image={service.image}
                  title={service.name}
                  style={{
                    height: 180,
                  }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" fontWeight="bold" style={{ color: theme.palette.text.primary }}>
                    {service.name}
                  </Typography>
                  <Typography variant="body2" style={{ marginTop: 10, color: theme.palette.text.secondary }}>
                    {service.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginTop: 15,
                      borderRadius: "20px",
                      background: "linear-gradient(315deg, #000000 0%, #FFD700 74%)",
                      color: "#fff",
                      textTransform: "capitalize",
                      width: "100%",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
                      transition: "background-color 0.3s ease",
                    }}
                    onClick={handleOpenEnquiry}
                  >
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Enquiry Form */}
      <Dialog open={openEnquiry} onClose={handleCloseEnquiry} PaperProps={{ style: { borderRadius: "15px", padding: "20px", background: "linear-gradient(135deg, #000000 0%, #FFD700 74%)" } }}>
        <DialogTitle style={{ textAlign: "center", fontWeight: "bold", color: "#000" }}>Contact Us</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="#000" fontWeight={500} gutterBottom>
            Please fill out the form below to send us your enquiry.
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            style={{ marginBottom: "20px", borderRadius: "10px", backgroundColor: "#fff" }}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            style={{ marginBottom: "20px", borderRadius: "10px", backgroundColor: "#fff" }}
          />
          <TextField
            margin="dense"
            name="message"
            label="Message"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={formData.message}
            onChange={handleChange}
            style={{ marginBottom: "20px", borderRadius: "10px", backgroundColor: "#fff" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEnquiry} color="primary" style={{ fontWeight: "bold" }}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            style={{
              backgroundColor: "#000000",
              color: "#FFD700",
              borderRadius: "20px",
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
              transition: "background-color 0.3s ease",
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ServicesAndEnquiry;
