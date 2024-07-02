"use client";


type Props ={
    params: {
        productId: string;
        reviewId: string;
    }
}

export default function ReviewPage({params}: Props) {

    const random= Math.floor(Math.random() *2);

    if(random===1){
        throw new Error("Some random error occured!")
    }

    if(+params?.reviewId>5){
        throw new Error("Review Id cannot be greater that 5")
    }

    return (
        <div><h1>Review {params?.reviewId} for product {params?.productId}</h1></div>
    );
}