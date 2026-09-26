import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { postsService } from "@/services/posts";

export function usePostsPagination({ page }: { page: number }) {
    return useQuery({
        queryKey: ["posts", "pagination", page],
        queryFn: () => postsService.getByPage(page),
        placeholderData: keepPreviousData,
        staleTime: 1000 * 60,
    });
}
