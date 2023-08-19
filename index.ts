import express from 'express';
import axios from 'axios';
import { getAccessToken } from './src/api/auth';
import { LoanLimit } from './src/entity/LoanLimit';

const server = express();
const PORT = 3000;

server.get('/', (req, res) => {
    res.send('Bem vindo a Loan API.');
});

server.get('/all', async (req, res) => {
    
    try {
        const token = await getAccessToken();
        const apiResponse = await axios.get('https://api.fanniemae.com/v1/loan-limits/all', {
            headers: {
                'Content-Type': 'application/json',
                'x-public-access-token': token,
                'Authorization': `Bearer ${token}`  
            }
        });
        if (apiResponse.data && apiResponse.data.loanLimit) {
            const loanLimits: LoanLimit[] = apiResponse.data.loanLimit.map((item: any) => {
                return Object.assign(new LoanLimit(), item);
            });
            res.json(loanLimits);
        } else {
            console.error('Estrutura de dados inesperada:', apiResponse.data);
            res.status(500).send('Estrutura de dados inesperada.');
        }
    } catch (error) {
        console.error('Erro ao chamar a API:', error);
        res.status(500).send('Erro ao buscar os dados, tente novamente mais tarde.');
    }
});

server.get('/year/:year', async (req, res) => {

    let year = req.params.year;
    
    try {
        const token = await getAccessToken();
        const apiResponse = await axios.get(`https://api.fanniemae.com/v1/loan-limits/historical/${year}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-public-access-token': token,
                'Authorization': `Bearer ${token}`  
            }
        });
        if (apiResponse.data && apiResponse.data.loanLimit) {
            const loanLimits: LoanLimit[] = apiResponse.data.loanLimit.map((item: any) => {
                return Object.assign(new LoanLimit(), item);
            });
            res.json(loanLimits);
        } else {
            console.error('Estrutura de dados inesperada:', apiResponse.data);
            res.status(500).send('Estrutura de dados inesperada.');
        }
    } catch (error) {
        console.error('Erro ao chamar a API:', error);
        res.status(500).send('Erro ao buscar os dados, tente novamente mais tarde.');
    }
});

server.get('/year/:year', async (req, res) => {

    let year = req.params.year;
    
    try {
        const token = await getAccessToken();
        const apiResponse = await axios.get(`https://api.fanniemae.com/v1/loan-limits/historical/${year}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-public-access-token': token,
                'Authorization': `Bearer ${token}`  
            }
        });
        if (apiResponse.data && apiResponse.data.loanLimit) {
            const loanLimits: LoanLimit[] = apiResponse.data.loanLimit.map((item: any) => {
                return Object.assign(new LoanLimit(), item);
            });
            res.json(loanLimits);
        } else {
            console.error('Estrutura de dados inesperada:', apiResponse.data);
            res.status(500).send('Estrutura de dados inesperada.');
        }
    } catch (error) {
        console.error('Erro ao chamar a API:', error);
        res.status(500).send('Erro ao buscar os dados, tente novamente mais tarde.');
    }
});

server.get('/state/:state/county/:county', async (req, res) => {

    let state = req.params.state;
    let county = req.params.county;
    
    try {
        const token = await getAccessToken();
        const apiResponse = await axios.get(`https://api.fanniemae.com/v1/loan-limits/state/${state}/county/${county}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-public-access-token': token,
                'Authorization': `Bearer ${token}`  
            }
        });
        res.json(apiResponse.data)
    } catch (error) {
        console.error('Erro ao chamar a API:', error);
        res.status(500).send('Erro ao buscar os dados, tente novamente mais tarde.');
    }
});

server.listen(PORT, () => {
    console.log(`Loan API, está rodando em: http://localhost:${PORT}`);
});