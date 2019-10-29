import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda';
import 'source-map-support/register';

export const getById: any = async (event: APIGatewayEvent, _context: APIGatewayEventRequestContext) => {
  return {
    body: JSON.stringify({
      message: 'get by id',
      input: event,
    }),
  };
}
