# Satish Enterprises Unified App

This package combines the customer storefront, account, cart, checkout, orders and admin overview into one frontend (`app.html`) and uses the production backend in `src/`.

## Start

1. Copy `.env.example` to `.env`.
2. Add Razorpay TEST credentials.
3. `npm install`
4. `npm start`
5. Serve `app.html` over HTTP (not `file://`).
6. Set browser localStorage `se_api` if the API is not `http://localhost:4000`.

## Flow

Customer:
Shop -> Variant -> Cart -> Address -> Razorpay -> server signature verification -> captured-payment webhook -> order confirmed -> inventory deduction.

Admin:
Admin -> Orders / Payments / Inventory / Returns / Refunds.

COD is not implemented.

## Payment safety

The browser callback is not the final fulfilment authority. The server verifies the payment signature, and the captured-payment webhook is used for server-side confirmation. This follows Razorpay's current Standard Checkout guidance. citeturn0search0turn0search1

For production, configure an HTTPS webhook endpoint, validate its raw-body signature, and process webhook events idempotently. citeturn0search3turn0search5
