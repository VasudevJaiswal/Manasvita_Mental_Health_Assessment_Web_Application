import { Avatar, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useData from '../../../Hooks/useData';
import './Whyus.css'

const Whyus = () => {
    const [ourServices, setOurServices] = useState([]);
    const mainData = useData();
    let services = mainData[0];

    // Handle undefined problem in mapping data
    useEffect(() => {
        if (services.length > 0) {
            const serv = services?.slice(0, 3);
            setOurServices(serv);
        }
        else {
            <LinearProgress color="secondary" />
        }
    }, [services]);

    return (
        <Box sx={{ bgcolor: '#f0f4f8', color: 'primary.main', p: 2, mb: 2, textAlign: "center" }}>
            <Container maxWidth="xl">
                <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }}
                    variant='h6'
                >
                    Why Choose Our Mental Health Services
                </Typography>

                <Typography sx={{ mb: 8, fontWeight: 600 }}
                    variant='h5'
                >
                    Leading the Way in Comprehensive Mental Health Care and Support
                </Typography>

                {
                    services?.length > 1 && <Grid container spacing={3}>
                        {
                            ourServices?.map((service) => (
                                <Grid key={service.id} className={service.class} item xs={12} md={6} lg={4}>
                                    <Card sx={{
                                        maxWidth: 345, transition: '0.5s all ease-in-out', mb: 2, ':hover': {
                                            boxShadow: 10,
                                            color: '#e91e63'
                                        }, 'img': { transition: '0.5s all ease-in-out' },
                                        ':hover img': {
                                            transform: 'scale(1.1)'
                                        }
                                    }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="240"
                                                image={service?.service_img}
                                                alt="service image"
                                            />
                                            <CardContent sx={{ display: 'flex', mx: 'auto', my: 2 }}>
                                                <Avatar
                                                    alt="service icon"
                                                    src={service?.icon}
                                                    sx={{
                                                        width: 40, height: 40, mx: 'auto'
                                                    }}
                                                />
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {service.treatment} Counseling
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions style={{ justifyContent: 'center' }}>
                                            <Typography sx={{ mx: 2, p: 2, textAlign: "end" }} >
                                                <Link className='text-style' to="/mental-health-services" color="primary">
                                                    Learn More About {service.treatment} Counseling
                                                </Link>
                                            </Typography>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                }

                <Typography sx={{ mx: 2, p: 2, textAlign: "end" }} >
                    <HashLink smooth to="/mental-health-services#services" className='text-style' color="primary">
                        Explore All Mental Health Services
                    </HashLink>
                </Typography>

            </Container>
        </Box>
    );
};

export default Whyus;
