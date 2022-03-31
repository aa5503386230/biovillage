import { defineComponent, reactive } from 'vue';

export const LoginStore: {
    aa: number;
} = reactive({
    aa: 1,
});

export default defineComponent({
    name: 'Login',
    render() {
        return <div>登录页 {LoginStore.aa}</div>;
    },
});