import { newSpecPage } from '@stencil/core/testing';
import { KronTestOnclick } from '../kron-test-onclick';

describe('kron-test-onclick', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KronTestOnclick],
      html: `<kron-test-onclick></kron-test-onclick>`,
    });
    expect(page.root).toEqualHtml(`
      <kron-test-onclick>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kron-test-onclick>
    `);
  });
});
