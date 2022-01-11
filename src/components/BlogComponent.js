import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'


const Box = styled(motion.nav)`
width: calc(10rem + 15vw);
text-decoration: none;
height: 20rem;
padding: 1rem;
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
backdrop-filter: blur(2px);
box-shadow:0 0 1rem 0 rgba(0,0,0,0.2);
cursor: pointer;

display: flex;
flex-direction: column;
z-index:5;

&:hover{
    color:${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 0.3s ease;
}


`

const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width:100%;
height: 60%;
background-size: cover;
border: 1px solid transparent;
background-position: center center;

${Box}:hover &{
    border:1px solid ${props => props.theme.body};
    
}


`
const Title = styled.h3`
color: inherit;
padding: 0.5rem 0;
padding-top:1rem;
font-family: 'Karla',sans-serif;
font-weight:700;
border-bottom: 1px solid ${props => props.theme.text};

${Box}:hover &{
    border-bottom: 1px solid ${props => props.theme.body};

    
}
`
const Category = styled.span`
padding-top: 0.5rem;
padding-bottom: 0.5rem;
`
const HashTags = styled.div`
padding: 0.5rem 0;
`
const Tag= styled.span`
padding-right: 0.5rem;
`
const TechTag= styled.span`
padding-right: 0.5rem;
font-family: 'Karla',sans-serif;
`
const Date = styled.span`
padding:0.5rem 0;
`

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const BlogComponent = (props) => {
    const {title, slug, publishDate, author, importance, body, link, category, tag, technology} = props.post;
    const image = props.post.image.fields.file.url;

    return (
        <Container
        variants={Item}
        
        >
            <Box target="_blank"
        >
            <Date>
                {publishDate}
            </Date>
            <Category>
                {category.fields.category}
            </Category>
            <Image img={image}  alt={title} title={title}/>
            <Title>{title}</Title>
            <HashTags>
                {
                    (tag !== (null || undefined)) &&
                    tag.map((t,id) => {
                        return <Tag key={id}>#{t.fields.tag}</Tag>
                    })
                }
            </HashTags>
            <HashTags>
                {
                    (technology !== (null || undefined)) &&
                    technology.map((t,id) => {
                        return <TechTag key={id}>#{t.fields.technology}</TechTag>
                    })
                }
            </HashTags>
        </Box>
        </Container>
    )
}

export default BlogComponent