import { ref } from "@vue/reactivity";
import api from "../apis/api";



export function useArticle() {

    let articles = ref({
        data: [],
        links: {},
        meta: {},

    });
    let loading = ref(false);


    function fetchArticles(params = {})

    {
        let { page=1 , showMore=false} = params;
        loading.value = true;
        api.get('articles',{params:{page}})
        .then((response) =>{
            if (showMore) {
                articles.value = {
                    ...response.data,
                    data:[...articles.value.data,...response.data.data]
                }
            }else{
                articles.value = response.data;
            }
        })
        .finally(()=>loading.value=false);
    }

    return {
        articles,
        loading,
        fetchArticles,
    };
}