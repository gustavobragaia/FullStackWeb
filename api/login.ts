// src/api/login.ts
import axios from 'axios';

// Interface para o corpo da requisição
interface LoginRequest {
  email: string;
  password: string;
}

// Interface para a resposta do login
interface LoginResponse {
  token: string;
}

export async function loginUser(data: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await axios.post<LoginResponse>(
        'https://localhost:8080/login',
        data, // corpo da requisição
      );
      return response.data;
    } catch (error: any) {  
      throw new Error(error.response?.data?.error || 'Erro no login');
    }
  }
  
