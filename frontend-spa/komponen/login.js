export default {
    template: `
        <div class="min-h-screen w-full flex items-center justify-center p-4 bg-[#fcf8f2] font-sans bg-[radial-gradient(#f87171_1px,transparent_1px)] [background-size:24px_24px]">
            
            <div class="fixed inset-0 overflow-hidden pointer-events-none">
                <div class="absolute -top-24 -right-24 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>
                <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-40"></div>
            </div>

            <div class="relative z-10 w-full max-w-sm bg-white p-10 rounded-xl border-4 border-red-950 shadow-[8px_8px_0px_0px_rgba(153,27,27,1)]">
                
                <div class="flex justify-center mb-6">
                    <div class="relative">
                        <div class="w-20 h-20 bg-amber-400 border-4 border-red-950 rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(153,27,27,1)]">
                            <span class="text-4xl">🖥️</span>
                        </div>
                    </div>
                </div>

                <div class="text-center mb-8">
                    <h2 class="text-3xl font-black text-red-950 tracking-tight italic font-serif">Chibrary</h2>
                    <p class="text-red-700 text-xs font-bold uppercase tracking-widest mt-2">Administrator Access</p>
                </div>

                <form @submit.prevent="submitLogin" class="space-y-5">
                    <div class="space-y-2">
                        <input v-model="username" type="text" 
                               class="w-full px-5 py-3.5 bg-stone-50 border-2 border-red-950 rounded-lg focus:outline-none focus:bg-amber-50 focus:shadow-[2px_2px_0px_0px_rgba(153,27,27,1)] transition-all text-stone-900 placeholder:text-stone-400 font-bold" 
                               placeholder="Username" required>
                    </div>
                    <div class="space-y-2">
                        <input v-model="password" type="password" 
                               class="w-full px-5 py-3.5 bg-stone-50 border-2 border-red-950 rounded-lg focus:outline-none focus:bg-amber-50 focus:shadow-[2px_2px_0px_0px_rgba(153,27,27,1)] transition-all text-stone-900 placeholder:text-stone-400 font-bold" 
                               placeholder="Password" required>
                    </div>
                    
                    <button type="submit" 
                            class="w-full py-4 mt-4 bg-amber-400 hover:bg-amber-500 border-2 border-red-950 rounded-lg text-stone-900 font-black text-sm shadow-[4px_4px_0px_0px_rgba(153,27,27,1)] transition-all active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_rgba(153,27,27,1)] uppercase tracking-wider">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    `,
    data() { return { username: '', password: '' } },
    methods: {
        async submitLogin() {
            try {
                const response = await axios.post('http://localhost:8080/api/auth/login', {
                    username: this.username,
                    password: this.password
                });
                if (response.data.token) {
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('token', response.data.token);
                    alert('Login Berhasil!');
                    this.$router.push('/dashboard');
                }
            } catch (error) {
                alert('Login Gagal, Coba Lagi.');
            }
        }
    }
}