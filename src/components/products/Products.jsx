import Card from "../card/Card";

const Products = ({ products }) => {
  return (
    <>
      <div className="poducts flex flex-wrap w-340 justify-center">
        {products.map((product,) => (
          <Card product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
