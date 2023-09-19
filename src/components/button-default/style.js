import styled from "styled-components";

export const ButtonStyle = styled.div`
    .button{
        width:${props => props.size} !important;
        background-color: ${props => props.bgColor} !important;
        color:${props => props.textColor} !important;        
        border: none !important;
        transition: 0.3s;

        &:hover{
            filter: brightness(0.8);
        }
        &:focus{
            filter: brightness(0.8);
        }
    }
`;

// export const ButtonStyle = styled.button`
//   font-family: "Katibeh";
//   font-weight: 400;
//   line-height: 25px;
//   font-size: 36px;
//   background-color: #c4eff2;
//   color: #303030;
//   border-radius: 10px;
//   border: none;
//   cursor: pointer;
//   padding: 10px 10px 20px 10px;
//   margin: 10px 0 50px 0;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   transition: 0.5s ease;

//   &:hover {
//     transform: scale(0.9);
//   }
// `;