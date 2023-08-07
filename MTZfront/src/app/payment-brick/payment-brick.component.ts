import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-brick',
  templateUrl: './payment-brick.component.html',
  styleUrls: ['./payment-brick.component.css']
})
export class PaymentBrickComponent {

}


// CSHARP BACKEND
// using System;
//     using MercadoPago.Client.Common;
//     using MercadoPago.Client.Payment;
//     using MercadoPago.Config;
//     using MercadoPago.Resource.Payment;

//     MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";

//     var paymentRequest = new PaymentCreateRequest
//     {
//         TransactionAmount = decimal.Parse(Request["transactionAmount"]),
//         Token = Request["token"],
//         Description = Request["description"],
//         Installments = int.Parse(Request["installments"]),
//         PaymentMethodId = Request["paymentMethodId"],
//         Payer = new PaymentPayerRequest
//         {
//             Email = Request["cardholderEmail"],
//             Identification = new IdentificationRequest
//             {
//                 Type = Request["identificationType"],
//                 Number = Request["identificationNumber"],
//             },
//             FirstName = Request["cardholderName"]
//         },
//     };

//     var client = new PaymentClient();
//     Payment payment = await client.CreateAsync(paymentRequest);

//     Console.WriteLine(payment.Status);