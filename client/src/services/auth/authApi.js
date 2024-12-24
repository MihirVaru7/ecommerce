
const { cisecoApi } = require("../ciseco");

const authApi = cisecoApi.injectEndpoints({
  endpoints: (builder) => ({
    // signup
    signup: builder.mutation({
      query: (userInfo) => ({
        url: "/user/signup",
        method: "POST",
        body: userInfo,
      }),

      invalidatesTags: ["User"],
    }),

    // signin
    signin: builder.mutation({
      query: (userInfo) => ({
        url: "/user/signin",
        method: "POST",
        body: userInfo,
      }),
    }),

    // forgot password
    forgotPassword: builder.mutation({
      query: (userInfo) => ({
        url: "/user/forgot-password",
        method: "PATCH",
        body: userInfo,
      }),
    }),

    // persist login
    persistLogin: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      providesTags: ["User"],
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useForgotPasswordMutation,
  usePersistLoginQuery,
} = authApi;
