type Props ={
    params: {
        productId: string;
        reviewId: string;
    }
}

export default function ReviewPage({params}: Props) {
    return (
        <div><h1>Review {params?.reviewId} for product {params?.productId}</h1></div>
    );
}