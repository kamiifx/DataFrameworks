import { newSpecPage } from '@stencil/core/testing';
import { KronSection } from '../kron-section';

describe('kron-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KronSection],
      html: `<kron-section></kron-section>`,
    });
    expect(page.root).toEqualHtml(`
      <kron-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kron-section>
    `);
  });
});
