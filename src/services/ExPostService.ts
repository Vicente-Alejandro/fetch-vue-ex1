import {ref, Ref} from 'vue';
import IPost from '@/intefaces/IPost';

class PostService {
    private posts: Ref<Array<IPost>> 
    private url = 'https://jsonplaceholder.typicode.com/posts' 
    
    constructor() {
        this . posts = ref<Array<IPost>>([])
    }

    public getPosts(): Ref<Array<IPost>> {
        return this.posts
    }

    public async fetchPosts(): Promise<void> {
        try {
            // await new Promise (resolve => setTimeout(resolve, 3000))
            const response = await fetch (this.url)
            const data = await response.json()
            this . posts . value =  await data
        } catch (error) {   
            console.log(error)
        }
    }

}

export default PostService

