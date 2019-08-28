import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe('Our first test case', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      // Give me the first H1 on the page
      const h1 = window.document.getElementsByTagName('h1')[0];
      // const h1 = window.document.getElementsByTagName('h1');
      // console.log(h1.innerHTML);
      expect(h1.innerHTML).to.equal("Hello World!");
      done();
      window.close();
    });
  });
});
