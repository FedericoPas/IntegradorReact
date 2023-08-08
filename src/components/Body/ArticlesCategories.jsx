import React from 'react'
import { ArticlesFeaturedCart, ArticlesCartText, ButtonCardStyle} from './BodyStyled'



 const ArticlesCategories = ({img, ciudad, pais}) => {
  return (
  
    <ArticlesFeaturedCart>
      <img src={img} alt={pais} />
      <ArticlesCartText>
          <h3>{pais}</h3>
          <h2>{ciudad}</h2>
         
      </ArticlesCartText>
      <ButtonCardStyle>Ver Mas</ButtonCardStyle>
    </ArticlesFeaturedCart>
    
  
    
  )
}

export default ArticlesCategories
