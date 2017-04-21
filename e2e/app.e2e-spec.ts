import { NodejsAngularHerokuPage } from './app.po';

describe('nodejs-angular-heroku App', () => {
  let page: NodejsAngularHerokuPage;

  beforeEach(() => {
    page = new NodejsAngularHerokuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
