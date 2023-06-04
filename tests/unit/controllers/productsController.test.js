const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const productsService = require("../../../src/services/productsService");
const productsController = require("../../../src/controllers/productsController");
const { products, product } = require("../mocks/productsMock");

describe("Testes de unidade do products Controller", function () {

  afterEach(function () {
    sinon.restore();
  });

  describe('Case de sucesso', () => {

    it("Retorna o status 200 e a lista de produtos", async () =>  {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, "getAll").resolves(products);
      await productsController.getAll(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(products);
    });

    it("Retorna o status 200 e produto referente ao ID", async () => {
      const res = {};
      const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, "getById")
        .resolves({ type: 200, message: product });
      await productsController.getById(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(product);
    });
  })
});
