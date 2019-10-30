import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda';
import 'source-map-support/register';
const dbModels = require('../../models/index')

export const getAll: any = async (event: APIGatewayEvent, _context: APIGatewayEventRequestContext) => {
   const x =  await dbModels.Puja.findAll();
   console.log(event.body)
  return {
    body: x
  };
}
