import { db } from "@/app/lib/firebase";
import stripe from "@/app/lib/stipre";
import "server-only";

export async function getCreateCustomerId(userId: string, userEmail: string) {
  try {
    const userRef = db.collection("users").doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      throw new Error("User not found");
    }

    const stipreCustomerId = userDoc.data()?.stripeCustomerId; 

    if (stipreCustomerId) {
      return stipreCustomerId;
    }

    const userName = userDoc.data()?.name 

    const stripeCustomer = await stripe.customers.create({
        email: userEmail,
        ...(userName && { name: userName }),
        metadata: {
          userId
        },
    });

    await userRef.update({
        stripeCustomerId: stripeCustomer.id,
    })

    return stripeCustomer.id;

  } catch (error) {
    console.error("Error creating Stripe Checkout session:", error);
    return null;
  }
}
