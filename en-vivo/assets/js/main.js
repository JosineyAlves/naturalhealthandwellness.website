new Vue({
  el: "#app",
  data: {
    tempoEmSegundos: 5, //Tempo em segundos do delay
    min: 600, // valor mínimo de pessoas na live
    max: 1000, // máximo de pessoas na live

    //aqui definimos os comentarios, com imagem,nome e texto
    comentarios: [
      {
        img: "./assets/img/1.webp",
        nome: "Sonia",
        texto: "Estoy curiosa por saber si este nuevo método para reducir el zumbido en el oído es realmente revolucionario. Sería un alivio encontrar una solución eficaz para un problema tan molesto",
      },
      {
        img: "./assets/img/2.webp",
        nome: "Ramiro",
        texto:
          "Entiendo la seriedad de enfrentar problemas de zumbido y pérdida auditiva. ¡Las noches sin dormir y los problemas diarios son muy difíciles! Estamos a la espera de una solución no invasiva que pueda brindar un alivio real. Un nuevo método que ofrezca ayuda sería un avance considerable.",
      },
      {
        img: "./assets/img/3.webp",
        nome: "Raul",
        texto:
          "Convivir con zumbido en el oído y pérdida auditiva es una verdadera batalla. ¡Enfrento momentos difíciles con esto, ya sabes! Las visitas constantes al médico y los síntomas que parecen no acabar. Definitivamente probaré esta solución",
      },
      {
        img: "./assets/img/4.webp",
        nome: "Maria R.",
        texto:
          "Es genial poder participar en esta transmisión en vivo y seguir cada detalle sobre una posible solución para los problemas de audición... Estoy ansiosa por entender más sobre cómo esta solución casera puede marcar la diferencia.",
      },
      {
        img: "./assets/img/5.webp",
        nome: "Cecilia",
        texto: "¡Por fin una solución innovadora para reducir esos ruidos en el oído, gracias!",
      },
      {
        img: "./assets/img/6.webp",
        nome: "Salvador R.",
        texto:
          "He intentado de todo para resolver mis problemas de audición, pero parece que nada funciona. Estos intentos fallidos me desaniman cada vez más, pero ahora, con este nuevo método, estoy recuperando la esperanza. Espero que esta vez sea la solución que estábamos buscando.",
      },
      {
        img: "./assets/img/7.webp",
        nome: "Love2",
        texto:
          "Me alegra mucho ver avances significativos en la medicina, especialmente en lo que respecta a la salud auditiva.",
      },
      {
        img: "./assets/img/8.webp",
        nome: "Emilio",
        texto:
          "¡Qué noticia increíble! Esta solución casera para reducir el zumbido y mejorar la audición puede ayudar a mucha gente.",
      },
      {
        img: "./assets/img/9.webp",
        nome: "Leo",
        texto: "Estoy emocionado por la promesa y el potencial de este método para reducir el zumbido. ¡Una excelente noticia para quienes sufren con esto!",
      },
      {
        img: "./assets/img/10.webp",
        nome: "Cleo M.",
        texto: "Mi esposo siempre ha sufrido de zumbidos en el oído y su audición empeora cada día. Descubrir esta nueva forma de tratar los síntomas nos llena de esperanza y entusiasmo.",
      },
      {
        img: "./assets/img/11.webp",
        nome: "Mariana L.",
        texto:
          "Los detalles científicos detrás de este avance son muy buenos..",
      },
      {
        img: "./assets/img/12.webp",
        nome: "Pedro Villezcas",
        texto:
          "Solo quiero librarme de este zumbido insoportable y recuperar mi paz mental 🤝",
      },
      {
        img: "./assets/img/13.webp",
        nome: "Michael",
        texto: "Estoy ansioso por ver cómo este descubrimiento puede transformar mi audición",
      },
      {
        img: "./assets/img/14.webp",
        nome: "Roque",
        texto: "He intentado muchas cosas para resolver el problema del zumbido y las dificultades auditivas, y nada funciona",
      },
      {
        img: "./assets/img/15.webp",
        nome: "Marco An.",
        texto: "Después de tantas decepciones, estoy depositando mi fe en esto, espero que finalmente funcione",
      },
      {
        img: "./assets/img/16.webp",
        nome: "Gerardo",
        texto:
          "Realmente lo que dice tiene sentido, después de usar tantos medicamentos mi audición empeora cada día",
      },
      {
        img: "./assets/img/17.webp",
        nome: "Valerio",
        texto:
          "Es increíble tener acceso a esta información tan importante en tiempo real. Nunca había escuchado a alguien hablar de esto 👏👏👏",
      },
      {
        img: "./assets/img/18.webp",
        nome: "Carlos T.",
        texto:
          "Parece ser muy prometedora esta solución para los oídos. ¡El avance de la ciencia es una bendición para muchos!",
      },
      {
        img: "./assets/img/19.webp",
        nome: "Yesabel",
        texto:
          "Realmente la explicación está siendo muy clara, y cada vez tengo más esperanza en esta nueva aproximación",
      },
      {
        img: "./assets/img/20.webp",
        nome: "Consuelo",
        texto: "¡Wow, no sabía esto!",
      },
    ],

    btnDisplay: "none", //não mexe
    contador: "", //não mexe
    comentariosExibidos: [], //não mexe
    indiceComentario: 0, //não mex
    showContent: true, //não mex
  },
  mounted() {
    this.exibirComentario();
    this.delay();
    this.atualizarContador();
  },
  methods: {
    delay() {
      setTimeout(() => {
        this.btnDisplay = "flex";
      }, this.tempoEmSegundos * 1000);
    },
    gerarNumeroAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    atualizarContador() {
      setInterval(() => {
        this.contador = this.gerarNumeroAleatorio(this.min, this.max);
      }, this.gerarNumeroAleatorio(15000, 30000));
    },
    exibirComentario() {
      if (this.indiceComentario < this.comentarios.length) {
        this.comentariosExibidos.push(this.comentarios[this.indiceComentario]);
        this.indiceComentario++;
        setTimeout(
          this.exibirComentario,
          this.gerarNumeroAleatorio(10000, 30000)
        );
      }
    },
    atualizarContador() {
      setInterval(() => {
        this.contador = this.gerarNumeroAleatorio(this.min, this.max);
      }, this.gerarNumeroAleatorio(5000, 20000));
    },
    toggleContent() {
      this.showContent = !this.showContent;
    },
  },
});
