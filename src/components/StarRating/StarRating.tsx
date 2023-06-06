import ReactStars from "react-stars";

interface IStarRating {
  isEditable: boolean;
  value: number;
  ratingChange?: (rate: number) => void;
}

const StarRating = (props: IStarRating) => {
  const { value, isEditable, ratingChange } = props;
  return (
    <div>
      <ReactStars
        onChange={(rate: number) => {
          if (ratingChange) {
            ratingChange(rate);
          }
        }}
        key={"stars_value"}
        edit={isEditable}
        half={true}
        value={value}
        count={5}
        size={24}
        color2={"#ffd700"}
      />
    </div>
  );
};

export default StarRating;
