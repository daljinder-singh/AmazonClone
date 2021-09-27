import React, {useEffect, useRef } from 'react'

const Paypal = (props) =>{
    // sb-xglkx7878822@business.example.com

    const paypal = useRef();
    useEffect( () =>{
        window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Your description",
                amount: {
                  currency_code: "CAD",
                  value: props.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log('order',order);
        },
        onError: (err) => {
          console.error('err',err);
        },
      })
      .render(paypal.current);
    },[])
    return(
        <div ref = {paypal}></div>
    )
}

export default Paypal