import {signUpApi} from "@/modules/auth/api/authApi.js";
import {reactive} from "vue";
import {useRouter} from "vue-router";
import {showAlert} from "@/composables/alert.js";

const userSignupForm = () =>{
    const router = useRouter();

    const form = reactive({
        userId: '',            // 이메일
        password: '',          // 비밀번호
        name: '',              // 이름
        nickname: '',          // 닉네임    
        ageRange: '',          // 연령대    
        gender: '',            // 성별
        mobileNumber: ''       // 연락처
    })

    // 유효성 검증
    const validateForm = () => {
        // 이메일 기본 검증
        if (!form.userId || !/\S+@\S+\.\S+/.test(form.userId)) {
            alert("유효한 이메일을 입력해주세요.");
            return false;
        }

        // 비밀번호: 8자 이상, 영문 소문자 + 숫자 포함
        if (!form.password || !/^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(form.password)) {
            alert("비밀번호는 최소 8자 이상, 영문 소문자와 숫자를 포함해야 합니다.");
            return false;
        }

        // 이름, 닉네임 필수
        if (!form.name.trim()) {
            alert("이름을 입력해주세요.");
            return false;
        }

        if (!form.nickname.trim()) {
            alert("닉네임을 입력해주세요.");
            return false;
        }

        // 연령대, 성별, 연락처 선택/입력 필수
        if (!form.ageRange) {
            alert("연령대를 선택해주세요.");
            return false;
        }

        if (!form.gender) {
            alert("성별을 선택해주세요.");
            return false;
        }

        if (!form.mobileNumber || !/^01[016789]-\d{3,4}-\d{4}$/.test(form.mobileNumber)) {
            alert("유효한 휴대폰 번호를 입력해주세요. (예: 010-1234-5678)");
            return false;
        }

        return true; // 모든 검증 통과
    };

    const handleSignup = async () => {
        if(!validateForm()) return;

        const res = await signUpApi(form);
        if(res.data.code === 200) {
            await showAlert().alert('회원가입이 완료되었습니다.');
            await router.push('/')
        }
        else{
            await showAlert().alert('처리 중 오류가 발생했습니다.');
        }
    };

    return {form, handleSignup}

}

export {userSignupForm}