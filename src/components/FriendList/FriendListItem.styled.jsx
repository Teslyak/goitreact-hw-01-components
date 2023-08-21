const { styled } = require('styled-components');

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 250px;
  height: 70px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding-left: 15px;
  border-radius: 4px;
  background-color: #ddd6d6;
`;

export const Status = styled.span`
display: block;
width: 15px;
height: 15px;
background-color: ${getStatus};
border-radius: 50%;
`;
export const Image = styled.img`
  
`;
export const Name = styled.p`
  font-weight: bold;
`;

function getStatus(props) {
    if (props.$status) {
        return 'green'  
    } else
    return 'red'
} 

