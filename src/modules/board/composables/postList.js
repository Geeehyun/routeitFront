import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/modules/auth/stores/authStore.js";
import { showAlert } from "@/composables/alert.js";

const postList = () => {
    const router = useRouter();

    const onWriteClick = async () => {
        await router.push('/board/write');
    }

    return {
        onWriteClick
    }
};

export { postList }