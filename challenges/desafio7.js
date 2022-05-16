db.produtos.find({ 
  $and: [ 
    { vendidos: { $ne: 50 } }, 
    { tags: { $eq: null } },
    ] },
  { _id: false, nome: true, vendidos: true });