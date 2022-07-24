import styled from "styled-components";

export const Container = styled.form`
  max-width: 1120px;
  margin: 20px auto;
  width: 90%;
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  gap: 10px;

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input{
        margin-left: 20px;
        margin-right: 5px;
        accent-color: #000;
        margin-top: 0;
    }
`;

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    background: #A00BAE;
    transition: all .5s;

    &:hover{
      background: #C437D2;
    }

`;