import { Component, getAssetPath, h, Prop } from '@stencil/core';

@Component({
  tag: 'kron-figure',
  styleUrl: 'kron-figure.css',
  assetsDirs: ['assets'],
})
export class KronFigure {
  
  @Prop() image;
  @Prop({attribute: "isValid" }) isValid: boolean = true;
  @Prop() figcaption: string;

  render() {

    if(this.isValid){
      return (
        <figure>
        <img src={getAssetPath(`./assets/${this.image}`)} />
        <figcaption>{this.figcaption}</figcaption>
        </figure>
      )        
    }

    else{
      return <p>you dont whant anny picture</p>;
    }
    
  }
}
