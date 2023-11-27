const FilterReduceer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_DATA":
            let priceArr = action.payload.map((curElem) => curElem.price);
            let maxPrice = Math.max(...priceArr);

            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filter: { ...state.filter, maxPrice, price: maxPrice },
            };

        case "SET_GRIDVIEW":
            return {
                ...state,
                gird_view: true
            };

        case "PRODUCT_LIST_VIEW":
            return {
                ...state,
                gird_view: false
            };
        case "GET_SORT_VALUE":
            const userSelect = document.getElementById("countries")
            const sortValue = userSelect.options[userSelect.selectedIndex].value;

            return {
                ...state,
                sort_value: sortValue,
            };

        case "SHORTING_PRODUCT":
            let newSortProduct;
            let temProduct = [...action.payload];
            if (state.sort_value === "High") {
                const sortedProductbyPrice = (a, b) => {
                    return b.price - a.price
                }
                newSortProduct = temProduct.sort(sortedProductbyPrice);
            }
            if (state.sort_value === "Low") {
                const sortedProductbyPrice = (a, b) => {
                    return a.price - b.price
                }
                newSortProduct = temProduct.sort(sortedProductbyPrice);
            }
            if (state.sort_value === "a-z") {
                newSortProduct = temProduct.sort((a, b) => a.name.localeCompare(b.name));
            }

            if (state.sort_value === "z-a") {
                newSortProduct = temProduct.sort((a, b) => b.name.localeCompare(a.name));
            }
            return {
                ...state,
                filter_products: newSortProduct,
            };

        //updater search value 
        case "UPDATE_SEARCH_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [name]: value,
                }

            }
        case "SEARCH_PRODUCT_UPDATE":
            let { all_products } = state;
            let tempFilterProduct = [...all_products]
            const { text, category, price } = state.filter;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter(curElm => {
                    return curElm.name.toLowerCase().includes(text);
                })
            }


            if (category != "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.category == category
                );
            }
            if (price) {
                tempFilterProduct = tempFilterProduct.filter((curElm) => curElm.price <= price)
            }


            return {
                ...state,
                filter_products: tempFilterProduct,

            }

        // clear filter reducer
        case "CLEAR_FILTER":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    text: "",
                    category: "all",
                    maxPrice: state.filter.maxPrice,
                    price: state.filter.maxPrice,
                    minPrice: state.filter.minPrice
                }
            }

        default:
            return state;
    }

}

export default FilterReduceer
