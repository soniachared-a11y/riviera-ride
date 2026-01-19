const PricingSection = () => {
  return (
    <section className="w-full py-12">
      {/* Desktop Image - Hidden on Mobile, Visible on md+ */}
      <img
        src="https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/transferts-courants%20.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS90cmFuc2ZlcnRzLWNvdXJhbnRzIC5wbmciLCJpYXQiOjE3Njg3Nzc0NTQsImV4cCI6MTgwMDMxMzQ1NH0.YJ2x5CEZDOgdSUhcXJXSR5zvLfgyDmMGf967Q_VNkmo"
        alt="Tarifs transferts courants"
        className="w-full h-auto hidden md:block"
      />
      
      {/* Mobile Image - Visible on Mobile, Hidden on md+ */}
      <img
        src="https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/transferts-mobile%20.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS90cmFuc2ZlcnRzLW1vYmlsZSAucG5nIiwiaWF0IjoxNzY4NzgwMzkyLCJleHAiOjE4MDAzMTYzOTJ9.o34sS739gJRc_veDYSoaeUUQ9kLbxK75cPgFAjVEUFU"
        alt="Tarifs transferts mobile"
        className="w-full h-auto block md:hidden"
      />
    </section>
  );
};

export default PricingSection;
