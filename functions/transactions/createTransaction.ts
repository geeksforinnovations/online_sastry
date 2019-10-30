import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda';
import 'source-map-support/register';
import * as Stripe from "stripe";
import { success, failure, calculateCost } from "../../utils/helper";

export const createTransaction: any = async (event: APIGatewayEvent, _context: APIGatewayEventRequestContext) => {
    console.log('started transaction')
    const { storage, source } = JSON.parse(event.body);
    const amount = calculateCost(storage);
    const description = "Scratch charge";
  
    // Load our secret key from the  environment variables
    const stripe = new Stripe(process.env.stripeSecretKey);
  
    try {
      await stripe.charges.create({
        source,
        amount,
        description,
        currency: "usd"
      });
      return success({ status: true });
    } catch (e) {
      return failure({ message: e.message });
    }
}


