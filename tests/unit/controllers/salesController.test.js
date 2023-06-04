const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const salesService = require("../../../src/services/salesService");
const salesController = require("../../../src/controllers/salesController");
const { sales } = require("../mocks/salesMock");

describe("Testes unitarios de Sales Controller", function () {
 afterEach(function () {
   sinon.restore();
 });
  describe("Cases de sucesso", () => {

    it("Retorna o status 200 e a lista de Sales", async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, "getAll").resolves(sales);
      await salesController.getAll(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(sales);
    });

    it("Retorna o status 200 e a Sale referente ao id", async () => {
      const res = {};
      const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, "getById")
        .resolves({ type: 200, message: sales[0] });
      await salesController.getById(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(sales[0]);
    });
  });
});
