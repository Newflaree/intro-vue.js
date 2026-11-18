const { createApp, ref } = Vue;

const app = createApp({
  template: `
    <h1>Hola Mundo</h1>
    <p>Desde App.js</p>
  `,
});

app.mount("#myApp");
