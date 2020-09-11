import styled from "styled-components";


export const ContainerHome = styled.div`
   /* border: 2px solid;
   border-radius:10px; */
   /* border-top: 2px solid gray; */
   width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 5px;
   
    
`;
export const ContainerHeader = styled.div`
     border-bottom: 2px solid gray;
     display:flex;
     align-items:center;
     > h1{
        margin-left:50px;
     }
     >button{
        width:50px;
        height:50px;
        margin-left:100px;
        margin-top:10px;
      }

     
     
`
export const ContainerImg = styled.div`
     display:block;
      border-radius: 50px;
      margin: 10px 10px ;
     
`
export const ContainerButton = styled.div`
   display:Flex;

`