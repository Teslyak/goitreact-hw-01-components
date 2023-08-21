const { styled } = require('styled-components');

export const Thead = styled.thead`
  background-color: #0dbbda;
  height: 40px;
`;

export const Trow = styled.tr`
 width: 50px;
`;
export const Th = styled.th`
font-size: 20px;
  text-align:center;
  color: white;
  
`;

export const Tbody = styled.tbody`
  tr:nth-child(odd) {
    background-color: #f7f3f3;
   }
    tr:nth-child(even) {
    background-color: #fff;
   }
`;
export const Table = styled.table`
margin-top: 40px;
  border-collapse: collapse;
  border-radius: 4px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  
`;