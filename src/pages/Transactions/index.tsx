/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { CalendarBlank, TagSimple } from "phosphor-react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { CardTransaction, PriceHighLight, TransactionCardList, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";


export function Transactions() {
   const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions;
   });

    return (
        <div>
             <Header />
             <Summary />
             <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type}>
                                            {transaction.type === 'outcome' && '- '}
                                        {priceFormatter.format(transaction.price)}
                                        </PriceHighLight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </TransactionsTable>
            {/* STYLED-COMPONENT RESPONSIVED */}
                <TransactionCardList>
                    {transactions.map(transaction => {
                        return (
                            <CardTransaction key={transaction.id}>
                                <header>
                                    <span>{transaction.description}</span>
                                        <PriceHighLight variant={transaction.type}>
                                        {transaction.type === 'outcome' && '- '}
                                        {priceFormatter.format(transaction.price)}
                                        </PriceHighLight>
                                </header>
                                <footer>
                                    <div>
                                        <TagSimple size={16} />
                                        {transaction.category}
                                    </div>
                                    <div>
                                        <CalendarBlank size={16} />
                                        {dateFormatter.format(new Date(transaction.createdAt))}
                                    </div>
                                </footer>
                    </CardTransaction>
                        )
                    })}
                </TransactionCardList>
            {/* STYLED-COMPONENT RESPONSIVED */}

            </TransactionsContainer>
        </div>
    )
}