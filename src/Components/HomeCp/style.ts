import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  margin-top: 50px;
  font-weight: 900;
  color: white;
  font-size: 2.5rem;
  padding: 0 15px;

  p {
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    margin-top: 20px;
    width:90%;
    font-size: 1.8rem;
    background: -webkit-linear-gradient(var(--blue-light), var(--blue) 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  figure{
    width: 100%;
  
    img {
      margin: 50px auto;
      display: block;
      width: 250px;
      height: 250px;
      border-radius: 50%;
    }
  }

  a{
    display: block;
    text-align: center;
    width: 65%;
    margin: 0 auto;
    color: #ffff;
    background-color: blueviolet;
    border-radius: 5px;
    padding: 4px;
  }
`;
