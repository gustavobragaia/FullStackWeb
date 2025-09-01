import { useState, type FC } from 'react';
import { loginUser } from '../../../api/login';

export const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Função de login
  async function handleUserLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await loginUser({ email, password });
      console.log('Login bem-sucedido:', data);
      alert(`Login bem-sucedido! Token: ${data.token}`);
    } catch (e: any) {
      console.error('Erro no login:', e);
      alert(e.message || 'Erro no login!');
    } finally {
      // Mantém o loading por pelo menos 2 segundos
      setTimeout(() => setLoading(false), 2000);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-6 w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl text-blue-600 font-bold">Login</h1>

        <form onSubmit={handleUserLogin} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Digite o login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Digite a senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-3 w-full p-3 bg-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <span>Carregando</span>
                <span className="w-5 h-5 border-2 border-t-white border-slate-200 rounded-full animate-spin"></span>
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
