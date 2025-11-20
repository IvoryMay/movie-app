export const TMDB_BASE = "https://api.themoviedb.org/3";

export const tmdbUrl = (path: string, params: Record<string, any> = {}) => {
  const url = new URL(`${TMDB_BASE}${path}`);
  url.searchParams.set("api_key", import.meta.env.VITE_TMDB_API_KEY);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, String(value));
  });

  return url.toString();
};
