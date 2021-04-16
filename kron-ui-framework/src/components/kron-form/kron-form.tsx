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
              <kron-figure appearance="center">
                <img src="https://static.posters.cz/image/1300/fototapet/above-the-clouds-sky-416x254-cm-premium-non-woven-130gsm-i77999.jpg"></img>
              </kron-figure>
            </div>
            <slot />
          </form>
      );
    } else {
      return (
        <form class={`${this.appearance}`}>
          <slot />
        </form>
      );
    }
  }
}
