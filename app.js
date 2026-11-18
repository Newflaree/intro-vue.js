const { createApp, ref } = Vue;

const app = createApp({
  template: `
    <h1>{{ message }}</h1>
    <p>- {{ author }}</p>
  `,
  setup() {
    const message = ref("I'm Batman");
    const author = ref("Batman");

    setTimeout(() => {
      message.value = "Hola, soy Goku";
      author.value = "Goku";
    }, 1500);

    return {
      author,
      message,
    };
  },
});

app.mount("#myApp");
