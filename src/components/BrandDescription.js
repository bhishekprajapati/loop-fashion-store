import SvgAsterisk from "./SvgAsterisk";

export default {
  components: {
    SvgAsterisk,
  },
  template: `
    <div
      class="scale-[1.5] sm:scale-[2] md:scale-[2.5] lg:scale-[3] xl:scale-[4]">
      <p
        data-scroll
        data-scroll-speed=".03"
        class="font-display text-[1rem] leading-[1.3] tracking-[-0.08rem] text-dark">
        Since 1987, LOOP has been founded and
      </p>
      <p
        data-scroll
        data-scroll-speed=".02"
        class="font-display text-[1rem] leading-[1.3] tracking-[-0.08rem] text-dark">
        loved. Continues to create a new fashion
      </p>
      <p
        data-scroll
        data-scroll-speed=".01"
        class="flex justify-center items-center gap-x-[.5rem]">
        <SvgAsterisk />
        <span
          class="font-display text1rem] leading-[1.3] tracking-[-0.08rem] text-dark">
          trends to be the finest products.
        </span>
        <SvgAsterisk />
      </p>
    </div>
  `,
};
