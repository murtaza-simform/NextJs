"use client"
import React, { useEffect, useState } from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  const [timer,setTimer] = useState<any>(0);

  useEffect(() => {
    setTimeout(() => {
      setTimer(1)
    }, 5000)
  }, []);

  return timer>=1 &&  <div>Product Detail {params?.productId}</div>;
};

export default ProductDetails;
