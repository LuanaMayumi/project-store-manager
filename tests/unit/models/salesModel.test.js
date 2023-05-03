const { expect } = require("chai");
const sinon = require("sinon");
const connection = require("../../../src/models/connection");
const salesModel = require('../../../src/models/salesModel')
const { sales } = require('../mocks/salesMock')

describe('Testes unitarios do Sales Model', () => {
  afterEach(function () {
    sinon.restore()
  })

  describe('Cases de sucesso', () => {

    it('Recupera todas as Sales do DB', async () => {
      // ARRANGE
      sinon.stub(connection, "execute").resolves([sales]);
      // ACT
      const result = await salesModel.getAll();
      // ASSERT
      expect(result).to.be.deep.equal(sales);
    })

    it('Recupera a Sale referente ao id', async () => {
      sinon.stub(connection, "execute").resolves([sales])
      const result = await salesModel.getById(1)
      expect(result).to.be.deep.equal(sales)
    })
  })
})
