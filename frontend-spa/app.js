import Login from './komponen/Login.js';
import Dashboard from './komponen/Dashboard.js';

const Home = {
    template: `
        <div class="min-h-screen bg-[#fcf8f2] bg-[radial-gradient(#f87171_1px,transparent_1px)] [background-size:24px_24px] px-4 md:px-8 pb-16 pt-6">
            <div class="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                
                <div class="relative overflow-hidden bg-gradient-to-br from-red-600 to-red-800 p-8 md:p-10 rounded-2xl text-amber-50 shadow-md border-4 border-red-950 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div class="space-y-1 z-10">
                        <h2 class="text-4xl font-black tracking-tight italic font-serif flex items-center gap-2">
                            📖 Chibrary <span class="not-italic text-sm bg-amber-400 text-stone-900 px-2 py-0.5 rounded border border-red-950 font-sans tracking-widest font-black uppercase">v2.0</span>
                        </h2>
                        <p class="text-amber-100 text-sm font-medium max-w-xl">
                            Jelajahi koleksi komik & buku eksklusif pilihan. Pinjam secara instan dan pantau ketersediaan stok buku favoritmu.
                        </p>
                    </div>
                    
                    <button @click="focusSearch" class="relative group overflow-hidden bg-amber-400 text-stone-950 border-4 border-red-950 px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all shrink-0 animate-pulse hover:animate-none group-hover:scale-105">
                        <span class="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shine_0.5s_ease-in-out]"></span>
                        ⚡ RAID THE STACK ⚡
                    </button>
                </div>

                <div class="w-full">
                    <div class="relative bg-white rounded-xl border-4 border-red-950 shadow-[4px_4px_0px_0px_rgba(153,27,27,1)] focus-within:shadow-[6px_6px_0px_0px_rgba(153,27,27,1)] focus-within:-translate-y-0.5 transition-all duration-200">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-xl">
                            🔍
                        </div>
                        <input 
                            ref="searchInput"
                            v-model="searchQuery" 
                            type="text" 
                            placeholder="Ketik judul komik hebat atau penulis incaranmu di sini..." 
                            class="w-full pl-14 pr-12 py-4 bg-transparent text-stone-800 placeholder-stone-400 font-black rounded-xl outline-none text-base"
                        />
                        <button 
                            v-if="searchQuery" 
                            @click="searchQuery = ''" 
                            class="absolute inset-y-0 right-0 flex items-center pr-5 text-red-600 hover:text-red-800 transition-colors font-black text-lg"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                <div v-if="filteredBuku.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    <div v-for="buku in filteredBuku" :key="buku.id" 
                         class="group bg-white p-4 rounded-xl border-4 border-red-950 shadow-[3px_3px_0px_0px_rgba(153,27,27,1)] hover:shadow-[6px_6px_0px_0px_rgba(153,27,27,1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[260px]">
                        
                        <div>
                            <div class="w-10 h-10 bg-amber-100 text-amber-700 border-2 border-red-950 rounded-lg flex items-center justify-center text-xl mb-4 shadow-inner group-hover:animate-[wiggle_0.5s_ease-in-out_infinite]">
                                📖
                            </div>
                            <h3 class="font-black text-stone-900 text-base mb-1 leading-snug line-clamp-2 group-hover:text-red-700 transition-colors">{{ buku.judul }}</h3>
                            <p class="text-red-800 text-xs font-bold mb-4 italic truncate">by {{ buku.penulis }}</p>
                        </div>

                        <div class="space-y-3">
                            <div class="flex justify-between items-center text-[10px] font-black uppercase tracking-wider border-t border-stone-100 pt-3">
                                <span :class="parseInt(buku.stok) > 0 ? 'text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300' : 'text-stone-400 bg-stone-50 px-2 py-0.5 rounded border border-stone-200'">
                                    {{ parseInt(buku.stok) > 0 ? '● Ready' : '● Habis' }}
                                </span>
                                <span class="text-stone-500 font-mono">{{ buku.stok }} Unit</span>
                            </div>

                            <button @click="pinjamBuku(buku)" 
                                    :disabled="parseInt(buku.stok) <= 0"
                                    class="w-full py-2.5 rounded-lg font-black text-xs transition-all duration-200 border-2 border-red-950 shadow-[2px_2px_0px_0px_rgba(153,27,27,1)] active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_rgba(153,27,27,1)]"
                                    :class="parseInt(buku.stok) > 0 ? 'bg-amber-400 hover:bg-amber-500 text-stone-900' : 'bg-stone-100 text-stone-400 cursor-not-allowed'">
                                {{ parseInt(buku.stok) > 0 ? 'PINJAM SEKARANG' : 'KOSONG' }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else-if="listBuku.length > 0" class="text-center py-12 bg-white rounded-xl border-4 border-dashed border-red-950 max-w-sm mx-auto p-6 shadow-[4px_4px_0px_0px_rgba(153,27,27,1)] animate-in zoom-in-95">
                    <p class="text-3xl animate-bounce">🤔</p>
                    <h4 class="font-black text-stone-800 text-base mt-2">Buku Tidak Ditemukan</h4>
                    <p class="text-xs text-stone-500 mt-1">Tidak ada koleksi komik bernama "{{ searchQuery }}".</p>
                </div>
            </div>
        </div>
    `,
    data() { 
        return { 
            listBuku: [],
            searchQuery: '' 
        } 
    },
    computed: {
        filteredBuku() {
            const query = this.searchQuery.toLowerCase().trim();
            if (!query) return this.listBuku;
            return this.listBuku.filter(buku => {
                const judul = buku.judul ? buku.judul.toLowerCase() : '';
                const penulis = buku.penulis ? buku.penulis.toLowerCase() : '';
                return judul.includes(query) || penulis.includes(query);
            });
        }
    },
    methods: {
        async fetchKatalog() {
            try {
                const response = await axios.get('http://localhost:8080/api/buku');
                this.listBuku = response.data;
            } catch (error) { console.error(error); }
        },
        pinjamBuku(buku) {
            const nama = prompt("Masukkan nama lengkap Anda:");
            if (!nama || nama.trim() === "") return;
            axios.post('http://localhost:8080/api/peminjaman', { buku_id: buku.id, nama_peminjam: nama })
            .then(() => { alert("Sukses!"); buku.stok = parseInt(buku.stok) - 1; })
            .catch(() => alert("Gagal meminjam."));
        },
        focusSearch() {
            // Ketika tombol di banner diklik, otomatis langsung fokus ke input pencarian
            this.$refs.searchInput.focus();
        }
    },
    mounted() { this.fetchKatalog(); }
};

const router = VueRouter.createRouter({ history: VueRouter.createWebHashHistory(), routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } }
]});

const app = Vue.createApp({
    data() { return { isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' } },
    methods: {
        logout() {
            localStorage.clear();
            this.isLoggedIn = false;
            window.location.reload(); 
        }
    }
});

app.use(router);
app.mount('#app');