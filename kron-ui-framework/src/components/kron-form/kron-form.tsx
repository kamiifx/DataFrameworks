import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kron-form',
  styleUrl: 'kron-form.css',
  shadow: true,
})
export class KronForm {
  @Prop() appearance: string;

  @Prop() image: boolean = true;

  render() {
    if (this.image) {
      return (
        <form class={`${this.appearance}`}>
          <div class="header">
            <slot name="start" />
          </div>
          <slot />
        </form>
      );
    } else {
      return (
        <form class={`${this.appearance}`}>
          <div class="header"></div>
          <slot />
        </form>
      );
    }
  }
}
