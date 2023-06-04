const { expect } = require('chai');
const sinon = require('sinon')
const connection = require('../../../src/models/connection')
const productModel = require("../../../src/models/productsModel");
const { products, product, newProduct } = require("../mocks/productsMock");

describe('Testes de unidade do products Model', () => {

  afterEach(function () {
    sinon.restore();
  });

  describe('Case de sucesso', () => {

    it('Verifica se é um array', async () => {
      sinon.stub(connection, "execute").resolves([products]);
      const result = await productModel.getAll();

      expect(result).to.be.a('array');
    })

    it('Recuperando todos os produtos do db', async () => {
      sinon.stub(connection, 'execute').resolves([products])
      const result = await productModel.getAll()
      expect(result).to.be.deep.equal(products)
    })

    it("Recuperando um produto pelo ID", async () => {
      sinon.stub(connection, "execute").resolves([product]);
       const result = await productModel.getById(1);
       expect(result).to.be.deep.equal(product[0]);
    });

    it('Criando um novo produto', async () => {
      sinon.stub(connection, "execute").resolves([newProduct]);
      const result = await productModel.createProduct({ name: 'ProductXX' })
      expect(result).to.be.an('object');
      expect(result).to.contain.keys(['id', 'name'])
    })
  })
})
