"use client";

import React, { useEffect, useState } from "react";
import Aside from "@/components/PersonalPageComponents/Aside";
import FormPatient from "@/components/PersonalPageComponents/FormPatient";
import ClinicalAnalysis from "@/components/PersonalPageComponents/ClinicalAnalysis";
import Results from "@/components/PersonalPageComponents/Results";
import { useSearchParams } from 'next/navigation';
import Login from "@/components/PersonalPageComponents/Login";
import Ticket from "@/components/PersonalPageComponents/Ticket";

const MainPersonal = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get('section');
  const [showFormPatient, setShowFormPatient] = useState(true);

  useEffect(() => {
    console.log("Current section:", section);
    if (section === 'clinical-analysis' || section === 'result') {
      setShowFormPatient(false);
    } else {
      setShowFormPatient(true);
    }
  }, [section]);

  return (


          <main className="flex flex-col h-full items-center w-full">
            {showFormPatient ? (
              <FormPatient/>
            ) : section === 'clinical-analysis' ? (
              <ClinicalAnalysis />
            ) : section === 'clinical-result' ? (
              <Results />
            ) : null}
          </main>
    
  

  );
};

export default MainPersonal;