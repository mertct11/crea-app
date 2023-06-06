import React from "react";
import "./CommentCard.style.scss";
import { StarRating } from "@/components";
interface CommentCardProps {
  image: string;
  username: string;
  comment: string;
  rating: number;
}

const CommentCard: React.FC<CommentCardProps> = ({
  image,
  username,
  comment,
  rating,
}) => {
  return (
    <div className="comment-card">
      <img src={image} alt="User Avatar" className="avatar" />
      <div className="content">
        <div className="info">
          <span className="username">{username}</span>
          <p className="comment">{comment}</p>
        </div>
        <StarRating value={rating} isEditable={false} />
      </div>
    </div>
  );
};

export default CommentCard;
