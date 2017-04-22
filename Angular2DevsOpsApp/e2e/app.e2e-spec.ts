import { Angular2DevsOpsAppPage } from './app.po';

describe('angular2-devs-ops-app App', () => {
  let page: Angular2DevsOpsAppPage;

  beforeEach(() => {
    page = new Angular2DevsOpsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
