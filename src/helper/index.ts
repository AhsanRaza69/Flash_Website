import { Products } from "../../type";

export const getProducts = async()=>{
    const res = await fetch("https://fakestoreapiserver.reactbd.com/smart")
    if(!res.ok){
        throw new Error("failed to fetch products")
    }
    return res.json()
}

export const getTrendingProducts = async () => {
    const res = await fetch(
      "https://fakestoreapiserver.reactbd.com/smarttrending"
    );
    if (!res.ok) {
      throw new Error("Faild to fetch products");
    }
    return res.json();  
  };

  export const GetSingleProduct =  async (_id:number)=>{
     const item = await getProducts()
     const singleItem = await item.find((product:Products)=> product._id === _id)
     return singleItem
  }