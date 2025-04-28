
"use client";
import { useStripe } from "@/app/hooks/use-tripe";
import useMercadoPago from "@/app/hooks/useMercadoPago";

export default function Pagamentos() {
  const {
    createSubscriptionStripeCheckout,
    createPaymentStripeCheckout,
    handleCreateStripePortal,
  } = useStripe();

  const { createMercadoPagoChekout } = useMercadoPago();

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
              testeId: "price_12345",
            })
          }
        >
          Criar Pagamento Stripe
        </button>

        <button
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
          onClick={() =>
            createSubscriptionStripeCheckout({
              testeId: "price_12345",
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

         <button
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
          onClick={() => createMercadoPagoChekout({
            testeId: "price_12345",
            userEmail: "aaaaaaaa@teste.com"
          })
        }
        >
          Criar Pagamento Mercado Pago
        </button>
      </div>
    </div>
  );
}
