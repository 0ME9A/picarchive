import { createApi } from "unsplash-js";

const key = process.env.NEXT_PUBLIC_ACCESS_KEY;
const api = createApi({ accessKey: `${key}` });

export default api;
