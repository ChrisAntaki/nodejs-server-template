const chai = require('chai');
const wasm = require('../wasm');

const { expect } = chai;

describe('Wasm', () => {
  describe('add', () => {
    it('should return number', () => {
      expect(wasm.add(2, 2)).to.equal(4);
    });
  });
});
