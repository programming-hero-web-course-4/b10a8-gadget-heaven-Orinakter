import { toast } from "react-toastify";

const getWishToLS =()=>{
    const WishItem = localStorage.getItem("WishItem");
    if(WishItem){
        return JSON.parse(WishItem)
    }
    else{
        return [];
    }
}

const setWishItem = (item)=>{
    const objWish = getWishToLS();
    const WishCondition = objWish.find(Wish=>Wish.product_id === item.product_id )
    if(WishCondition){
        toast.error("item already added")
        return
    }
    else{
        objWish.push(item)
    saveWishItemLS(objWish)
    toast.success("item added to Wishlist successfully")

    }
    

}

const saveWishItemLS = (item)=>{
    const itemStr = JSON.stringify(item)
    localStorage.setItem("WishItem",itemStr)

}

const removeEachWishItem = (item)=>{
    const WishItem = getWishToLS();
    const reminingWish= WishItem.filter(Wish=>Wish.product_id !== item.product_id)
    saveWishItemLS(reminingWish);


}

export {getWishToLS,setWishItem,removeEachWishItem}