var should  = require("should");
var common  = require("../common");
var index   = require("../../lib/index");


describe("index", function () {
  describe("exports", function () {
    it("should expose Sync function", function () {
      should.exist(index.Sync)
      should.equal(typeof index.Sync, 'function');
    });

    it("should expose dialect function", function () {
      should.exist(index.dialect)
      should.equal(typeof index.dialect, 'function');
    });
  });

  describe("#dialect", function () {
    ['mysql', 'postgresql', 'sqlite'].forEach(function (dialectName) {
      it("should expose " + dialectName + " dialect", function () {
        var dialect = index.dialect(dialectName);

        should.exist(dialect);
        console.log(dialect);
      });
    });
  });
});
