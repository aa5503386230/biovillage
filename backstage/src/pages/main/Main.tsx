import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import { LoginStore } from '../login/Login';

export default defineComponent({
    name: 'Main',
    render() {
        return <div>
            <header>header</header>
            <main>
                <aside>侧边</aside>
                <div>
                    <RouterView />
                </div>
            </main>
        </div>;
    },
    mounted() {
        LoginStore.aa = 123;
    },
});