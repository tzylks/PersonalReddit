
import IndividualCard from "./IndividualCard.js"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Masonry from '@mui/lab/Masonry';
import {Suspense} from 'react'
import Button from '@mui/material/Button'

function RedditCard( { metaData, nextAfter } ){ 

    return(
        <>
        <Box sx={{overflow:'hidden', padding: '100px' }}>
        <Grid container spacing={1}>
            {metaData.map(items => {
                return(
                    <Grid item lg={12}>
                    <IndividualCard items={items} />
                    </Grid>
                )
            })}
        </Grid>
        </Box>
        {/* <Button onClick={nextAfter}> Next Page </Button> */}
        </>
    )
}

export default RedditCard