const { expect } = require('chai');
const sinon = require('sinon')
const connection = require('../../../src/models/connection')
const productModel = require("../../../src/models/productsModel");
const { products } = require('./mocks/productsMock')

describe('Testes de unidade do products Model', () => {
  afterEach = sinon.restore();
  it('Case de sucesso', () => {

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
      sinon.stub(connection, 'execute').resolves([products.products])
      // ACT
      const result = await productModel.getAll()
      // ASSERT
      expect(result).to.be.deep.equal(products.products)
    })
  })

})
