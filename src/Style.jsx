import styled from 'styled-components';
import Image from './Images/space.jpg'
export default styled.div`
 .grid-container {
    height:100vh;
    display:grid;
    /* grid-gap:20px; */
    margin:10px 10px;
    background-image:url(${Image});
    background-size: cover;
}
.cell{ 
    color:#FFE81F;
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
} 

`;


//"darth vader - @tommyvkessel"