const { styled } = require('styled-components');

export const ProfileWrap = styled.div`
width: 220px;
background-color: #ddd6d6;
margin-left: auto;
margin-right: auto;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
margin-top: 25px;
border: 1px solid black;
border-radius: 4px;
`;

export const DescriptionWrap = styled.div`
padding-top: 25px;
display: flex;
flex-direction: column;
align-items: center;
border-bottom: 1px solid black;



`;

export const ImgProfile = styled.img`
width: 100px;
height: 100%;
border-radius: 50%; 
`;

export const DiscrpName = styled.p`
font-size: 20px;
margin-bottom: 10px;
color: black;
`;
export const DiscrpTag = styled.p`
  
`;
export const DiscrpLocation = styled.p`
  
`;

export const StatProfile = styled.ul`
width: 100%;
display: flex;
:last-child {
border-right: none;
}

`;
export const StatList = styled.li`
display: flex;
flex-direction: column;
align-items: center;
border-right: 1px solid black;
padding: 10px;
width: 100%;
`;
export const Wraper = styled.div`
  
`;
export const StatSpanLabel = styled.span`
 font-weight: bold;
`;
export const StatSpanQuantity = styled.span`
  
`;