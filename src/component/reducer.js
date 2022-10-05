export const initialState = {
  basket: [],
  wishlist: [],
  user: null,
  employee: null,
  products: [],
  supplier: null,
  employeeOrders: [],
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);
//basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_WISHLIST":
      const index1 = state.wishlist.findIndex(
        (wlItem) => wlItem.id === action.id
      );
      let newwl = [...state.wishlist];

      if (index1 >= 0) {
        newwl.splice(index1, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in wishlist!`
        );
      }

      return {
        ...state,
        wishlist: newwl,
      };


      case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_BASKET":
      return {
        ...state,
        basket: action.basket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_EMPLOYEE":
      return {
        ...state,
        employee: action.employee,
      };

    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.products,
      };

    case "SET_SUPPLIER":
      return {
        ...state,
        supplier: action.supplier,
      };

    case "SET_EMPLOYEE_ORDERS":
      return {
        ...state,
        employeeOrders: action.employeeOrders,
      };

    default:
      return state;
  }
};

export default reducer;
