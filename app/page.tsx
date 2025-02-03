


import Services from '@/components/services';
import Testimonials from '@/components/testimonials';
import TeamMembers from '@/components/team';
import EmpresaList from '@/components/companies';
import News from '@/components/news';
import StatsSection from '@/components/StatsSection';
import LegalFoundationSection from '@/components/found';
import ValoresInstitucionales from '@/components/values';
import EstructuraOrganizacional from '@/components/structure';
import HistoriaCamaraComercio from '@/components/history';


// ... (remaining imports and data definitions)

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      <StatsSection/>
      <LegalFoundationSection/>
      <EmpresaList/>
      <Services/>
      
      <ValoresInstitucionales/>
      
      <News/>
      <EstructuraOrganizacional/>
      <HistoriaCamaraComercio/>
      <TeamMembers/>
      <Testimonials/>
      
     
    </div>
  );
};

export default Index;