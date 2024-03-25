"use client"
import React, { useEffect, useState } from "react";
import ProductListingUI from "./ProductListingUI";
import { ProductService } from "@/services/api/product.service";
import { toast } from "react-toastify";
import CustomPagination from "../common/Pagination/Pagination";

export default function ProductListingLogic() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = async (page) => {
    setIsLoading(true);
    try {
      const response = await ProductService.getAllProduct({
        limit: 30,
        skip: (page - 1) * 30,
      });
      if (response) {
        setProducts(response?.posts);
        setTotalPages(Math.ceil(response.total / 30));
      } else {
        toast.error("Error occurred while fetching product list");
      }
    } catch (error) {
      toast.error("Error occurred while fetching product list");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (e, page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ProductListingUI products={products} />
          <CustomPagination count={totalPages} page={currentPage} onChange={handlePageChange} />
        </>
      )}
    </>
  );
}
