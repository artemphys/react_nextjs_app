
export async function fetchData() {
    const url = "https://63cdaad10f1d5967f03440e2.mockapi.io/users";
    // What if BE / API fails with 500?
    // What if BE / API fails with 429 (too many requests)
    // What if the BE / API is too slow and the user doesn't want to wait for it? (wants to cancel fetching)
    const responce = await fetch(url);
    return responce.json();
}

// User => Product[]
interface Product {
    quantity: string;
    unitPrice: string;
}
const products: Product[] = [];
const totalSum = [];