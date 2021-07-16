import {SiteClient} from 'datocms-client'
export default async function recebedorDeRequest(request, response){
    if(request.method === 'POST'){
        const TOKEN = 'eeb73f3ace0745d50e0476471a8a02';
        const client = new SiteClient(TOKEN);
        
        const registro = await client.items.create({
            itemType: '972303',
            ...request.body
        })
        response.json({
            dados: 'Algum dado qualquer',
            novoRegistro: registro
        })
        return;
    }
}