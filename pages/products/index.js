import ProductCard from "../../components/product/productCard";
import Link from 'next/link'

export default function Products(props) {

    return (
        <div>
            producs
            <div>
                {props?.products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div>
                {[...Array(Math.ceil(props.total / props.prePage))].map((_, index) => (
                    <span key={index}>
                        <Link href={`/products?page=${index + 1}`}>
                            {index + 1}
                        </Link>
                    </span>
                ))}
            </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const { page } = ctx.query;

    const res = await fetch(`http://localhost:3001/products?_page=${page}`);
    const data = await res.json();
    const total = res.headers.get('x-total-count');

    return {
        props: {
            products: data,
            total: total ?? 1,
            prePage: 10
        }
    }
}