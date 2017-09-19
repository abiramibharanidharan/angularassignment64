import { AAssignment63Page } from './app.po';

describe('a-assignment63 App', function() {
  let page: AAssignment63Page;

  beforeEach(() => {
    page = new AAssignment63Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
