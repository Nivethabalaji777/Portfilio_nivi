import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    width: 280px;
    height: 350px;
    background-color: #1a193b;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 2px 2px #66667c;
    overflow: hidden;
    
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 10px 2px #66667c;
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`


const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
    justify-content: center;
    align-items: center;
    hr {
        width: 80%;
        border: 0.5px solid #ddd0d1;
        margin: 8px 0;
    }
`
const Title = styled.div`
    font-size: 25px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`
const ActionButton = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
   
`;

const ProjectCards = ({project}) => {
    return (
        <Card>
            <Image src={project.image}/>
            <Details>
                
                <Title>{project.title}</Title>
                <hr />
                <div className="buttons flex mx-4 mt-2 mb-4 space-x-5">
                    <a href={project.github} target="_blank" rel="noreferrer">
                        <ActionButton
                            type="button"
                            className="px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 shadow-md hover:shadow-lg transition duration-150 ease-in-out"
                        >
                            Code
                        </ActionButton>
                    </a>
                    <a href={project.webapp} target="_blank" rel="noreferrer">
                        <ActionButton
                            type="button"
                            className="px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 shadow-md hover:shadow-lg transition duration-150 ease-in-out"
                        >
                            Live
                        </ActionButton>
                    </a>
                </div>
            </Details>
            {/* <Button>View Project</Button> */}
        </Card>
    )
}

export default ProjectCards