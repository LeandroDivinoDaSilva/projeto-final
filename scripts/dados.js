const SUPABASE_URL = 'https://podzbxkfptincraiajpa.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvZHpieGtmcHRpbmNyYWlhanBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxMzQ4OTgsImV4cCI6MjA0MzcxMDg5OH0.udLFkS7lJ7ZxTsfx6pZI2HMqTJ24lLgjM0UXJ3zgs_Y';
// Crie a instância do cliente Supabase
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('promo-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const ddd = document.getElementById('ddd').value;
    const celular = document.getElementById('celular').value;
    const email = document.getElementById('email').value;
    const curso = document.getElementById('curso').value;
    const unidade = document.getElementById('unidade').value;

    if (editingProductId) {
        await updateData(editingProductId, nome, ddd, celular, email, curso, unidade);
    } else {
        // Use userId as needed, e.g., from a global variable or session
       console.log("erro")// 
        await createData(nome, ddd, celular, email, curso, unidade);
    }

    await getData();
    resetForm();
});

async function createData(nome, ddd, celular, email, curso, unidade) {
    try {
        const { data, error } = await _supabase
            .from('inscricoes')
            .insert([{ nome, ddd, celular, email, curso, unidade }]);

        if (error) throw error;
        console.log("Dados criados:", data);
    } catch (error) {
        console.error("Erro ao criar dados:", error);
    }
}



