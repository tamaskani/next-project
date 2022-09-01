import Product from "../../pages/products/[id]";

const ProductCard = ({ product }) => {
    return <div>
        {product.id}
        {product.title}
    </div>
}

export default ProductCard;