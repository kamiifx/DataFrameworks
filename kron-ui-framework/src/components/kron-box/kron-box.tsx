import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kron-box',
  styleUrl: 'kron-box.css',
  shadow: true,
})
export class KronBox {

@Prop() appearance: string;


  render() {
    return (
  <div class={this.appearance}>
    <slot>
      
    </slot>
  </div>
    );
  }
}
