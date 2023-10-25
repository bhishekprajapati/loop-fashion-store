import MarqueeOffers from "../components/MarqueeOffers";
import CompanyLogoDisplay from "../components/CompanyLogoDisplay";

export default {
  components: {
    MarqueeOffers,
    CompanyLogoDisplay,
  },
  template: `
    <header>
      <MarqueeOffers data-text="NEW YEAR’S PROMO FREE SHIPPING AROUND U.S ON ORDERS ABOVE $200" />
    </header>
    <main>
      <section class="container mx-auto select-none">
        <CompanyLogoDisplay />      
      </section>
    </main>
  `,
};
