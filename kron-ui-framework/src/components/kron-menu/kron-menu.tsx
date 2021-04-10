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
      <div class={this.appreance}>
        <h3>{this.menu}</h3>
        <div>
          <slot>
          </slot>
        </div>
      </div>
    );
  }

}
