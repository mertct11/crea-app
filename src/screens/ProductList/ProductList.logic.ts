import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetcher } from "@/http";
import { MethodTypes } from "@/enums";
interface IProductListItem {
  id: number;
  image: string;
  rating: number;
  name: string;
  price: string;
  currency: string;
  handleCardClick: (id: string) => void;
}

const ProductListLogic = () => {
  const navigate = useNavigate();

  const [productList, setProductList] = useState<Array<IProductListItem>>();

  useEffect(() => {
    getProductList();
  }, []);

  const handleCardClick = (id: string) => {
    navigate("/product-detail/" + id);
  };

  const getProductList = () => {
    fetcher({ method: MethodTypes.GET, url: "/products" }).then((res: any) => {
      setProductList(res.data);
    });
  };

  return {
    productList,
    handleCardClick,
  };
};

export default ProductListLogic;
