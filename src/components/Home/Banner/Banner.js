import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './Banner.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {

    function Item(props) {
        return (
            <Paper>
                <div className='banner-container'>
                    <img src={props.item.img} alt="" className='banner-image' />
                    <div className='banner-text tracking-in-expand'>
                        <Typography component="h4" variant="h5" className="banner-heading">
                            {props.item.name}
                        </Typography>
                        <Typography component="p" className="banner-description">
                            {props.item.description}
                        </Typography>

                        <HashLink smooth to="/appointment#appointment" className='text-style'>
                            <Button sx={{ mt: 2 }} variant="contained" className="CheckButton">
                                Schedule an Appointment
                                <AddCircleIcon />
                            </Button>
                        </HashLink>
                    </div>
                </div>
            </Paper>
        )
    }

    const items = [
        {
            name: "Take the First Step Towards Mental Well-being",
            description: "Your mental health is just as important as your physical health. Start your journey with us today.",
            img:"https://plus.unsplash.com/premium_photo-1683865775849-b958669dca26?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "24/7 Expert Mental Health Support",
            description: "Our team of mental health professionals is available online 24/7 to support you through any challenges.",
            img:"https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Mental Health Checkups: Stay On Top of Your Wellness",
            description: "Regular checkups ensure that you're staying mentally healthy. Prevention and self-care are key to well-being.",
            img:"https://plus.unsplash.com/premium_photo-1672292535264-ef6dab7d6a90?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    return (
        <div>
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    );
};

export default Banner;
