import styled from "styled-components";

export const SearchPlace = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom:150px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left:50px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  line-height: 56px;
  color: #ffffff;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #ffffff;
`;

export const SearchForm = styled.div`
  width: 100%;
  margin-top: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#1c140f;
`;

export const SecondTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  line-height: 56px;
  color: #ffffff;
`;

export const SecondSubTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #ffffff;
`;

export const Form = styled.form`
  position: relative;
  margin-right:50px;
`;

export const Button = styled.button`
  border-radius: 8px;
  background-color: #dc7000;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #ffffff;
  text-align: center;
  position: absolute;
  right: 6px;
  top: 8px;
  padding: 8px 14px 8px 22px;
  border: none;
`;

export const Input = styled.input`
  width: 386px;
  height: 48px;
  border-radius: 8px;
`;
