/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51GsrIQHQ3tPdkdvk7w1IHppLaDvZhPt7eTa4D0GDNjcTnCSVCSds9j3U2Tva3531w1wCdX42AcbfsXXI9lHmRNwx00UmVmvtrr'
  );
  try {
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
