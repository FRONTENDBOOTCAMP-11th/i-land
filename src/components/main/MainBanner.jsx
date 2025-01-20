import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";

import useAxiosInstance from "@hooks/useAxiosInstance";

const bannerImages = [
  "banner_1.jpeg",
  "banner_2.jpeg",
  "banner_3.jpeg",
  "banner_4.jpeg",
  "banner_5.jpeg",
];

export default function MainBanner() {
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      lazyLoad: "ondemand",
    }),
    [],
  );

  const axios = useAxiosInstance();

  const fetchBannerImages = async () => {
    const baseURL = "https://11.fesp.shop";
    const clientId = "final06";

    const responses = await Promise.all(
      bannerImages.map(filename => axios.get(`/files/${clientId}/${filename}`)),
    );

    return responses.map((response, index) => ({
      url: `${baseURL}/files/${clientId}/${bannerImages[index]}`,
      alt: `배너 ${index + 1} 이미지`,
    }));
  };

  const {
    data: images,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bannersImages"],
    queryFn: fetchBannerImages,
  });

  // 로딩 중 상태 처리
  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  // 에러 상태 처리
  if (error) {
    return <p>배너 이미지를 불러오는 중 오류가 발생했습니다.</p>;
  }

  // 데이터가 비어 있는 경우 처리
  if (!images || images.length === 0) {
    return <p>표시할 배너 이미지가 없습니다.</p>;
  }

  return (
    <div className="main-banner mb-[60px]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
