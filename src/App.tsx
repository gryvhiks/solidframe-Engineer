/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  HardHat, 
  Building2, 
  Ruler, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Users,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Award,
  BookOpen
} from "lucide-react";

const teamMembers = [
  { 
    name: "Engr. Kyle Arthur Guevarra", 
    role: "Project Manager",
    bio: "Isang lisensyadong Civil Engineer na may higit sa 12 taong karanasan sa pamamahala ng residential at small infrastructure projects. Nagtapos siya sa University of the Philippines Diliman. Dalubhasa sa project planning, scheduling, at client coordination."
  },
  { 
    name: "Engr. Karla Paula San Angel", 
    role: "Structural Design & Analysis",
    bio: "Lisensyadong Civil Engineer mula sa Mapúa University na may 8 taong karanasan. Dalubhasa sa structural computation at safety evaluation gamit ang makabagong engineering software."
  },
  { 
    name: "Engr. Bryan Jay Atienza", 
    role: "Architectural & Structural Lead",
    bio: "Rehistradong Civil Engineer mula sa University of Santo Tomas na may 10 taong karanasan. Kilala sa paggawa ng functional at modernong disenyo na sumusunod sa building codes."
  },
  { 
    name: "Engr. Gade Justin Nares", 
    role: "Site Supervision Lead",
    bio: "Civil Engineer mula sa Technological Institute of the Philippines na may 7 taong karanasan. Nangangasiwa sa araw-araw na operasyon sa site upang matiyak ang kalidad at pagsunod sa plano."
  },
  { 
    name: "Engr. Wensly Calunod", 
    role: "Cost Estimation & Budgeting",
    bio: "Civil Engineer mula sa De La Salle University na may 6 na taong karanasan sa quantity surveying. Responsable sa cost estimates, material take-offs, at financial monitoring."
  },
  { 
    name: "Engr. Walter Karl Cabatingan", 
    role: "Structural Inspection & QC",
    bio: "Lisensyadong Civil Engineer mula sa Polytechnic University of the Philippines na may 9 na taong karanasan. Dalubhasa sa safety standards at engineering specifications."
  },
];

const services = [
  {
    title: "Disenyong Struktural",
    description: "Komprehensibong pagsusuri at disenyo para sa mga residensyal at komersyal na gusali.",
    icon: <Ruler className="w-6 h-6" />,
  },
  {
    title: "Pamamahala ng Konstruksyon",
    description: "Ekspertong pangangasiwa at pamamahala ng mga proyekto mula simula hanggang matapos.",
    icon: <HardHat className="w-6 h-6" />,
  },
  {
    title: "Inspeksyon ng Gusali",
    description: "Masusing pagtatasa ng integridad ng struktura at mga inspeksyon sa kaligtasan.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Civil Engineering",
    description: "Pagpaplano ng imprastraktura, pagpapaunlad ng site, at mga solusyon sa urban engineering.",
    icon: <Building2 className="w-6 h-6" />,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-sage-100 selection:text-sage-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold tracking-tight text-stone-900 uppercase">
                SolidFrame
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-stone-600 hover:text-sage-600 transition-colors">Tungkol sa Amin</a>
              <a href="#services" className="text-sm font-medium text-stone-600 hover:text-sage-600 transition-colors">Serbisyo</a>
              <a href="#resume" className="text-sm font-medium text-stone-600 hover:text-sage-600 transition-colors">Sample Resume</a>
              <a href="#team" className="text-sm font-medium text-stone-600 hover:text-sage-600 transition-colors">Koponan</a>
              <a href="#contact" className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-all">
                Makipag-ugnayan
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-sage-50/50 rounded-l-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-bold uppercase tracking-wider mb-6">
                <CheckCircle2 className="w-3 h-3" />
                Kahusayan sa Engineering
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1] mb-8">
                Pagbuo ng <span className="text-sage-600">Kinabukasan</span> sa Matibay na Pundasyon.
              </h1>
              <p className="text-lg text-stone-600 mb-10 max-w-lg leading-relaxed">
                Ang SolidFrame Engineering ay nagbibigay ng makabagong solusyong struktural at serbisyo sa pamamahala ng konstruksyon na akma sa iyong pananaw.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-sage-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sage-700 transition-all flex items-center gap-2 shadow-lg shadow-sage-200">
                  Simulan ang Iyong Proyekto
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button className="bg-white text-stone-900 border border-stone-200 px-8 py-4 rounded-xl font-semibold hover:bg-stone-50 transition-all">
                  Tignan ang Portfolio
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modernong Arkitektura" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-sage-100 p-3 rounded-xl">
                    <Briefcase className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-stone-900">150+</p>
                    <p className="text-sm text-stone-500">Proyektong Natapos</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kaligiran (About) Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-sage-600 uppercase tracking-widest mb-4">Kaligiran</h2>
              <p className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6 leading-tight">
                Itinatag upang tugunan ang pangangailangan sa de-kalidad na serbisyong engineering sa Pilipinas.
              </p>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Ang SolidFrame Engineering ay may espesyalidad sa building design, project management, structural inspection, at construction supervision. Ang aming saklaw ay binubuo ng buong lifecycle ng konstruksiyon mula sa paunang disenyo na sumusunod sa National Building Code hanggang sa hands-on na pangangasiwa.
                </p>
                <p>
                  Sa SolidFrame Engineering, naniniwala kami na ang matagumpay na proyekto ay nagsisimula sa maingat na pagpaplano at maaasahang pangangasiwa. Mula sa simpleng bahay hanggang sa mas komplikadong gusali, sinisiguro namin ang pinakamataas na pamantayan ng kalidad at kaligtasan.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=500" alt="Construction Site" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
                <div className="bg-sage-600 p-8 rounded-2xl text-white">
                  <p className="text-4xl font-bold mb-2">12+</p>
                  <p className="text-sm opacity-80 uppercase tracking-wider font-semibold">Taon ng Karanasan</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-stone-900 p-8 rounded-2xl text-white">
                  <p className="text-4xl font-bold mb-2">100%</p>
                  <p className="text-sm opacity-80 uppercase tracking-wider font-semibold">Safety Record</p>
                </div>
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=500" alt="Engineering Plan" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Philosophy Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900">Bisyon</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Maging isang kilala at mapagkakatiwalaang kumpanya sa larangan ng construction at engineering sa Pilipinas. Nais nitong makilala bilang tagapaghatid ng de-kalidad, ligtas, at sustainable na mga istruktura na tumutugon sa pangangailangan ng komunidad.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900">Misyon</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Magbigay ng de-kalidad, ligtas, at maaasahang serbisyo sa pamamagitan ng maayos na disenyo at epektibong pamamahala. Tiyakin na ang bawat proyekto ay sumusunod sa National Building Code at pinakamataas na pamantayan ng kaligtasan.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900">Pilosopiya</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Ang tunay na engineering ay hindi lang tungkol sa matitibay na istruktura, kundi sa matibay na layunin. Bawat plano ay ginagawa nang may malasakit sa kaligtasan ng tao, sa kalikasan, at sa kinabukasan ng komunidad.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-sage-600 uppercase tracking-widest mb-4">Mga Serbisyo</h2>
              <p className="text-4xl font-bold text-stone-900">
                Ang aming maiaalok sa inyo.
              </p>
            </div>
            <p className="text-stone-600 max-w-sm">
              Mula sa unang konsepto hanggang sa huling inspeksyon, nagbibigay kami ng buong spectrum ng serbisyo sa engineering.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-2xl border border-stone-200 hover:border-sage-200 transition-all group"
              >
                <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center text-stone-600 group-hover:bg-sage-600 group-hover:text-white transition-all mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sage-600 uppercase tracking-widest mb-4">Ang Aming Koponan</h2>
            <p className="text-4xl font-bold text-stone-900 mb-4">Ang mga Isip sa Likod ng SolidFrame</p>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Kilalanin ang aming koponan ng mga propesyonal na inhinyero na nakatuon sa kahusayan sa bawat proyekto.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-stone-50 p-8 border border-stone-100 hover:bg-sage-600 transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage-500 transition-colors">
                    <Users className="w-8 h-8 text-sage-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-white transition-colors mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sage-600 font-medium group-hover:text-sage-100 transition-colors mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-stone-600 group-hover:text-white/80 transition-colors leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Building2 className="w-24 h-24 text-stone-900 group-hover:text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filipino Language Section */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-sage-600 uppercase tracking-widest mb-6">Pagpapahalaga sa Wikang Filipino</h2>
          <div className="space-y-6 text-stone-600 leading-relaxed italic">
            <p>
              "Ang wikang Pilipino ay hindi lamang isang paraan ng komunikasyon, kundi isang mahalagang bahagi ng ating pagkakakilanlan bilang mga Pilipino. Sa pamamagitan nito, naipapahayag natin ang ating kultura, kasaysayan, at mga pagpapahalaga na nagpapabuklod sa ating bansa."
            </p>
            <p>
              "Sa panahon ng globalisasyon, mahalagang hindi natin kalimutan ang ating sariling wika. Bagamat mahalaga ang pagkatuto ng iba’t ibang lengguwahe, nararapat pa rin nating pahalagahan at gamitin ang wikang Pilipino sa pang-araw-araw na buhay, edukasyon, at komunikasyon."
            </p>
          </div>
        </div>
      </section>

      {/* Sample Resume Section */}
      <section id="resume" className="py-24 bg-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sage-600 uppercase tracking-widest mb-4">Propesyonal na Pamantayan</h2>
            <h3 className="text-4xl font-bold text-stone-900">Sample Resume ng Kumpanya</h3>
            <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
              Ipinapakita nito ang kalidad at karanasan ng aming mga inhinyero na handang maglingkod sa inyong mga proyekto.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-stone-200"
          >
            {/* Resume Header */}
            <div className="bg-stone-50 p-8 md:p-12 border-b border-stone-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <h4 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter uppercase mb-4">
                  Karla Paula M. <br /> San Angel
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-stone-600">
                    <Phone className="w-4 h-4 text-sage-600" />
                    <span className="text-sm">+639621126653</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                    <Mail className="w-4 h-4 text-sage-600" />
                    <span className="text-sm">karlamsanangel@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                    <MapPin className="w-4 h-4 text-sage-600" />
                    <span className="text-sm">#19 Nuqui Street San Ramon Dinalupihan, Bataan</span>
                  </div>
                </div>
              </div>
              <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://picsum.photos/seed/engineer/400/400" 
                  alt="Karla Paula M. San Angel" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="p-8 md:p-12 grid md:grid-cols-12 gap-12">
              {/* Left Column */}
              <div className="md:col-span-7 space-y-12">
                <section>
                  <h5 className="text-xl font-bold text-stone-900 uppercase tracking-wider mb-6 pb-2 border-b-2 border-sage-600 inline-block">
                    Karanasan sa Trabaho
                  </h5>
                  <div className="space-y-8">
                    <div className="relative pl-6 border-l-2 border-stone-100">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sage-600 border-4 border-white" />
                      <p className="text-sm font-bold text-sage-600 mb-1">2034 – 2036</p>
                      <h6 className="text-lg font-bold text-stone-900">Civil Engineer</h6>
                      <p className="text-stone-500 font-medium mb-3">Laing O' Rourke</p>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        Tumulong sa mga proyektong pang-imprastraktura at gusali sa pamamagitan ng paghahanda ng civil works drawings, pakikipag-ugnayan sa grupo, at pagsubaybay sa progreso upang masigurado ang kalidad at kaligtasan.
                      </p>
                    </div>

                    <div className="relative pl-6 border-l-2 border-stone-100">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sage-600 border-4 border-white" />
                      <p className="text-sm font-bold text-sage-600 mb-1">2032 – 2034</p>
                      <h6 className="text-lg font-bold text-stone-900">Civil Engineer</h6>
                      <p className="text-stone-500 font-medium mb-3">Philippine Focus</p>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        Sumuporta sa mga lokal na proyektong konstruksyon sa pamamagitan ng pangangasiwa sa mga gawain sa site, pagsusuri sa trabaho ng mga kontratista batay sa mga plano at espesipikasyon, at pagtulong na matiyak na nasusunod ang iskedyul, badyet, at pangangailangan ng kliyente.
                      </p>
                    </div>

                    <div className="relative pl-6 border-l-2 border-stone-100">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sage-600 border-4 border-white" />
                      <p className="text-sm font-bold text-sage-600 mb-1">2030 – 2032</p>
                      <h6 className="text-lg font-bold text-stone-900">Civil Engineer</h6>
                      <p className="text-stone-500 font-medium mb-3">AMH Philippines, Inc.</p>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        Nagsagawa ng pagsusuri at disenyo ng istruktura para sa iba't ibang civil works, nag-ambag sa pagsusuri ng site at mga plano sa pagpapaunlad, at nakipag-ugnayan sa mga multidisciplinary team sa mga pag-aaral sa imprastraktura at environmental engineering sa loob ng konsultansiyang nakabase sa University of the Philippines Diliman.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h5 className="text-xl font-bold text-stone-900 uppercase tracking-wider mb-6 pb-2 border-b-2 border-sage-600 inline-block">
                    Referens
                  </h5>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <p className="font-bold text-stone-900">Cathal O'Rourke</p>
                      <p className="text-sm text-stone-500">Laing O' Rourke Group Chief Executive Officer</p>
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">Ray O'Rourke</p>
                      <p className="text-sm text-stone-500">Laing O' Rourke Chairman</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="md:col-span-5 space-y-12">
                <section>
                  <h5 className="text-xl font-bold text-stone-900 uppercase tracking-wider mb-6 pb-2 border-b-2 border-sage-600 inline-block">
                    Deskripsyon
                  </h5>
                  <p className="text-sm text-stone-600 leading-relaxed italic">
                    "Bilang isang civil engineer, layunin kong gamitin ang aking kaalaman at kasanayang teknikal upang magdisenyo at makapagtayo ng ligtas, napapanatili, at episyenteng imprastraktura habang pinananatili ang kalidad at pangangalaga sa kalikasan."
                  </p>
                </section>

                <section>
                  <h5 className="text-xl font-bold text-stone-900 uppercase tracking-wider mb-6 pb-2 border-b-2 border-sage-600 inline-block">
                    Edukasyon
                  </h5>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-bold text-sage-600 mb-1">2026 – 2030</p>
                      <h6 className="font-bold text-stone-900">Mapúa University</h6>
                      <p className="text-sm text-stone-600">Bachelor of Science in Civil Engineering (BSCE)</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-sage-600 mb-1">2020 – 2026</p>
                      <h6 className="font-bold text-stone-900">St. John's Academy Inc.</h6>
                      <p className="text-sm text-stone-600">Grade 7-12 (With honors)</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h5 className="text-xl font-bold text-stone-900 uppercase tracking-wider mb-6 pb-2 border-b-2 border-sage-600 inline-block">
                    Kasanayan
                  </h5>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "Engineering drawing at drafting",
                      "Paggamit ng engineering software (hal. CAD)",
                      "Pag-unawa sa building codes at safety standards",
                      "Teamwork at collaboration",
                      "Leadership at decision-making",
                      "Time management"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-sage-600 flex-shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sage-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-sage-400 uppercase tracking-widest mb-4">Makipag-ugnayan</h2>
              <p className="text-4xl lg:text-5xl font-bold mb-8">Bumuo tayo ng magandang kinabukasan nang magkasama.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-sage-400" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Mag-email sa amin sa</p>
                    <p className="text-lg font-medium">contact@solidframe.eng</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-sage-400" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Tumawag sa amin sa</p>
                    <p className="text-lg font-medium">+63 (02) 888-SF-ENG</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-sage-400" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Bisitahin ang aming opisina</p>
                    <p className="text-lg font-medium">Metro Manila, Philippines</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-2xl">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">Buong Pangalan</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 transition-all"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 transition-all"
                      placeholder="juan@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Paksa</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 transition-all"
                    placeholder="Inquiry sa Proyekto"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Mensahe</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 transition-all"
                    placeholder="Sabihin sa amin ang tungkol sa iyong proyekto..."
                  />
                </div>
                <button className="w-full bg-sage-600 text-white py-4 rounded-xl font-bold hover:bg-sage-700 transition-all shadow-lg shadow-sage-200/20">
                  Ipadala ang Mensahe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
              <span className="text-lg font-bold tracking-tight text-stone-900 uppercase">
                SolidFrame
              </span>
            </div>
            <p className="text-sm text-stone-500">
              © {new Date().getFullYear()} SolidFrame Engineering. Lahat ng karapatan ay rezebado.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-stone-400 hover:text-sage-600 transition-colors">LinkedIn</a>
              <a href="#" className="text-stone-400 hover:text-sage-600 transition-colors">Twitter</a>
              <a href="#" className="text-stone-400 hover:text-sage-600 transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
