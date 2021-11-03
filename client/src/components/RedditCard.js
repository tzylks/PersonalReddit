
import IndividualCard from "./IndividualCard.js"

function RedditCard( { metaData } ){ 
    return(
        <>
            {metaData.map(items => {
                return(
                    <IndividualCard items={items} />
                )
            })}
        </>
    )
}

export default RedditCard