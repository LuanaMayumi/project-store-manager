const { expect } = require('chai')
const sinon = require('sinon')
const productsService = require('../../../src/services/productsService')
const productsModel = require('../../../src/models/productsModel')
const { products } = require('../models/mocks/productsMock')

describe("Testes de unidade do products Service", () => {
  afterEach = sinon.restore();
  it("Case de sucesso", () => {
    it("Retorna todos os produtos", async () => {
      // ARRANGE
      sinon.stub(productsModel, 'getAll').resolves(products)
      // ACT
      const result = await productsService.getAll()
      // ASSERT
      expect(result.type).to.be.equal(200);
      expect(result.message).to.deep.equal(products)
    });
  });
});
