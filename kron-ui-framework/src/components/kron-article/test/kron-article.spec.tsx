import { newSpecPage } from '@stencil/core/testing';
import { KronArticle } from '../kron-article';

describe('kron-article', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KronArticle],
      html: `<kron-article></kron-article>`,
    });
    expect(page.root).toEqualHtml(`
      <kron-article>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kron-article>
    `);
  });
});
