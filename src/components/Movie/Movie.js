import React from "react";
import {styled} from "@mui/material";
import css from './Movie.module.css'

const Div = styled('div')({
    display: 'inline-block',
    margin: '1.4rem'

})

const Movie = (props) => {

    const {id, releaseDate, primaryImage, titleText, titleType, ratingsSummary} = props

    return (
        <Div>
            <span className={css.type}>{titleType.id}</span>
            {ratingsSummary.aggregateRating != null &&
            <span className={css.rating}>{ratingsSummary.aggregateRating}</span>

            }
            {/*src={primaryImage.url}*/}
            <img style={{width: '200px', height: '300px'}} src={`${primaryImage.url}`}/>


            <p className={css.caption}>
                {titleText.text}
                {releaseDate != null &&
                <>
                    {"\n"}({releaseDate.year})
                </>
                }
            </p>

        </Div>
    )
}

export default Movie