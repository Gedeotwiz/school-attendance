/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tokenStorage } from '../utils/tokenUtils';
import type {
  StudentResponse,
  ApiResponse,
  AddStudentDto,
  Student,
} from '../types';

export const APIsRequest = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/v1/',

    prepareHeaders: (headers) => {
      const token = tokenStorage.getToken();

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ['STUDENTS', 'ATTENDANCE'],

  endpoints: (builder) => ({
    allStudents: builder.query<StudentResponse, void>({
      query: () => 'student',
      providesTags: [{ type: 'STUDENTS', id: 'LIST' }],
    }),

    addStudent: builder.mutation<ApiResponse<Student>, AddStudentDto>({
      query: (dto) => ({
        url: 'student',
        method: 'POST',
        body: dto,
      }),
      invalidatesTags: [{ type: 'STUDENTS', id: 'LIST' }],
    }),
  }),
});

export const { useAllStudentsQuery,useAddStudentMutation } = APIsRequest;
