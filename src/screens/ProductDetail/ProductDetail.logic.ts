import { ProductDetailTabNames } from "@/consts/ProductDetailTabNames";
import { MethodTypes } from "@/enums";
import { fetcher } from "@/http";
import { ICommentItem } from "@/interfaces/ICommentItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProductDetailItem {
  id: number;
  name: string;
  description: string;
  delivery_date: string;
  total_comment_count: number;
  price: string;
  currency: string;
  rating: number;
  image: string;
}
const ProductDetailLogic = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState<IProductDetailItem>();
  const [comments, setComments] = useState<Array<ICommentItem>>([]);
  const [avarageRating, setAvarageRating] = useState<number>(0);
  const [totalCommentCount, setTotalCommentCount] = useState<number>(0);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [commentText, setCommentText] = useState<string>("");
  const [commentRate, setCommentRate] = useState<number>(0);
  const [saveErrorText, setSaveErrorText] = useState<string>("");
  const [choosenTabTitle, setChoosenTabTitle] = useState<string>(
    ProductDetailTabNames[0]
  );

  useEffect(() => {
    let productId: string = window.location.pathname.split("/").pop() || "";
    getProductDetail(productId);
    getComments();
  }, []);

  const getProductDetail = async (id: string) => {
    const response = await fetcher({
      method: MethodTypes.GET,
      url: "/product-details?id=" + id,
    });
    if (response?.success) {
      setProduct(response?.data);
    } else {
      navigate("/products");
    }
  };

  const getComments = async () => {
    const response = await fetcher({
      method: MethodTypes.GET,
      url: "/comments",
    });
    if (response?.success) {
      setComments(response?.data);
      setTotalCommentCount(response?.totalCount);
      setAvarageRating(response?.averageRating);
    } else {
      console.log("error!", response);
    }
  };

  const handleTabClick = (tabId: number, tabTitle: string) => {
    setSelectedTab(tabId);
    setChoosenTabTitle(tabTitle);
  };

  const handleCommentChange = (value: string) => {
    setCommentText(value);
    setSaveErrorText("");
  };
  const handleRatingChange = (value: number) => {
    setCommentRate(value);
    setSaveErrorText("");
  };
  const handleSaveClick = async () => {
    const response = await fetcher({
      method: MethodTypes.POST,
      url: "/comments",
      data: {
        commentRate,
        commentText,
      },
    });
    if (response?.success) {
      setCommentRate(0);
      setCommentText("");
      getComments();
    } else {
      setSaveErrorText(response?.data?.message);
    }
  };

  return {
    product,
    handleTabClick,
    handleCommentChange,
    handleRatingChange,
    selectedTab,
    choosenTabTitle,
    handleSaveClick,
    saveErrorText,
    commentRate,
    comments,
    totalCommentCount,
    avarageRating,
  };
};

export default ProductDetailLogic;
