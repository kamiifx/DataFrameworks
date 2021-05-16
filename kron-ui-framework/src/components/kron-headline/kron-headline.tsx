import { Component, Prop, h, } from '@stencil/core';

@Component({
  tag: 'kron-headline',
  styleUrl: 'kron-headline.css',
  shadow: true,

})
export class KronHeadline {
@Prop() appereance: string;

@Prop() backgroundpicture: string;
  render() {
    return (
     <div class={this.appereance}>
       <img src={this.backgroundpicture}/>
        <slot>
        
        </slot>

        </div>
    );
  }
}
