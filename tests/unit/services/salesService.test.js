const { expect } = require("chai");
const sinon = require("sinon");
const salesService = require('../../../src/services/salesService')
const salesModel = require('../../../src/models/salesModel')
const { sales } = require('../mocks/salesMock')

describe('Testes unitarios do Sales Service', () => {

    afterEach(function () {
      sinon.restore();
    });
  describe('Cases de sucesso', () => {
    it('Retorna todas as Sales', async () => {
      sinon.stub(salesModel, "getAll").resolves(sales);
      const result = await salesService.getAll();
      expect(result).to.be.deep.equal(sales);
    })

    it("Retorna a Sale referente ao id", async () => {
      sinon.stub(salesModel, "getById").resolves(sales[0]);
      const result = await salesService.getById(1);
     expect(result.type).to.be.equal(200);
     expect(result.message).to.deep.equal(sales[0]);
    });



  })
})
