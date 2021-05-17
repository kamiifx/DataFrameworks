import { Component,h, Prop } from '@stencil/core';

@Component({
  tag: 'kron-button',
  styleUrl: 'kron-button.css',
  shadow: true,
})
export class KronButton {
  @Prop() appearance:string;

  render() {
    return (
      <button class={`item ${this.appearance}`}>
        <slot>
        </slot>
      </button>
    );
  }

}
