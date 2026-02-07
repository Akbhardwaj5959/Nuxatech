'use client';
import { useState, useRef } from 'react';

import ServicePricing from "@/components/ServicePricing";
import Inquiery from "@/components/Inquiery";

export default function service() {

  const [selectedPkg, setSelectedPkg] = useState("Web Basic"); // Default
  const formRef = useRef(null);

  const handleSelect = (name) => {
    setSelectedPkg(name);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <ServicePricing onSelect={handleSelect} />
      <Inquiery selectedPkg={selectedPkg}
        setSelectedPkg={setSelectedPkg}
        formRef={formRef} />
    </>
  );
}