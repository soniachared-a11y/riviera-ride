import transfertsCourants from '@/assets/transferts-courants.png';

const PricingSection = () => {
  return (
    <section className="w-full">
      <img
        src={transfertsCourants}
        alt="Tarifs des transferts courants - Aéroport, Gare TGV, Marseille"
        className="w-full h-auto block"
      />
    </section>
  );
};

export default PricingSection;
