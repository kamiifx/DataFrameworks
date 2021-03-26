import { newSpecPage } from '@stencil/core/testing';
import { KronBox } from '../kron-box';

describe('kron-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KronBox],
      html: `<kron-box></kron-box>`,
    });
    expect(page.root).toEqualHtml(`
      <kron-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kron-box>
    `);
  });
});
