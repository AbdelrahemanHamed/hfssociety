import React, { useState } from 'react';
import logo from '../assets/HFSLOGO.png';
import logoPDF from '../assets/LogoPDF.png';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import StepConnector from '@mui/material/StepConnector';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { linearGradient } from 'framer-motion/client';
import { jsPDF } from 'jspdf';



const linearTextColor = 'linear-gradient(to right, #fff, #000)';

const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  '&.Mui-active': {
    // Styles for the active step connector
    backgroundColor:"white",
  },
  '&.Mui-completed': {
    // Styles for the completed step connector
    backgroundColor: "blue",
  },
  '&.Mui-disabled': {
    // Styles for the disabled step connector
    backgroundColor: '#e0e0e0', // Change this to the desired gray color
  },
}));

const steps = ['Sponsor ID', 'Confirm Sponsor ID', 'Account Details', 'Personal Information', 'Review'];

const sponsorData = [
  { id: 'SP001', name: 'John Doe' },
  { id: 'SP002', name: 'Jane Smith' },
  { id: 'SP003', name: 'Alice Johnson' },
];

const Register = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    sponserid: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [sponserIdError, setSponserIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [selectedSponsorName, setSelectedSponsorName] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // State to manage form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setSponserIdError('');
    setPasswordError('');

    if (activeStep === 0) {
      const foundSponsor = sponsorData.find(sponsor => sponsor.id === formData.sponserid);
      if (foundSponsor) {
        setSelectedSponsorName(foundSponsor.name);
        setActiveStep((prevStep) => prevStep + 1);
      } else {
        setSponserIdError('Invalid Sponsor ID. Please try again.');
      }
    } else if (activeStep === 1) {
      if (isConfirmed) {
        setActiveStep((prevStep) => prevStep + 1);
      } else {
        setSponserIdError('You must confirm the Sponsor ID to proceed.');
      }
    } else if (activeStep === 2) {
      if (formData.password !== formData.confirmPassword) {
        setPasswordError('Passwords do not match.');
        return;
      }
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    if (!isAgreementChecked) {
      alert('You must confirm that you are over 18 and agree to the Privacy & Cookies Policy.');
      return;
    }
    console.log('Registration data:', formData);
    setIsSubmitted(true); // Set submitted state to true to show thank-you message
  };

  if (isSubmitted) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#161117',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Thank You for Registering!
        </Typography>
        <Typography align="center">
          Your registration has been successfully submitted. We will get back to you shortly.
        </Typography>
      </Box>
    );
  }


/////////////////////////////pdf Functions///////////////////////////////////////////////////

  const loadCustomFont = (doc) => {
    const base64Font = "<base64-encoded-data-here>"; // Replace with actual base64 string
    doc.addFileToVFS("Popns.ttf", base64Font); 
    doc.addFont("Popns.ttf", "Tanseek Modern Pro Arabic", "normal"); // Register the font
  };

  const generatePDF = () => {
    const doc = new jsPDF();





    

    // loadCustomFont(doc); // Load the custom font
    // doc.setFont("Tanseek Modern Pro Arabic"); // Set custom font
    // doc.setFontSize(20);


    // loadCustomFont(doc); // Load the custom font
    doc.setFont("Tanseek Modern Pro Arabic"); // Set custom font
    doc.setFontSize(200);

   


    // // Set the logo as a background image (covering the whole page)
    const BGlogoWidth =60;
    const BGlogoHeight = 40;
    doc.addImage(logoPDF, 'PNG', 75, 0, BGlogoWidth, BGlogoHeight);

    // // Simulate opacity by adding a semi-transparent rectangle
    // doc.setFillColor(255, 255, 255, 0.5); // White color with 50% opacity
    // doc.rect(0, 0, BGlogoWidth, BGlogoHeight, 'F'); // Fill the rectangle to simulate opacity

      // Set font and add text
      doc.setFont("Tanseek Modern Pro Arabic");
      doc.setFontSize(20);

      // Draw a line for separation
      doc.setDrawColor(0, 0, 0); // Set line color to black
      // doc.setLineWidth(1); // Set line width
      doc.line(10, 40, 200, 40); // Draw line from (10, 60) to (200, 60)
      
      // Line Before Footer
      doc.line(10, 265, 200, 265); // Draw second line after the last text

      // Adding Footer logo
      const logoWidth = 30;  // Adjust width as needed
      const logoHeight = 20; // Adjust height as needed

      // Set position for logo at the bottom of the page
      const logoX = 10; // Horizontal position for the logo
      const logoY = doc.internal.pageSize.height - logoHeight - 10; // Vertical position for the logo (10 units from the bottom)
      doc.addImage(logoPDF, 'PNG', logoX, logoY, logoWidth, logoHeight);

      // Add a clickable link
      const linkText = "hfssociety.net"; // Text for the link
      const linkYPosition = logoY+12 ; // Position the link above the logo
      const linkXPosition = 150; // Horizontal position for the link

      // Create a clickable link
      doc.textWithLink(linkText, linkXPosition, linkYPosition, { url: 'https://google.com' }); // Replace with your actual URL


        // Adding text below the first line
      const textYPosition = 70; // Adjust based on line position

      // Adding content
      doc.text(`Sponsor ID: ${formData.sponserid}`, 20, textYPosition);
      doc.text(`First Name: ${formData.firstName}`, 20, textYPosition+20);
      doc.text(`User Name: ${formData.username}`, 20, textYPosition+40);
      doc.text(`Last Name: ${formData.lastName}`, 20, textYPosition+60);
      doc.text(`Your Mail: ${formData.email}`, 20, textYPosition+80);
      doc.text(`Your Passowrd: ${formData.password}`, 20, textYPosition+100);
      
       // Draw the second line after the data
      // doc.line(10, textYPosition + 100, 200, textYPosition + 100); // Draw second line after the last text
    // Save the generated PDF
    doc.save("UserData.pdf");
  };


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        backgroundColor: '#161117',
      }}
    >          <img src={logo} alt="" height={"100px"}  />

      <Box
        sx={{
          maxWidth: 900,
          height: '100vh',
          mx: 'auto',
          mt: 5,
          p: 3,
          borderRadius: '18px',
          backgroundColor: '#fff',
          boxShadow: '0 0 10px 1px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '120px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography 
          className="text-gradient"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Tanseek Modern Pro Arabic',
            fontSize: '75px',
            fontWeight: 'bold',
            letterSpacing: '50px',
            textAlign: 'center',
            pb: 3
          }}
          >
            REGISTER
          </Typography>
        </Box>
        <Stepper activeStep={activeStep} >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                sx={{
                  '& .MuiStepLabel-label': {
                    fontFamily: 'Tanseek Modern Pro Arabic',
                    fontSize: '20px',
                    fontWeight: 'lighter',
                    color: '#51d5f5',    
                   },
                }}
              >{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={handleNext} >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',flexDirection: 'column',gap: 0}}>
          <Box>
          {activeStep === 0 && (
            <>
              <TextField
                fullWidth
                label="Sponsor ID"
                name="sponserid"
                value={formData.sponserid}
                onChange={handleChange}
                error={!!sponserIdError}
                helperText={sponserIdError}
                required
                sx={{
                  mb: 3,
                  mt: 6,
                  "& .MuiInputLabel-root": {
                    color: 'blue', // Label text color
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: 'blue', // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: 'blue', // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: 'blue', // Focused border color
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    color: 'gray', // Helper text color
                  }
                }}
                InputLabelProps={{
                  style: { color: 'Black' }, // Ensure label color is white
                }}
                InputProps={{
                  style: { color: 'black' }, // Input text color
                }}
              />
            </>
          )}

          {activeStep === 1 && (
            <>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                pt: 3,
                pb: 3,
              }}>
                <Typography variant="h6" textAlign={'center'} style={{ color: 'Black', fontWeight: 'bold' }}>Confirm Sponsor ID</Typography>
                <Typography
                  variant="body1"
                  textAlign={'center'}
                  style={{ color: 'Black' }}
                >
                  Are you sure you want to join under the Sponsor ID: {formData.sponserid}?
                </Typography>
                <Typography
                style={{ color: 'Black', fontWeight: 'bold' }}
                >Full Name: {selectedSponsorName}</Typography>
              </Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isConfirmed}
                    onChange={(e) => setIsConfirmed(e.target.checked)}
                    color="#e44896"
                    sx={{
                      color: '#63ccec',
                      '&.Mui-checked': {
                        color: '#e44896',
                      },
                    }}
                  />
                }
                style={{ color: 'black' }}
                label="Yes, I confirm this sponsor ID."
              />
              {sponserIdError && (
                <Typography color="error">{sponserIdError}</Typography>
              )}
            </>
          )}

          {activeStep === 2 && (
            <>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                sx={{
                  mb: 2,
                  mt: 2,
                  "& .MuiInputLabel-root": {
                    color: 'white', // Label text color
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: 'Black', // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: 'Black', // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: 'Black', // Focused border color
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    color: 'Black', // Helper text color
                  }
                }}
                InputLabelProps={{
                  style: { color: 'Black' }, // Ensure label color is white
                }}
                InputProps={{
                  style: { color: 'Black' }, // Input text color
                }}
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                sx={{
                  mb: 2,
                  "& .MuiInputLabel-root": {
                    color: 'Black', // Label text color
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: 'Black', // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: 'Black', // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: 'Black', // Focused border color
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    color: 'Black', // Helper text color
                  }
                }}
                InputLabelProps={{
                  style: { color: 'Black' }, // Ensure label color is white
                }}
                InputProps={{
                  style: { color: 'Black' }, // Input text color
                }}
                required
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                error={!!passwordError}
                helperText={passwordError}
                sx={{
                  mb: 2,
                  "& .MuiInputLabel-root": {
                    color: 'Black', // Label text color
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: 'Black', // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: 'Black', // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: 'Black', // Focused border color
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    color: 'Black', // Helper text color
                  }
                }}
                InputLabelProps={{
                  style: { color: 'Black' }, // Ensure label color is white
                }}
                InputProps={{
                  style: { color: 'Black' }, // Input text color
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                required
              />
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!passwordError}
                helperText={passwordError}
                sx={{
                  mb: 2,
                  "& .MuiInputLabel-root": {
                    color: 'white', // Label text color
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: 'Black', // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: 'Black', // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: 'Black', // Focused border color
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    color: 'Black', // Helper text color
                  }
                }}
                InputLabelProps={{
                  style: { color: 'Black' }, // Ensure label color is white
                }}
                InputProps={{
                  style: { color: 'Black' }, // Input text color
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                required
              />
            </>
          )}

          {activeStep === 3 && (
            <>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                sx={{
                  mb: 2,
                  mt: 2,
                  "& .MuiInputLabel-root": {
                    color: 'Black', // Label text color
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: 'Black', // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: 'Black', // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: 'Black', // Focused border color
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    color: 'Black', // Helper text color
                  }
                }}
                InputLabelProps={{
                  style: { color: 'Black' }, // Ensure label color is white
                }}
                InputProps={{
                  style: { color: 'Black' }, // Input text color
                }}
              />
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                sx={{
                  mb: 2,
                  "& .MuiInputLabel-root": {
                    color: 'Black', // Label text color
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: 'Black', // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: 'Black', // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: 'Black', // Focused border color
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    color: 'Black', // Helper text color
                  }
                }}
                InputLabelProps={{
                  style: { color: 'Black' }, // Ensure label color is white
                }}
                InputProps={{
                  style: { color: 'Black' }, // Input text color
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isAgreementChecked}
                    onChange={(e) => setIsAgreementChecked(e.target.checked)}
                    color="primary"
                    sx={{
                      color: '#63ccec',
                      '&.Mui-checked': {
                        color: '#e44896',
                      },
                    }}
                  />
                }
                required
                style={{ color: 'Black' }}
                label="I confirm that I am over 18 and agree to the Privacy & Cookies Policy."
              />
            </>
          )}

                  {/* /////////////////////////// Submit Data start \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}

                  {activeStep === 4 && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography sx={{ fontFamily: "Tanseek Modern Pro Arabic", fontSize: "30px", color: "black" }}>
            Sponsor ID: {formData.sponserid}
          </Typography>
          <Typography sx={{ fontFamily: "Tanseek Modern Pro Arabic", fontSize: "30px", color: "black" }}>
            User Name: {formData.username}
          </Typography>
          <Typography sx={{ fontFamily: "Tanseek Modern Pro Arabic", fontSize: "30px", color: "black" }}>
            Your Mail: {formData.email}
          </Typography>
          <Typography sx={{ fontFamily: "Tanseek Modern Pro Arabic", fontSize: "30px", color: "black" }}>
            First Name: {formData.firstName}
          </Typography>
          <Typography sx={{ fontFamily: "Tanseek Modern Pro Arabic", fontSize: "30px", color: "black" }}>
            Last Name: {formData.lastName}
          </Typography>

          {/* Button to trigger PDF generation */}
          <Button variant="contained" color="primary" onClick={generatePDF} sx={{ mt: 2 }}>
            Download as PDF
          </Button>
        </Box>
      )}

                  {/* /////////////////////////// Submit Data End \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}
            </Box>
            <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 2,
            }} 
                        >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, gap: 70 }}>


                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                      sx={{ flexGrow: 1, marginRight: 1 }} // Add flexGrow to push to the left
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      sx={{ flexGrow: 1, marginLeft: 1 }} // Add flexGrow to push to the right
                    >
                      {activeStep === steps.length - 1 ? 'Submit' : 'Next' }
                  
                    </Button>
                  </Box>
              </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
