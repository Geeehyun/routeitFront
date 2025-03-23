import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/modules/auth/stores/authStore.js";
import { showAlert } from "@/composables/alert.js";

const userLoginForm = () => {
    const email = ref('');
    const password  = ref('');
    const auth = useAuthStore();
    const router = useRouter();

    const handleLogin = async () => {
        const success = await auth.signIn(email.value, password.value);

        if(success) {
            await router.push('/');
        } else {
            await showAlert().alert('로그인 실패');
        }
    };

    return {
        email,
        password,
        handleLogin
    }
};

export { userLoginForm }