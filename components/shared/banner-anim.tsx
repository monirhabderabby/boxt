"use client";
import { useLottie } from "lottie-react";
import animationData from "../../lottie/coupon_animation.json";

const BannerAnim = () => {
  const options = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(options);
  return <>{View}</>;
};

export default BannerAnim;
