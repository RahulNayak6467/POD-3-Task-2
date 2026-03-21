import { useQuery } from "@tanstack/react-query";

function useFetcher<T>(url: string) {
  const getData = async () => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request Failed: ${response.status}`);
    }

    const data = (await response.json()) as T;

    return data;
  };
  const { data, isLoading, isError, error } = useQuery<T>({
    queryKey: [url],
    queryFn: () => getData(),
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
  });
  return { data, isLoading, isError, error };
}

export default useFetcher;
