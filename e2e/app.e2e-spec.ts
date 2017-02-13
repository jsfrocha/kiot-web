import { EdpWebPage } from './app.po';

describe('edp-web App', function() {
  let page: EdpWebPage;

  beforeEach(() => {
    page = new EdpWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
