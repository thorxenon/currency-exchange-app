let baseUrl = 'https://economia.awesomeapi.com.br/json';

export const getUsd = async() =>{
    try{
        let url = baseUrl + '/last/USD-BRL';

        const response = await fetch(url, {
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await response.json();

        if(data.USDBRL){
            return parseFloat(data.USDBRL.ask);
        }

        return 0;
    }catch(err){
        return 0;
   }
}

export const getEur = async() =>{
    try{
        let url = baseUrl + '/last/eur-brl';

        const response = await fetch(url, {
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await response.json();
        if(data.EURBRL){
            return parseFloat(data.EURBRL.ask);
        }

    return 0;
    }catch(err){
        return 0;
   }
}