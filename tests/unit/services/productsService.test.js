const { expect } = require('chai')
const sinon = require('sinon')
const productsService = require('../../../src/services/productsService')
const productsModel = require('../../../src/models/productsModel')
const { products, product } = require('../mocks/productsMock')

describe("Testes de unidade do products Service", () => {

  afterEach(function () {
    sinon.restore();
  });

  describe("Case de sucesso", () => {
    it("Retorna todos os produtos", async () => {
      // ARRANGE
      sinon.stub(productsModel, 'getAll').resolves(products)
      // ACT
      const result = await productsService.getAll()
      // ASSERT
      expect(result).to.be.deep.equal(products)
      // expect(result.type).to.be.equal(200);
      // expect(result.message).to.deep.equal(products)
    });

    it("Retorna um produto pelo ID", async () => {
      // ARRANGE
      sinon.stub(productsModel, "getById").resolves(product);
      // ACT
      const result = await productsService.getById(1);
      // ASSERT
      expect(result.type).to.be.equal(200);
      expect(result.message).to.deep.equal(product);
    });
  });
});
