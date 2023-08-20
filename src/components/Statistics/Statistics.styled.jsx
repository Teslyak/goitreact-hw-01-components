const { styled } = require('styled-components');

export const Section = styled.section`
margin-top: 40px;
  width: 400px;
  height: 100px;
  margin-right: auto;
  margin-left: auto;
  background-color: #ddd6d6;
`;

export const Tittle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0;

`;

export const StatList = styled.ul`
  display: flex;
  width: 100%;

`;
export const StatLisItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${randColor};
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

function randColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}