import React from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

initMercadoPago('YOUR_PUBLIC_KEY');

function Pagamento() {
  const preferenceId = 'YOUR_PREFERENCE_ID';

  return (
    <div>
      <Wallet initialization={{ preferenceId }} />
    </div>
  );
}

export default Pagamento;
