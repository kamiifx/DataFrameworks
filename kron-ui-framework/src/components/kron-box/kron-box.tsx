import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'kron-box',
  styleUrl: 'kron-box.css',
  shadow: true,
})
export class KronBox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
