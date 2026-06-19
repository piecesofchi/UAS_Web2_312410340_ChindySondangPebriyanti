export default {
    template: `
        <div class="min-h-screen bg-[#fcf8f2] bg-[radial-gradient(#f87171_1px,transparent_1px)] [background-size:24px_24px] p-6 md:p-12 space-y-12 text-stone-800">
            
            <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-xl border-4 border-red-950 shadow-[4px_4px_0px_0px_rgba(153,27,27,1)] flex items-center space-x-6">
                    <div class="bg-amber-100 text-amber-800 border-2 border-red-950 p-4 rounded-lg text-3xl shadow-inner">📚</div>
                    <div>
                        <p class="text-xs font-black uppercase tracking-widest text-red-700">Total Judul</p>
                        <h3 class="text-2xl font-black mt-1 text-stone-900">{{ totalJudul }} Koleksi</h3>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-xl border-4 border-red-950 shadow-[4px_4px_0px_0px_rgba(153,27,27,1)] flex items-center space-x-6">
                    <div class="bg-amber-100 text-amber-800 border-2 border-red-950 p-4 rounded-lg text-3xl shadow-inner">📦</div>
                    <div>
                        <p class="text-xs font-black uppercase tracking-widest text-red-700">Total Stok</p>
                        <h3 class="text-2xl font-black mt-1 text-stone-900">{{ totalStok }} Pcs</h3>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-xl border-4 border-red-950 shadow-[4px_4px_0px_0px_rgba(153,27,27,1)] flex items-center space-x-6">
                    <div class="bg-red-50 text-red-700 border-2 border-red-950 p-4 rounded-lg text-3xl shadow-inner">⚠️</div>
                    <div>
                        <p class="text-xs font-black uppercase tracking-widest text-red-700">Stok Kosong</p>
                        <h3 class="text-2xl font-black mt-1 text-stone-900">{{ totalKosong }} Judul</h3>
                    </div>
                </div>
            </div>

            <div class="max-w-6xl mx-auto bg-white p-8 md:p-10 rounded-xl border-4 border-red-950 shadow-[6px_6px_0px_0px_rgba(153,27,27,1)]">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    <div>
                        <h2 class="text-3xl font-black text-red-950 tracking-tight italic font-serif">Manajemen Koleksi Chibrary</h2>
                        <p class="text-stone-500 font-bold mt-1 uppercase tracking-widest text-xs">Sirkulasi data koleksi komik & buku digital di sini.</p>
                    </div>
                    <button @click="openModal('add')" class="bg-amber-400 hover:bg-amber-500 text-stone-900 border-2 border-red-950 px-6 py-3.5 rounded-lg text-sm font-black shadow-[3px_3px_0px_0px_rgba(153,27,27,1)] active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_rgba(153,27,27,1)] transition-all">
                        ➕ Tambah Buku Baru
                    </button>
                </div>

                <div class="overflow-hidden rounded-lg border-2 border-red-950">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="bg-red-700 border-b-2 border-red-950 text-amber-50 text-[11px] font-black uppercase tracking-widest">
                                <th class="p-5">Judul</th>
                                <th class="p-5">Penulis</th>
                                <th class="p-5">Genre ID</th>
                                <th class="p-5">Stok</th>
                                <th class="p-5 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-stone-200">
                            <tr v-for="buku in listBuku" :key="buku.id" class="hover:bg-stone-50">
                                <td class="p-5 font-black text-stone-900">{{ buku.judul }}</td>
                                <td class="p-5 font-medium text-stone-700">{{ buku.penulis }}</td>
                                <td class="p-5 text-stone-600 font-mono">{{ buku.kategori_id }}</td>
                                <td class="p-5">
                                    <span :class="buku.stok === 0 ? 'text-red-700 font-black bg-red-100 border border-red-300 px-3 py-1 rounded' : 'text-stone-800 font-bold'">
                                        {{ buku.stok }}
                                    </span>
                                </td>
                                <td class="p-5 text-center space-x-4 text-xs font-black">
                                    <button @click="openModal('edit', buku)" class="text-amber-600 hover:text-amber-700 hover:underline">EDIT</button>
                                    <button @click="deleteBuku(buku.id)" class="text-red-600 hover:text-red-700 hover:underline">HAPUS</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="max-w-6xl mx-auto bg-white p-8 md:p-10 rounded-xl border-4 border-red-950 shadow-[6px_6px_0px_0px_rgba(153,27,27,1)]">
                <div class="mb-6">
                    <h2 class="text-2xl font-black text-red-950 tracking-tight italic font-serif uppercase">Riwayat Peminjaman</h2>
                </div>
                <div class="overflow-hidden rounded-lg border-2 border-red-950">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="bg-red-700 border-b-2 border-red-950 text-amber-50 text-[11px] font-black uppercase tracking-widest">
                                <th class="p-5">Peminjam</th>
                                <th class="p-5">Judul Komik & Buku</th>
                                <th class="p-5">Tanggal</th>
                                <th class="p-5">Status</th>
                                <th class="p-5 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-stone-200">
                            <tr v-for="log in listPeminjaman" :key="log.id" class="hover:bg-stone-50">
                                <td class="p-5 font-bold text-stone-900">{{ log.nama_peminjam }}</td>
                                <td class="p-5 font-black text-red-700">{{ log.judul }}</td>
                                <td class="p-5 text-stone-500 font-mono text-sm">{{ log.tanggal_pinjam }}</td>
                                <td class="p-5">
                                    <span :class="log.status === 'Dipinjam' ? 'bg-red-700 text-amber-50 border border-red-900' : 'bg-stone-100 text-stone-500 border border-stone-300'" 
                                          class="px-3 py-1 rounded text-[11px] font-black uppercase tracking-wider">
                                        {{ log.status }}
                                    </span>
                                </td>
                                <td class="p-5 text-center">
                                    <button v-if="log.status === 'Dipinjam'" @click="kembalikanBuku(log.id)" class="text-blue-600 hover:text-blue-800 text-xs font-black hover:underline">
                                        Kembalikan
                                    </button>
                                    <span v-else class="text-stone-400 text-sm font-bold">-</span>
                                </td>
                            </tr>
                            <tr v-if="listPeminjaman.length === 0">
                                <td colspan="5" class="p-6 text-center text-stone-400 font-bold bg-stone-50">Belum ada riwayat peminjaman.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div v-if="showModal" class="fixed inset-0 bg-red-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                <div class="bg-white w-full max-w-md p-8 md:p-10 rounded-xl border-4 border-red-950 shadow-[8px_8px_0px_0px_rgba(153,27,27,1)] animate-in zoom-in-95 duration-200">
                    <h3 class="text-2xl font-black text-red-950 mb-6 italic font-serif">{{ modalMode === 'add' ? 'Tambah' : 'Edit' }} Buku</h3>
                    <form @submit.prevent="saveBuku" class="space-y-4">
                        <input v-model="form.judul" placeholder="Judul" class="w-full px-4 py-3.5 bg-stone-50 border-2 border-red-950 rounded-lg outline-none font-bold text-stone-800 focus:bg-amber-50" required>
                        <input v-model="form.penulis" placeholder="Penulis" class="w-full px-4 py-3.5 bg-stone-50 border-2 border-red-950 rounded-lg outline-none font-bold text-stone-800 focus:bg-amber-50" required>
                        <input v-model.number="form.kategori_id" type="number" placeholder="Genre ID" class="w-full px-4 py-3.5 bg-stone-50 border-2 border-red-950 rounded-lg outline-none font-mono font-bold text-stone-800 focus:bg-amber-50" required>
                        <input v-model.number="form.stok" type="number" placeholder="Stok" class="w-full px-4 py-3.5 bg-stone-50 border-2 border-red-950 rounded-lg outline-none font-bold text-stone-800 focus:bg-amber-50" required>
                        
                        <div class="flex justify-end gap-3 pt-4">
                            <button @click="showModal = false" type="button" class="px-5 py-3.5 font-black text-stone-500 hover:text-stone-700 text-sm tracking-wide">BATAL</button>
                            <button type="submit" class="px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-stone-900 border-2 border-red-950 rounded-lg font-black text-sm shadow-[2px_2px_0px_0px_rgba(153,27,27,1)] active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_rgba(153,27,27,1)]">
                                SIMPAN
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `,
    data() {
        return { 
            listBuku: [], 
            listPeminjaman: [], 
            showModal: false, 
            modalMode: 'add', 
            form: { id: null, judul: '', penulis: '', kategori_id: '', stok: 0 } 
        }
    },
    computed: {
        totalJudul() {
            return this.listBuku.length;
        },
        totalStok() {
            return this.listBuku.reduce((accum, item) => accum + (parseInt(item.stok) || 0), 0);
        },
        totalKosong() {
            return this.listBuku.filter(item => parseInt(item.stok) === 0).length;
        }
    },
    mounted() { 
        this.fetchBuku(); 
        this.fetchRiwayatPeminjaman(); 
    },
    methods: {
        async fetchBuku() {
            try {
                const res = await axios.get('http://localhost:8080/api/buku', {
                    headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
                });
                this.listBuku = res.data;
            } catch (err) { console.error(err); }
        },
        async fetchRiwayatPeminjaman() {
            try {
                const res = await axios.get('http://localhost:8080/api/peminjaman', {
                    headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
                });
                this.listPeminjaman = res.data;
            } catch (err) { console.error("Gagal mengambil log peminjaman:", err); }
        },
        openModal(mode, data = null) {
            this.modalMode = mode;
            this.form = data ? { ...data } : { judul: '', penulis: '', kategori_id: '', stok: 0 };
            this.showModal = true;
        },
        async saveBuku() {
            try {
                const isEdit = this.modalMode === 'edit';
                const url = isEdit ? 'http://localhost:8080/api/buku/update/' + this.form.id : 'http://localhost:8080/api/buku';
                const method = 'post'; 
                
                await axios[method](url, this.form, {
                    headers: { 
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                        'Content-Type': 'application/json' 
                    }
                });
                
                this.showModal = false;
                this.fetchBuku();
            } catch (err) {
                console.error("Error Detail:", err.response?.data);
                alert('Gagal: ' + (err.response?.data?.messages?.error || 'Periksa koneksi/token'));
            }
        },
        async deleteBuku(id) {
            if (confirm('Yakin ingin menghapus?')) {
                try {
                    await axios.delete('http://localhost:8080/api/buku/' + id, {
                        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
                    });
                    this.fetchBuku();
                } catch (err) { alert('Gagal menghapus'); }
            }
        },
        async kembalikanBuku(id) {
            try {
                await axios.put('http://localhost:8080/api/peminjaman/' + id, { status: 'Dikembalikan' }, {
                    headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
                });
                this.fetchRiwayatPeminjaman();
                this.fetchBuku(); 
            } catch (err) { 
                alert('Gagal mengupdate status!'); 
                console.error(err);
            }
        }
    }
}