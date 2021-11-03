import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Suspense } from 'react'

function IndividualCard({ items }) {
    let image = items.data.url_overridden_by_dest
    const errorImage = (e) => {
        e.target.src = 'https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png' 
    }
    return (
        <>
            {image && image !== undefined ?
                
                    <Box component="img" src={image} onError={errorImage} sx={{backgroundImage: `url(${image})`, backgroundSize: '100%', height: 'auto', width: '50%'}}>
                        {/* <img onError={errorImage} src={image} alt='image' style={{ width: '100%'}}></img> */}
                    </Box>
                

                : null
            }
        </>
    )
}

export default IndividualCard