import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';

  & > main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
  }
`
export const Links = styled.ul`
  list-style: none;

  & > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  & > button:first-child {
    align-self: flex-end;
  }

  & > button:last-child {
    margin-top: 116px;
  }

  & > h1 {
    padding-top: 64px;

    font-size: 36px;
    font-weight: 500;
    line-height: 47px;
  }

  & > p {
    margin: 16px 0 40px;

    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: justify;
  }
`
