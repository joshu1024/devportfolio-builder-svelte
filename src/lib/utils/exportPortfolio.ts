import type { Portfolio } from "$lib/types/portfolio";

export function exportPortfolio(portfolio: Portfolio) {
	const json = JSON.stringify(portfolio, null, 2);

	const blob = new Blob([json], {
		type: "application/json"
	});

	const url = URL.createObjectURL(blob);

	const a = document.createElement("a");

	a.href = url;
	a.download = "portfolio.json";

	a.click();

	URL.revokeObjectURL(url);
}