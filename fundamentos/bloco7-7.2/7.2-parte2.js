const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
let entregador = order.order.delivery.deliveryPerson;
let destinatario = order.name;
let telefone = order.phoneNumber;
let rua = order.address.street;
let num = order.address.number;
let apartamento = order.address.apartment;


  const customerInfo = (order) => {
    console.log(`Olá ${entregador}, entrega para: ${destinatario}, Telefone: ${telefone}, ${rua}, Nº: ${num}, AP: ${apartamento}.`)
  };
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const newOrder = {
      name: 'Luiz Silva',
      payment: '50',
    }

    Object.assign(order,newOrder);
    console.log(`Olá ${order.name}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${order.payment}.`);  
  };
  
  orderModifier(order);

  

  