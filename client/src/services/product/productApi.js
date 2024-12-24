
const { cisecoApi } = require("../ciseco");

const productApi = cisecoApi.injectEndpoints({
  endpoints: (builder) => ({
    // add new product
    addProduct: builder.mutation({
      query: (product) => ({
        url: "/product/add-product",
        method: "POST",
        body: product,
      }),
    }),

    // get all products
    getProducts: builder.query({
      query: () => ({
        url: "/product/list-products",
        method: "GET",
      }),

      providesTags: ["Product"],
    }),

    // update product
    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `/product/update-product/${id}`,
        method: "PATCH",
        body,
      }),

      invalidatesTags: ["Product"],
    }),

    // get a single product
    getProduct: builder.query({
      query: (id) => ({
        url: `/product/get-product/${id}`,
        method: "GET",
      }),

      providesTags: ["Product"],
    }),

    // filtered products
    getFilteredProducts: builder.mutation({
      query: (body) => ({
        url: "/product/filtered-products",
        method: "POST",
        body,
      }),

      providesTags: ["Product"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
  useGetProductQuery,
  useGetFilteredProductsMutation,
} = productApi;
