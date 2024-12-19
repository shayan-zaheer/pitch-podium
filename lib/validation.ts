import { z } from "zod";

export const formSchema = z.object({
    title: z.string()
        .min(3, "Title must be at least 3 characters")
        .max(100, "Title cannot exceed 100 characters"),
    description: z.string()
        .min(20, "Description must be at least 20 characters")
        .max(500, "Description cannot exceed 500 characters"),
    category: z.string()
        .min(3, "Category must be at least 3 characters")
        .max(20, "Category cannot exceed 20 characters"),
    link: z.string()
        .url("Invalid URL format")
        .refine(async (url) => {
            try {
                const res = await fetch(url, { method: "HEAD" });
                const contentType = res.headers.get("content-type");
                console.log("CONTENT TYPE:", contentType);
                return contentType?.startsWith("image/") || false;
            } catch (err) {
                console.error(err);
                return false;
            }
        }, "URL must point to an image"),
    pitch: z.string()
        .min(10, "Pitch must be at least 10 characters")
});
