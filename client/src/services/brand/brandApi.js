

const { cisecoApi } = require("../ciseco");

const brandApi = cisecoApi.injectEndpoints({
  endpoints: (builder) => ({
    // add new brand
    addBrand: builder.mutation({
      query: (brand) => ({
        url: "/brand/add-brand",
        method: "POST",
        body: brand,
      }),
    }),

    // get all brands
    getBrands: builder.query({
      query: () => ({
        url: "/brand/list-brands",
        method: "GET",
      }),

      providesTags: ["Brand"],
    }),

    // update brand
    updateBrand: builder.mutation({
      query: ({ id, body }) => ({
        url: `/brand/update-brand/${id}`,
        method: "PATCH",
        body,
      }),

      invalidatesTags: ["Brand"],
    }),

    // get a brand
    getBrand: builder.query({
      query: (id) => ({
        url: `/brand/get-brand/${id}`,
        method: "GET",
      }),

      providesTags: ["Brand"],
    }),
  }),
});

export const {
  useAddBrandMutation,
  useGetBrandsQuery,
  useUpdateBrandMutation,
  useGetBrandQuery,
} = brandApi;
