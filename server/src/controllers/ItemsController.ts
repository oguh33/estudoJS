import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController{
    async index (request: Request, response: Response) {  
        //se usar o await dentro da funcao e obrigatorio o uso do async na declaracao da function
        const items = await knex('items').select('*');
        //a funcao .map() vai percorrer os itens do array
        const serializedItems = items.map(item => {
            return {
                id : item.id,
                title: item.title,
                image_url: `http://192.168.0.9:3333/uploads/${item.image}`,
                
            };
        });
        return  response.json(serializedItems);
    }
}

export default ItemsController;