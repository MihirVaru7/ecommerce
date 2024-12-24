
const { cisecoApi } = require("../ciseco");

const categoryApi = cisecoApi.injectEndpoints({
  endpoints: (builder) => ({
    // add new category
    addCategory: builder.mutation({
      query: (category) => ({
        url: "/category/add-category",
        method: "POST",
        body: category,
      }),
    }),

    // get all categories
    getCategories: builder.query({
      query: () => ({
        url: "/category/list-categories",
        method: "GET",
      }),

      providesTags: ["Category"],
    }),

    // update category
    updateCategory: builder.mutation({
      query: ({ id, body }) => ({
        url: `/category/update-category/${id}`,
        method: "PATCH",
        body,
      }),

      invalidatesTags: ["Category"],
    }),

    // get a category
    getCategory: builder.query({
      query: (id) => ({
        url: `/category/get-category/${id}`,
        method: "GET",
      }),

      providesTags: ["Category"],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useGetCategoriesQuery,
  useUpdateCategoryMutation,
  useGetCategoryQuery,
} = categoryApi;
