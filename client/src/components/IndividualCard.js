
function IndividualCard( { items } ){ 
    let image = items.data.url_overridden_by_dest
    return(
        <>
        {image && image !== undefined ?
            <img  src={image} alt="reddit image" /> : null
        }
        </>
    )
}

export default IndividualCard