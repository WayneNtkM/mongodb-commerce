db.produtos.updateMany({
  nome: { $regex: "Big Mac" },
}, {
  $set: { ultimaModificacao: Date() },
});

db.produtos.find({
  ultimaModificacao: { $exists: true },
}, {
  _id: 0, nome: 1,
});