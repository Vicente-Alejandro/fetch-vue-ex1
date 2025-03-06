<template>
    <div v-if="loading" class="r">Cargando...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else class="g">
        <ul class="post-grid">
            <li v-for="post in visiblePosts" :key="post.id">
                <div class="base-vue-card">
                    <h3>{{ post.title }}</h3>
                    <p>{{ post.body }}</p>
                </div>
            </li>
        </ul>
    </div>
    
    <!-- Botones -->
    <div class="buttons">
        <button @click="loadMore" :disabled="visibleCount >= posts.length">Ver más</button>
        <button @click="loadAll"  :disabled="visibleCount >= posts.length">Ver todo</button>
        <button @click="resetPosts">Ver menos</button>
        <p><span class="r">Actualmente: {{ visibleCount }}</span></p>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import usePosts from '@/composables/usePost';
import useCharge from '@/composables/useCharge';

const { posts, loading, error } = usePosts();
const { visiblePosts, visibleCount, loadMore, loadAll, resetPosts } = useCharge(10, posts);

</script>

<style scoped>

    h1, li, label {color: red}
    .w {color: white;}
    .r {color: red;}
    .g {
        color: green;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 55%;
        margin-left: auto; margin-right: auto;
    }
    .b {color: blue;}
    .g {color: gold}
    .base-vue-card {
        background-color:  var(--primary-color);
        color: #333;
        padding: 20px;
        border-radius: 5px;
        margin: 10px 0;
        font-family: 'Courier New', Courier, monospace;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        min-height: 10rem;
    }
    .base-vue-card:hover {
        background-color: #333;
        color: #f1f1f1;
    }
    .base-vue-card h3 {
        margin: 0;
    }
    .base-vue-card:hover h3 {
        color: inherit;
    }
    .buttons {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    }
    button {
        padding: 10px;
        cursor: pointer;
    }
    button:disabled {
        background-color: gray;
        cursor: not-allowed;
    }
    .post-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Dos columnas */
        gap: 20px; /* Espacio entre las tarjetas */
        list-style: none; /* Elimina los puntos de la lista */
        padding: 0; /* Elimina el padding predeterminado de la lista */
    }

</style>