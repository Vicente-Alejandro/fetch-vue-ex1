// src/composables/usePosts.ts
import { ref, onBeforeMount, onMounted } from 'vue';
import PostService from '@/services/ExPostService';

export default function usePosts() {
    const service = new PostService();
    const loading = ref(true);
    const error = ref();

    onBeforeMount(async () => {
        try {
            await service.fetchPosts();
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    });

    const posts = service.getPosts()

    return { posts, loading, error };
}