import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = 'Rs.';
    const delivery_fee = 10;

    const backendURL = "https://knitted-handicraft-marketplace-backend.onrender.com";

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const saveCartToLocalStorage = (cartData) => {
      localStorage.setItem('cartItems', JSON.stringify(cartData));
  };

  const loadCartFromLocalStorage = () => {
      const storedCartItems = localStorage.getItem('cartItems');
      if (storedCartItems) {
          setCartItems(JSON.parse(storedCartItems));
      }
  };


    const addToCart = async (itemId, size) => {

        if(!size){
            toast.error('Please select a size');
            return;
        }
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
        if (token) {
          try {
              await axios.post(`${backendURL}/api/cart/add`, { itemId, size }, { headers: { token } });
          } catch (error) {
              console.log(error);
              toast.error(error.message);
          }
      }
        
    }

    const getCartCount=()=>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if (cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                }catch(error){
                }
            }
        }
        return totalCount;
    } 
    
    const updateQuantity = async (itemId, size, quantity) => {
      let cartData = structuredClone(cartItems);
      cartData[itemId][size] = quantity;
      setCartItems(cartData);

      if (token) {
          try {
              await axios.post(`${backendURL}/api/cart/update`, { itemId, size, quantity }, { headers: { token } });
          } catch (error) {
              console.log(error.message);
              toast.error(error.message);
          }
      }
  }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items);
            for(const item in cartItems[items]){
               try {
                if(cartItems[items][item] > 0){
                    totalAmount += cartItems[items][item] * itemInfo.price;
                }
               } catch (error) {
                
               }
            }
        }
        return totalAmount;
    }

    const getProductsData = async () => {
      try {
          const response = await axios.get(`${backendURL}/api/product/list`);
          if (response.data.success) {
              setProducts(response.data.products);
          } else {
              toast.error(response.data.message);
          }
          console.log(response);
      } catch (error) {
          console.log(error);
          toast.error(error.message);
      }
  };
  const getUserCart = async (token) => {
    try {
        const res = await axios.post(`${backendURL}/api/cart/get`, {}, { headers: { token } });
        if (res.data.success) {
            setCartItems(res.data.cartData);
            saveCartToLocalStorage(res.data.cartData);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
};
  useEffect(() => {
    getProductsData();
  }, []);
    
  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'));
        getUserCart(localStorage.getItem('token'));
    }
}, []);

const [discount, setDiscount] = useState({
    coupon: "",
    applied: false,
  });
  const [discountedAmount, setDiscountedAmount] = useState(getCartAmount());
  useEffect(() => {
    setDiscountedAmount(getCartAmount());
}, [cartItems]);

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, setCartItems, addToCart,
        getCartCount,
        updateQuantity, getCartAmount, navigate,
        backendURL, setToken,token, 
        user, discount, setDiscount, discountedAmount, setDiscountedAmount
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
