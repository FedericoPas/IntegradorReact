import React from 'react'
import { ArticlesFeaturedCart, ArticlesFeaturedContainer, ArticlesFeaturedWrapperStyles, BodyContainerStyles } from './BodyStyled'
import { categories } from '../../data/categories'
import ArticlesCategories from './ArticlesCategories'


const Body = () => {
  return (
    <BodyContainerStyles>
        <ArticlesFeaturedWrapperStyles>
            <h2>Destacados</h2>
            <ArticlesFeaturedContainer>
                {
                    categories.map((category) => {
                        return <ArticlesCategories key={category.id} {...category}/>
                    })
                }
            </ArticlesFeaturedContainer>
        </ArticlesFeaturedWrapperStyles>

        
    </BodyContainerStyles>
  )
}

export default Body
