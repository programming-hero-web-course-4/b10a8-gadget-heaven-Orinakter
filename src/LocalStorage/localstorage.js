import { toast } from "react-toastify";

const getCartToLS =()=>{
    const cartItem = localStorage.getItem("cardItem");
    if(cartItem){
        return JSON.parse(cartItem)
    }
    else{
        return [];
    }
}

const setcartItem = (item)=>{
    const objCart = getCartToLS();
    const cartCondition = objCart.find(cart=>cart.product_id === item.product_id )
    if(cartCondition){
        toast.error("item already added")
        return
    }
    else{
        objCart.push(item)
    saveCartItemLS(objCart)
    toast.success("item added to cart successfully")

    }
    

}

const saveCartItemLS = (item)=>{
    const itemStr = JSON.stringify(item)
    localStorage.setItem("cardItem",itemStr)

}

const removeEachCardItem = (item)=>{
    const cartItem = getCartToLS();
    const reminingCart= cartItem.filter(cart=>cart.product_id !== item.product_id)
    saveCartItemLS(reminingCart);


}

export {getCartToLS,setcartItem,removeEachCardItem}