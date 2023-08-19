# loanlimitstestAPI
API em Node para consumo de outra API fornecida pela Fannie Mae https://developer.fanniemae.com.

Para utilizar será necessário a cração de um arquivo .env e a inclusão do AUTH_ENCODED_CREDENTIALS e do TOKEN_URL.
O AUTH_ENCODED_CREDENTIALS é o base 64 que você pode gerar no site https://www.base64encode.org/ que foi recomendado pela site da Fannie Mae colocan apenas o texto sem o "<" do ClientID:ClientSecret
como exemplo: 9ec951313-3781-4a13-ad64-f139f00ab386:NbThRMfqBltS3Zg84fqFcwWON2O2_CR7J-MNla.mgs3K5zaU1MLjpuEGzzpWv-84

Para acessar a API utilize os endpoints abaixo:
http://localhost:3000/all - para acessar todos os empréstimos dispníveis.

http://localhost:3000/year/2021 - passei como exemplo o ano 2021, mas vc pode tentar outros. esse endpoint tras a mesma lista de cima, porém do ano especificado.

http://localhost:3000/state/CO/county/Archuleta%20County - neste exempo estou passando CO como o valor de state e Archuleta%20County como o valor de county, nesse caso trará apenas um dado de empréstimo.
