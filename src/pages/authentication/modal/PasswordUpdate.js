import React from "react";
import styled from "styled-components";
import Pass from "./images/PasswordUpdate.svg";

function PasswordUpdate(props) {
  return (
    <Wrapper>
      <Container>
        <Image loading="lazy" src={Pass} />
        <Message>Password Updated Successfully!</Message>
        <Button>Continue</Button>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0; /* Set a different background color here */
`;

const Container = styled.div`
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 491px;
  max-width: 491px;
  height: 20em;
  padding: 32px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Image = styled.img`
  aspect-ratio: 1.14;
  object-fit: contain;
  object-position: center;
  width: 150px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
`;

const Message = styled.div`
  color: var(--Primary, #6c63ff);
  letter-spacing: 0.15px;
  align-self: center;
  margin-top: 34px;
  white-space: nowrap;
  font: 600 23px/140% Lato, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Button = styled.div`
  color: var(--White, #fff);
  letter-spacing: 0.15px;
  white-space: nowrap;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 8px;
  background-color: var(--Primary, #6c63ff);
  margin-top: 54px;
  padding: 12px 60px;
  font: 600 16px/140% Lato, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
    max-width: 100%;
    padding: 0 20px;
  }
`;

export default PasswordUpdate;
