// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';
import 'wired-slider';
import 'wired-progress';
import 'wired-toggle';
import 'wired-button';

class ViewB extends LitElement {

  static get styles() {
    return css`
    :host {
      --wired-toggle-on-color: yellow;
    }`;
  } 

  render(){
    return html`
      <!-- template content -->
      <wired-card id="card2" elevation="4">
        <h4>Micro Frontend 2</h4>
        <section>
          <wired-progress id="progress" percentage></wired-progress>
        </section>
        <section>
          <wired-slider id="slider"></wired-slider>
          <wired-toggle id="toggle"></wired-toggle>
        </section>
      </wired-card>
    `;
  }

  firstUpdated(changedProperties) {
    const slider = this.shadowRoot.getElementById('slider');
    const prog = this.shadowRoot.getElementById('progress');
    const toggle = this.shadowRoot.getElementById('toggle');
    
    slider.addEventListener('change', () => {
      prog.value =  slider.value * 100 / 100;
    });

    toggle.addEventListener('change', () => {
      //Publish to channel
      PubSub.publish('favorite-channel',toggle.checked);
    });

    //Subscribe to channel
    PubSub.subscribe('value-channel').on((value) => {
      prog.value = value  
    });

  }


}
// Register the new element with the browser.
customElements.define('view-b', ViewB);