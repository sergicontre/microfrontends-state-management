import { LitElement, html } from 'lit-element';
import './view-a';
import './view-b';
import './view-c';

// Extend the LitElement base class
class MyApp extends LitElement {
  render(){
    return html`
      <!-- template content -->
      <view-a></view-a>
      <view-b></view-b>
      <view-c></view-c>
    `;
  }
}
// Register the new element with the browser.
customElements.define('my-app', MyApp);

 