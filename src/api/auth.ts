import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const TOKEN_URL = process.env.TOKEN_URL;
const AUTH_HEADER = `Basic ${process.env.AUTH_ENCODED_CREDENTIALS}`;

export async function getAccessToken(): Promise<string | null> {
    try {
        const response = await axios.post(TOKEN_URL!, 'grant_type=client_credentials', {
            headers: {
                'Authorization': AUTH_HEADER,
                'Content-type': 'application/x-www-form-urlencoded'
            }
        });

        return response.data.access_token;  
    } catch (error) {
        console.error('Erro ao obter o token de acesso:', error);
        return null;
    }
}