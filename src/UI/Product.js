import { Button, Card, Image } from "react-bootstrap";
// import Rating from "react-rating";
// import EmptyStar from "../assets/images/empty-star.png";
// import FullStar from "../assets/images/full-star.png";

const Product = () => {
  
  return (
    <>
      <Card className="m-2">
        <Image
          width="100%"
          height="100%"
          src="https://i.ibb.co/R70vBrQ/men.png"
          class="img-thumbnail"
        />
        <p class="lead">Men Shirt</p>
        <h6 class="lead">$ 400</h6>
        <Button type="submit" class="btn btn-danger">
          Add To Cart
        </Button>
        {/* <Rating
          emptySymbol={<img src={EmptyStar} className="icon" />}
          fullSymbol={<img src={FullStar} className="icon" />}
        /> */}
      </Card>
    </>
  );
};

export default Product;
