import styled from 'styled-components'

export const Container = styled.section`
  margin: 14px 0;

  & > h2 {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 16px;
    margin-bottom: 24px;

    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`
