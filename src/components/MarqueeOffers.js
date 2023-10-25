export default {
  props: ["dataText"],
  template: `
    <div class="marquee bg-accent text-light">
    <p v-for="id in 2">
      <span
        v-for="id in 3"
        class="text-[1rem] leading-[1.5] tracking-[-0.04rem]">
        {{ dataText }}
      </span>
    </p>
  </div>
  `,
};
