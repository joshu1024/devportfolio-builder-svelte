import type { Portfolio } from "$lib/types/portfolio";
import { getContext, setContext } from "svelte";

const PORTFOLIO_KEY = Symbol();

export function setPortfolioContext(portfolio:Portfolio){
    setContext(PORTFOLIO_KEY,portfolio)
}

export function getPortfolioContext(){
    return getContext<Portfolio>(PORTFOLIO_KEY)
}