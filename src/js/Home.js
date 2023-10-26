import MarqueeOffers from "../components/MarqueeOffers";
import CompanyLogoDisplay from "../components/CompanyLogoDisplay";
import BrandDescription from "../components/BrandDescription";
import CollectionSection from "../components/CollectionSection";

export default {
  components: {
    MarqueeOffers,
    CompanyLogoDisplay,
    BrandDescription,
    CollectionSection,
  },
  template: `
    <header>
      <MarqueeOffers data-text="NEW YEAR’S PROMO FREE SHIPPING AROUND U.S ON ORDERS ABOVE $200" />
    </header>
    <main>
      <section class="container mx-auto select-none">
        <CompanyLogoDisplay />      
      </section>

      <section
        class="container mx-auto text-center overflow-hidden py-[6.25rem] sm:py-[7rem] md:py-[8rem] lg:py-[9rem] xl:py-[11rem] my-[6rem]">
        <BrandDescription />
      </section>

      <section class="relative container mx-auto mb-[12rem]">
        <CollectionSection />
      </section>
    </main>
  `,
};
