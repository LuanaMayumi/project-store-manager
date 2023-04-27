const { expect } = require('chai');
const sinon = require('sinon')
const connection = require('../../../src/models/connection')
const productModel = require("../../../src/models/productsModel");
const { products, product } = require('./mocks/productsMock')

describe('Testes de unidade do products Model', () => {

  afterEach(function () {
    sinon.restore();
  });

  describe('Case de sucesso', () => {

    it('Verifica se é um array', async () => {
      // ARRANGE
      sinon.stub(connection, "execute").resolves([products]);
      // ACT
      const result = await productModel.getAll();
      // ASSERT
      expect(result).to.be.a('array');
    })

    it('Recuperando todos os produtos do db', async () => {
      // ARRANGE
      sinon.stub(connection, 'execute').resolves([products])
      // ACT
      const result = await productModel.getAll()
      // ASSERT
      expect(result).to.be.deep.equal(products)
    })

    it("Recuperando um produto pelo ID", async () => {
      // ARRANGE
      sinon.stub(connection, "execute").resolves([product]);
    //  [ [{ produto }], ['metadados'] ]
       // ACT
       const result = await productModel.getById(1);
       // ASSERT
       expect(result).to.be.deep.equal(product[0]);
     });
  })
})
