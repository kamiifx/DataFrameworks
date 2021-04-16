import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kron-menu',
  styleUrl: 'kron-menu.css',
  shadow: true,
})
export class KronMenu {
  @Prop() menu :string;
  @Prop() appreance:string;

  render() {
    return (
      <div class={`container ${this.appreance}`}>
        <div class="header">
          <h3>{this.menu}</h3>
          <span>&#128772;</span>
        </div>
        <div class="items">
          <slot>
          </slot>
        </div>
      </div>
    );
  }

}
