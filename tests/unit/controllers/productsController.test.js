const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const productsService = require("../../../src/services/productsService");
const productsController = require("../../../src/controllers/productsController");
const products = require("../models/mocks/productsMock");

describe("Testes de unidade do products Controller", () => {
  afterEach = sinon.restore();
  it("Case de sucesso", () => {
    it("Retorna todos os produtos", async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // ARRANGE
      sinon.stub(productsService, "getAll").resolves(products);
      // ACT
      await productsController.getAll(req, res);
      // ASSERT
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(products);
    });
  });
});
