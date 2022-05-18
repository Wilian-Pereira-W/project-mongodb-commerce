db.produtos.updateOne({ nome: "Big Mac" }, { $currentDate: { ultimaModificacao: true } });
db.produtos.find({ ultimaModificacao: { $ne: null } }, { _id: false, nome: true });