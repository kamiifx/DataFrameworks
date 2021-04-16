import { newSpecPage } from '@stencil/core/testing';
import { KronHeadline } from '../kron-headline';

describe('kron-headline', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KronHeadline],
      html: `<kron-headline></kron-headline>`,
    });
    expect(page.root).toEqualHtml(`
      <kron-headline>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kron-headline>
    `);
  });
});
