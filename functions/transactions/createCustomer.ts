import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda';
import 'source-map-support/register';
import * as Stripe from "stripe";
import { success, failure } from "../../utils/helper";

export const createCustomer: any = async (event: APIGatewayEvent, _context: APIGatewayEventRequestContext) => {
    console.log('started transaction', event)
    console.log('started transaction1', process.env.stripeSecretKey)
    // const x= event
    // const { storage, source } = JSON.parse(event.body);
    // const amount = calculateCost(storage);
    // const description = "Scratch charge";

    // Load our secret key from the  environment variables
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    try {
        const customer: Stripe.customers.ICustomer = await stripe.customers.create({
            email: 'mani@gmail.com',
            name: 'mani',
            address: {
                city: 'jhjuh',
                country: 'ind',
                line1: 'jhh',
                line2: 'jhujh',
                postal_code: '523333',
                state: 'la'
            }, account_balance: 1,
        });
        return success({ data: customer });
    } catch (e) {
        return failure({ message: e.message });
    }
}


