import { ref } from "@vue/reactivity";
import api from "../apis/api";



export function useArticle() {

    let articles = ref({
        data: [],

    });
    let loading = ref(false);


    function fetchArticles() 
    {
        loading.value = true;
        api.get('articles')
        .then((response) =>{
            articles.value = response.data;
        })
        .finally(()=>loading.value=false);
    }

    return {
        articles,
        loading,
        fetchArticles,
    };
}