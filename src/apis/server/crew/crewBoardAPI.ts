import api from '@/apis';
import { ApiResponse } from '@/apis/server/type';
import { GetAllBoardAPIResponseBody } from '@/types/crew/crewBoardType';

const GetAllBoardAPI = async (crewId: string, category?: string) => {
  const { data } = await api.get<ApiResponse<GetAllBoardAPIResponseBody[]>>(
    `/crews/${crewId}/boards`,
    { params: { category } },
  );

  return data;
};

const GetBoardDetailAPI = async (crewId: string, boardId: string) => {
  const { data } = await api.get<ApiResponse<GetAllBoardAPIResponseBody>>(
    `/crews/${crewId}/boards/details/${boardId}`,
  );

  return data;
};

const PostCreateBoardAPI = async (crewId: string, body: FormData) => {
  const { data } = await api.post<ApiResponse<{ boardId: string }>>(
    `/crews/${crewId}/boards`,
    body,
  );

  return data;
};

const PutUpdateBoardAPI = async (
  crewId: string,
  boardId: string,
  body: {
    title: string;
    content: string;
    category: string;
  },
) => {
  const { data } = await api.put<ApiResponse<{ boardId: number }>>(
    `/crews/${crewId}/boards/${boardId}`,
    body,
  );

  return data;
};

const DeleteBoardAPI = async (crewId: string, boardId: string) => {
  const { data } = await api.delete<ApiResponse<{ boardId: number }>>(
    `/crews/${crewId}/boards/${boardId}`,
  );

  return data;
};

export {
  GetAllBoardAPI,
  GetBoardDetailAPI,
  PostCreateBoardAPI,
  PutUpdateBoardAPI,
  DeleteBoardAPI,
};