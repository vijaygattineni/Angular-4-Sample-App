import { SAMPLEAPPPage } from './app.po';

describe('sample-app App', () => {
  let page: SAMPLEAPPPage;

  beforeEach(() => {
    page = new SAMPLEAPPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
