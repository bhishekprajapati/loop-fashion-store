import LogoAmazon from "./LogoAmazon";
import LogoAliExpress from "./LogoAliExpress";
import LogoPaypal from "./LogoPaypal";
import LogoZalando from "./LogoZalando";
import LogoGoogle from "./LogoGoogle";
import LogoJacobs from "./LogoJacobs";

export default {
  components: {
    LogoAmazon,
    LogoAliExpress,
    LogoPaypal,
    LogoZalando,
    LogoGoogle,
    LogoZalando,
  },
  template: `
    <div class="flex items-center flex-wrap md:gap-x-8 xl:gap-x-16 2xl:gap-x-24">
      <span class="flex-1 min-w-[33.33%] md:min-w-0 flex-shrink-0">
        <LogoAmazon />
      </span>
      <span class="flex-1 min-w-[33.33%] md:min-w-0 flex-shrink-0">
        <LogoAliExpress />
      </span>
      <span class="flex-1 min-w-[33.33%] md:min-w-0 flex-shrink-0">
        <LogoPaypal />
      </span>
      <span class="flex-1 min-w-[33.33%] md:min-w-0 flex-shrink-0">
        <LogoZalando />
      </span>
      <span class="flex-1 min-w-[33.33%] md:min-w-0 flex-shrink-0">
        <LogoGoogle />
      </span>
      <span class="flex-1 min-w-[33.33%] md:min-w-0 flex-shrink-0">
        <LogoZalando />
      </span>
    </div>
  `,
};
