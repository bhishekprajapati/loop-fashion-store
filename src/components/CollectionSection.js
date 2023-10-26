import SvgFixedPrice from "./SvgFixedPrice";
import SvgLoop from "./SvgLoop";

export default {
  components: {
    SvgFixedPrice,
    SvgLoop,
  },
  template: `
    <div class="relative">
      <header class="flex items-center gap-x-[10%] mb-32">
        <h2
          class="text-[6rem] font-medium leading-[1.1] tracking-[-0.12rem] text-dark font-display">
          <span
            data-scroll
            data-scroll-event-progress="gradientFillEvent"
            data-scroll-target-prop="tw-gradient-from-position"
            class="relative text-transparent bg-clip-text bg-gradient-to-r from-accent from-0% to-[#a5a5a5] to-0% transition-colors duration-500">
            Our new collection
          </span>
          of sapphire necklaces
        </h2>
        <span>
          <button
            type="button"
            class="px-[2.5rem] py-[1.25rem] rounded-[6.25rem] uppercase text-[1.25rem] font-medium leading-[1.2] bg-dark text-light transition-transform duration-250 hover:scale-[1.02] active:scale-95 whitespace-nowrap">
            Add to cart
          </button>
        </span>
      </header>

      <div class="flex gap-x-[5.5rem]">
        <div>
          <p
            class="text-[1.25rem] leading-[1.5] tracking-[-0.05rem] text-dark mb-6">
            <span class="font-bold">Sapphire pearl necklace,</span> a necklace
            that combines pearls and custom pieces to create a special pearl
            necklace. Made with the finest sapphire pearls in the world and
            the gold will add the finest extra effect to your necklace. An
            elegant will add that final touch to your outfit.
          </p>

          <div
            data-scroll
            data-scroll-speed=".5"
            class="h-[35rem] overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://unsplash.com/photos/CugYNpbhihA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NzJ8fGJyb3duJTIwbGVhdGhlciUyMGphY2tldHxlbnwwfHx8fDE2OTc5NzI4MDh8MA&force=true&w=1920"
              alt="" />
          </div>
        </div>
        <div data-scroll data-scroll-speed=".2" class="pt-16">
          <div class="mb-6 relative">
            <div class="h-[35rem] overflow-hidden">
              <img
                class="w-full h-full object-cover"
                src="https://unsplash.com/photos/LxyH9Svxs48/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OTJ8fGJyb3duJTIwbGVhdGhlciUyMGphY2tldHxlbnwwfHx8fDE2OTc5NzI4MTR8MA&force=true&w=1920"
                alt="" />
            </div>

            <span
              class="absolute top-0 left-0 z-10 -translate-x-[50%] -translate-y-[50%]">
              <span class="relative">
                <SvgFixedPrice
                  data-scroll
                  data-scroll-event-progress="rotateEvent"
                  data-scroll-rotate-max="60"
                  class="duration-200"
                />
                <span
                  class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[3rem] font-medium text-light tracking-[-0.06rem] uppercase font-display">
                  $55
                </span>
              </span>
            </span>
          </div>

          <p
            class="text-[1.25rem] leading-[1.5] tracking-[-0.05rem] text-dark mb-6">
            This product is handmade with love and attention, not
            mass-produced and the multi-color beads create an interesting
            look. Gifts that are handmade with love are the best gifts to
            give. Even gifts to yourself! Indulge in something that will
            please you!
          </p>
          <a
            href="#"
            class="uppercase text-[1.25rem] leading-[1.2] text-dark font-medium">
            Read more
          </a>
        </div>
        <ul class="[&>*]:mb-8">
          <li>
            <button type="button" class="group">
              <span
                class="w-20 h-20 rounded-full overflow-hidden border-4 border-transparent box-decoration-clone group-hover:border-dark transition-colors duration-500">
                <img
                  class="w-full h-full rounded-full object-cover object-center border-4 border-light"
                  src="https://unsplash.com/photos/m9h_7B6RBiM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8YnJvd258ZW58MHx8fHwxNjk3OTQ1MTQ3fDA&force=true&w=640"
                  alt="" />
              </span>
              <br />
              <span
                class="text-[1.25rem] leading-[1.5] tracking-[-0.05rem] text-dark">
                Brown
              </span>
            </button>
          </li>
          <li>
            <button type="button" class="group">
              <span
                class="w-20 h-20 rounded-full overflow-hidden border-4 border-transparent box-decoration-clone group-hover:border-dark transition-colors duration-500">
                <img
                  class="w-full h-full rounded-full object-cover object-center border-4 border-light"
                  src="https://unsplash.com/photos/HyBXy5PHQR8/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk3OTYwNTgzfA&force=true&w=640"
                  alt="" />
              </span>
              <br />
              <span
                class="text-[1.25rem] leading-[1.5] tracking-[-0.05rem] text-dark">
                Red
              </span>
            </button>
          </li>
          <li>
            <button type="button" class="group">
              <span
                class="w-20 h-20 rounded-full overflow-hidden border-4 border-transparent box-decoration-clone group-hover:border-dark transition-colors duration-500">
                <img
                  class="w-full h-full rounded-full object-cover object-center border-4 border-light"
                  src="https://unsplash.com/photos/dVRD8E3XUGs/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk3OTYyOTY3fA&force=true&w=640"
                  alt="" />
              </span>
              <br />
              <span
                class="text-[1.25rem] leading-[1.5] tracking-[-0.05rem] text-dark">
                Blue
              </span>
            </button>
          </li>
        </ul>
      </div>

      <span
        data-scroll
        data-scroll-event-progress="horizontalParallaxEvent"
        class="absolute bottom-0 right-0">
        <SvgLoop />
      </span>
    </div>
  `,
};
