import { useQuery } from "@tanstack/react-query";
import { PaginatedPosts, postsService } from "@/services/posts";

export function usePosts() {
    return useQuery<PaginatedPosts, Error>({
        queryKey: ["posts", "list"],
        queryFn: () => postsService.getAll(),
    });
}
