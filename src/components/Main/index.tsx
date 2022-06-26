import React from 'react'
import * as S from './styles'
const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title> React Avançado 1</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJs, e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para tela do computador"
    />
  </S.Wrapper>
)

export default Main
