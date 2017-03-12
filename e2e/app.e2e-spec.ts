import { MeanTemplatePage } from './app.po';

describe('mean-template App', function() {
  let page: MeanTemplatePage;

  beforeEach(() => {
    page = new MeanTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
