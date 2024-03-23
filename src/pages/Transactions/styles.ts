/* eslint-disable @typescript-eslint/no-unsafe-return */
import { styled } from "styled-components";

export const TransactionsContainer = styled.main `
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem 2rem;

    @media (ma-width: 800px) {
        margin-top: 1.5rem;
    }
`;

export const TransactionsTable = styled.table `
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    td {
        padding: 1.25rem 2rem;
        margin-top: 1.2rem;
        background: ${props => props.theme["gray-700"]};

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }


    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const TransactionCardList = styled.div`
  display: none;

  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.75rem;
  }
`

export const CardTransaction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem;
  gap: 0.75rem;
  width: 100%;
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;

  header {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    color: ${(props) => props.theme['gray-300']};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    color: ${(props) => props.theme['gray-400']};

    div {
      display: flex;
      align-items: center;
      gap: 0.28rem;
    }
  }
`;

interface PriceHighLightProps {
    variant: 'income' | 'outcome';
}

export const PriceHighLight = styled.span<PriceHighLightProps> `
    color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};

    @media screen and (max-width: 800px) {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 2rem;
    }
`;