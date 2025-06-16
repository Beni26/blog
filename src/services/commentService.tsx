import { optionsType, rawFormData } from "app/blogs/types";
import http from "./httpService";

export async function createCommentApi(data:rawFormData, options:optionsType) {
  return http.post("/comment/add", data, options).then(({ data }) => data.data);
}
