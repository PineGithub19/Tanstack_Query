import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type CreatePostInput, postsService } from "@/services/posts";

export function useCreatePost() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: CreatePostInput) => postsService.create(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            console.log(
                "Bài viết đã được tạo thành công và cache đã được làm mới.",
                data.id,
            );
        },
        onError: (error) => {
            console.error("Lỗi khi tạo bài viết:", (error as Error).message);
        },
        onSettled: () => {
            console.log("Mutation đã hoàn tất");
        },
    });
}
