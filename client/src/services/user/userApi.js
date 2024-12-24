

const { cisecoApi } = require("../ciseco");

const userApi = cisecoApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all users
    getUsers: builder.query({
      query: () => ({
        url: "/user/list-users",
        method: "GET",
      }),

      providesTags: ["User"],
    }),

    // update user
    updateUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `/user/update-user/${id}`,
        method: "PATCH",
        body,
      }),

      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation } = userApi;
