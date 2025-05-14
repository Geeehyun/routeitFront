import {useRouter} from "vue-router";
import {reactive, ref} from "vue";
import {postWriteApi} from "@/modules/board/api/boardApi.js";



const postForm = () => {
    const router = useRouter();

    const form = reactive({
        title: '',
        content: ''
    })

    const onBackClick = () => {
        router.back();
    }
    const handleSubmit = async () => {

        const data = {
            title: form.title, content: form.content
        };

        await postWriteApi(data);
    }

    return {
        onBackClick, handleSubmit, form
    }
}

export { postForm }

