/* eslint-disable @typescript-eslint/no-misused-promises */
import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

/**
 * POR QUE QUE UM COMPONENTE RENDERIZA?
 * - HOOKS CHANGED (MUDOU ESTADO, CONTEXTO, REDUCER);
 * - PROPS CHANGED (MUDOU PROPRIEDADES);
 * - PARENT RERENDERES (COMPONENT PAI RENDERIZOU, O FILHO TAMBÉM VAI RENDERIZAR);
 * 
 * QUAL O FLUXO DE RENDERIZAÇÃO?
 * 1. O REACT RECRIA O HTML DA INTERFACE DAQUELE COMPONENTE
 * 2. COMPARA A VERSÃO DO HTML RECRIADA COM A VERSÃO ANTERIOR
 * 3. SE MUDOU ALGUMA COISA, ELE REESCREVE O HTML NA TELA
 * 
 * MEMO: É UTILIZADO PARA MEIO QUE COLOCAR UM PASSO A MAIS NA RENDERIZAÇÃO DO REACT, COMO UM PASSO 0
 * 0. HOOKS CHANGED, PROPS CHANGED (DEEP COMPARISON) OU SEJA ELE COMPARA A FUNDO OS HOOKS E PROPRIEDADES.
 * 0.1: COMPARAR A VERSÃO ANTERIOR DOS HOOKS E PROPS
 * 0.2: SE MUDOU ALGO, ELE VAI PERMITIR A NOVA RENDERIZAÇÃO
 * 
 */

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
    const fetchTransactions  = useContextSelector(TransactionsContext, (context) => {
            return context.fetchTransactions
        },
    )

    const { 
        register,
        handleSubmit,
        formState: {isSubmitting} 
        } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchTransactions(data: SearchFormInputs) {
        // await new Promise(resolve => setTimeout(resolve, 2000));
        // console.log(data);
        await fetchTransactions(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
                type="text" 
                placeholder="Busque uma transação"
                {...register('query')}
                />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}