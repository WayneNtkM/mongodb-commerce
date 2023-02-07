db.produtos.find({}, {
  _id: 0, vendidos: 1, nome: 1,
}).sort({
 vendidos: -1,
}).limit(1);