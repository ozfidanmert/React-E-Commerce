import { createSlice } from "@reduxjs/toolkit";


const getBasketFromStorage = () => {
    const storage = localStorage.getItem("basket")

    if (storage) {
        return JSON.parse(storage)
    }

    return []
}

const initialState = {
    products: getBasketFromStorage(),
    totalAmount: 0
}

const writeFromBasketStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}



export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products?.find((product) => product.id == action.payload.id);
            if (findProduct) {
                //* sepette ürün mevcutsa
                findProduct.count += action.payload.count
            }
            else {
                state.products.push(action.payload)
            }
            writeFromBasketStorage(state.products)
        },
        deleteToBasket: (state, action) => {
            const deleteProduct = state.products?.filter((product) => product.id !== action.payload)
            if (deleteProduct) {
                state.products = deleteProduct
                writeFromBasketStorage(state.products)
            }
        },
        decrement: (state, action) => {
            const findProduct = state.products?.find((product) => product.id == action.payload.id)
            if (findProduct && findProduct.count > 1) {
                findProduct.count -= action.payload.count
            }
            else if ((findProduct && findProduct.count <= 1)) {
                const result = confirm(`${findProduct.title} Ürün silinecek emin misin?`)
                if (result) {
                    state.products = state.products?.filter((product) => product.id != action.payload.id)
                }
            }
            writeFromBasketStorage(state.products)
        },
        increment: (state, action) => {
            const findProduct = state.products?.find((product) => product.id == action.payload.id)
            if (findProduct) {
                findProduct.count += action.payload.count
                writeFromBasketStorage(state.products)
            }
        },
        allBasketDelete: (state) => {
            const result = confirm("Sepetteki tüm ürünler silinecek. Emin misin?")
            if (result) {
                state.products = []
                writeFromBasketStorage([])
            }
            else {
                return
            }

        },
        totalPrice: (state) => {
            let total = 0
            state.products?.map((product) => {
                total += product.price * product.count
            })
            state.totalAmount = total
        }
    }
})

export const { addToBasket, deleteToBasket, increment, decrement, totalPrice, allBasketDelete } = basketSlice.actions
export default basketSlice.reducer