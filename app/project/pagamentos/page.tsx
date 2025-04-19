
"use client";
import { useStripe } from "@/app/hooks/use-tripe";

export default function Pagamentos() {
  const {
    createSubscriptionStripeCheckout,
    createPaymentStripeCheckout,
    handleCreateStripePortal,
  } = useStripe();

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Pagamento
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Esta é a página de pagamento.
      </p>

      <div className="flex flex-col gap-4">
        <button
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
          onClick={() =>
            createPaymentStripeCheckout({
              priceId: "price_12345",
              customerEmail: "cliente@email.com",
            })
          }
        >
          Criar Pagamento Stripe
        </button>

        <button
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
          onClick={() =>
            createSubscriptionStripeCheckout({
              priceId: "price_12345",
              customerEmail: "cliente@email.com",
            })
          }
        >
          Criar Assinaturas Stripe
        </button>

        <button
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
          onClick={handleCreateStripePortal}
        >
          Criar Portal de Pagamentos
        </button>
      </div>
    </div>
  );
}
