import React from 'react';
import { Avatar, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Features.css';


const Features = () => {
    const features = [
        {
            id: 1,
            name: 'Quiz-Based Mental Health Assessment',
            description: 'Engage in interactive quizzes to assess your mental well-being and receive personalized feedback.',
            feature_img: '/assets/images/quiz_logo.png', // Correct relative path from public folder
            icon: '/assets/images/quiz_logo.png',
            link: '/quiz-assessment'
        },
        {
            id: 2,
            name: 'AI Mental Health Chatbot',
            description: 'Chat with our AI-powered assistant to receive support, resources, and coping strategies tailored to your needs.',
            feature_img: '/assets/images/chatbot.png',
            icon: '/assets/images/chatbot.png',
            link: '/ai-chatbot'
        },
        {
            id: 3,
            name: 'Task and Reward System',
            description: 'Complete mental health tasks and earn coupon rewards to motivate and track your progress.',
            feature_img: '/assets/images/reward_system.png',
            icon: '/assets/images/reward_system.png',
            link: '/task-reward-system'
        }
    ];
    

    return (
        <Box sx={{ bgcolor: '#f0f4f8', color: 'primary.main', p: 2, mb: 2, textAlign: "center" }}>
            <Container maxWidth="xl">
                <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant='h6'>
                    Discover Our AI-Powered Mental Health Features
                </Typography>

                <Typography sx={{ mb: 8, fontWeight: 600 }} variant='h5'>
                    Innovative Tools for Your Mental Well-being
                </Typography>

                <Grid container spacing={3}>
                    {features.map((feature) => (
                        <Grid key={feature.id} item xs={12} md={6} lg={4}>
                            <Card className="animation" sx={{
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
                                        image={feature.feature_img}
                                        alt={`${feature.name} image`}
                                    />
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2 }}>
                                        <Avatar
                                            alt={`${feature.name} icon`}
                                            src={feature.icon}
                                            sx={{ width: 40, height: 40, mb: 2 }}
                                        />
                                        <Typography gutterBottom variant="h5" component="div">
                                            {feature.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {feature.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions style={{ justifyContent: 'center' }}>
                                    <Typography sx={{ mx: 2, p: 2, textAlign: "end" }}>
                                        <Link className='text-style' to={feature.link} color="primary">
                                            Learn More About {feature.name}
                                        </Link>
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Typography sx={{ mx: 2, p: 2, textAlign: "end" }}>
                    <HashLink smooth to="/ai-mental-health#features" className='text-style' color="primary">
                        Explore All AI Mental Health Features
                    </HashLink>
                </Typography>
            </Container>
        </Box>
    );
};

export default Features;
