import {ref, computed} from 'vue';

export default function useCharge(count: number, posts: any) {

    const visibleCount = ref(count);

    const visiblePosts = computed(() => posts.value.slice(0, visibleCount.value));

    function loadMore() {
        visibleCount.value += 5;
    }

    function loadAll() {
        visibleCount.value = posts.value.length;
    }

    function resetPosts() {
        visibleCount.value = 10;
    }

    return {visibleCount ,visiblePosts, loadMore, loadAll, resetPosts};
}

