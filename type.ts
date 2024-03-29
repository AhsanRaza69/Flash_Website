 export interface BlogProduct{
    id:number;
    title:string;
    image:string;
    category:string;
    description:string;
 }

 export interface Products {
  _id:number,
  title:string;
  isNew:boolean;
  oldPrice:number;
  price:number;
  description:string;
  category:string;
  image:string;
  rating:number;
  quantity:number

}

export interface stateProps{
  shop: {
    ProductData: [];
    ShopCart:[]
      userInfo: {};
    };
}
