import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";

import useAxiosInstance from "@hooks/useAxiosInstance";

import ProductCard from "@components/common/ProductCard";
import SearchNoResult from "@components/search/SearchNoResult";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || ""; // URL에서 keyword 가져오기
  const axios = useAxiosInstance();

  const {
    data: results,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["searchResults", keyword],
    queryFn: async () => {
      if (!keyword) return [];
      const response = await axios.get(`/products?keyword=${keyword}`);
      console.log(response.data);
      if (!response.data || !response.data.item) {
        throw new Error("Invalid response format");
      }
      return response.data.item;
    },
    enabled: !!keyword,
  });

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    return <div>오류가 발생했습니다. 잠시 후 다시 시도해주세요.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{keyword} 검색 결과 - ILAND</title>
        <meta property="og:title" content={`${keyword} 검색 결과 - ILAND`} />
        <meta
          property="og:description"
          content="ILAND에서 내 취향을 모아보세요."
        />
      </Helmet>

      <div className="container">
        <header>
          <h2 className="page-title">검색 결과</h2>
        </header>
        <div className="flex items-center justify-between mb-[50px]">
          <span>총 {results?.length || 0}개의 결과가 있습니다.</span>
          <select
            name="sort"
            className="w-[125px] h-[40px] border border-gray2 rounded-lg px-3 text-[14px] focus:outline-none"
            id="sortOrder"
          >
            <option value="bookmarks">인기순</option>
            <option value="createdAt">최신순</option>
          </select>
        </div>

        {results.length === 0 ? (
          <SearchNoResult />
        ) : (
          <ul className="grid grid-cols-5 gap-x-[25px] gap-y-[40px]">
            {results.map(result => (
              <ProductCard key={result._id} item={result} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
