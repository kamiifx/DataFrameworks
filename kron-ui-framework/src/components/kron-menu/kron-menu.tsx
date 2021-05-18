import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kron-menu',
  styleUrl: 'kron-menu.css',
  shadow: true,
})
export class KronMenu {
  @Prop() menu :string;
  @Prop() appearance:string;

  render() {
    return (
      <div class={`container ${this.appearance}`}>
          <h3 class="menu">{this.menu}</h3>
        <div class="items">
          <slot>
          </slot>
        </div>
      </div>
    );
  }

}
