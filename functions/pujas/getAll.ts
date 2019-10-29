import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda';
import 'source-map-support/register';

export const getAll: any = async (event: APIGatewayEvent, _context: APIGatewayEventRequestContext) => {
  return {
    body: JSON.stringify({
      message: 'get All',
      input: event,
    }),
  };
}
