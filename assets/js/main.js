// Publication data (source: ORCID 0000-0003-0836-1161).
// Fields: [year, title, journal, doi, topic]
// topic: poultry | dairy | fodder | ruminant | other
const PUBLICATIONS = [
  [2025, "Dietary phosphorus and feeding regimens modulate egg production, quality, and serum parameters in laying hens aged 61–80 weeks", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v11i4.75619", "poultry"],
  [2024, "Genetic analysis of HSP70 and HSF3 polymorphisms and their associations with the egg production traits of Bangladeshi hilly chickens", "Animals (MDPI)", "10.3390/ani14243552", "poultry"],
  [2024, "Multiplication and adaptation of BLRI Napier-3 fodder at farmer's level", "Asian-Australasian Journal of Bioscience and Biotechnology", "10.3329/aajbb.v9i3.75613", "fodder"],
  [2021, "Ovarian physiology of repeat breeder cows at Bathan area of Bangladesh", "Bangladesh Journal of Livestock Research", "10.3329/bjlr.v27i1.55173", "dairy"],
  [2020, "Production performance and egg quality of White Rock laying hens fed diets containing whole linseed", "Bangladesh Journal of Livestock Research", "10.3329/bjlr.v20i1-2.47019", "poultry"],
  [2019, "Growth performance of Pekin ducks under full confinement system fed diets with various nutrient concentrations", "Asian Journal of Biological Sciences", "10.3923/ajbs.2019.717.723", "poultry"],
  [2019, "Sero-surveillance of circulating PPR virus and its molecular analysis in selected areas of Bangladesh", "Asian-Australasian Journal of Bioscience and Biotechnology", "10.3329/aajbb.v4i2.64953", "ruminant"],
  [2019, "Small scale production system of broiler in Pabna and Sirajganj district of Bangladesh", "Asian-Australasian Journal of Bioscience and Biotechnology", "10.3329/aajbb.v4i2.64954", "poultry"],
  [2019, "Available dairy cattle feed resources with their nutrient composition existed on milk pocket area of Bangladesh", "International Journal of Natural and Social Sciences", null, "dairy"],
  [2019, "Production performance of sugar beet (Beta vulgaris) at in-situ condition of BLRI-RS Baghabari", "Asian-Australasian Journal of Food Safety and Security", "10.3329/aajfss.v3i1.55925", "fodder"],
  [2019, "Semi-intensive rearing of turkey (Meleagris gallopavo) in some selected areas of Bangladesh", "Asian-Australasian Journal of Food Safety and Security", "10.3329/aajfss.v3i1.55927", "poultry"],
  [2019, "Production and compositional studies of milk in local Pabna cows of Bangladesh", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v5i1.41044", "dairy"],
  [2019, "Variation of morphological features and growth traits in half sib baby calves of Pabna cattle in Bangladesh", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v5i1.41045", "dairy"],
  [2019, "Development and validation of BLRI Mastitis Test Kit at Bangladesh Livestock Research Institute Regional Station, Sirajganj", "Journal of Advanced Veterinary and Animal Research", "10.5455/javar.2019.f363", "dairy"],
  [2018, "Evaluation of nutrient composition and quality of meats derived from different species consumed in Bangladesh", "Journal of Meat Science and Technology", null, "other"],
  [2018, "Effect of feeding concentrate on the reproductive efficiency of repeat breeder cows at Baghabari milk shed area", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v4i1.36832", "dairy"],
  [2018, "Study on the vaccination and medication program in commercial broiler farming at farmer's level", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v4i1.36833", "poultry"],
  [2018, "Detection of heavy metals in poultry feed, meat and eggs", "Asian-Australasian Journal of Food Safety and Security", "10.3329/aajfss.v2i1.55893", "poultry"],
  [2018, "Impact of loamy and sandy soils on productive and nutritive value of BLRI developed Napier-4 fodder at third cutting stage", "International Journal of Applied Research", null, "fodder"],
  [2018, "Cattle production scenario in few rural areas at Pabna district of Bangladesh", "International Journal of Natural and Social Sciences", null, "dairy"],
  [2018, "Prevalence of different dairy cattle diseases in selected dairy areas and farms of Bangladesh", "Asian-Australasian Journal of Bioscience and Biotechnology", "10.3329/aajbb.v3i3.64834", "dairy"],
  [2018, "Retrospective study of parasitic diseases of cattle through laboratory analysis of clinical samples at BLRI Regional Station, Baghabari, Sirajganj, Bangladesh", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v4i4.40109", "dairy"],
  [2018, "Study on the hormonal profile in crossbred dairy cows in relation to repeat breeding at Baghabari milk shed areas, Bangladesh", "Asian-Australasian Journal of Bioscience and Biotechnology", "10.3329/aajbb.v3i3.64835", "dairy"],
  [2017, "Living standard of farmers and cattle oriented marketing system in few rural areas at Pabna district in Bangladesh", "International Journal of Natural and Social Sciences", null, "dairy"],
  [2017, "Comparative study on fodder and rice production with the emphasis of economic profitability", "International Journal of Natural and Social Sciences", null, "fodder"],
  [2017, "Strategic lighting and rest for ethical poultry production in Bangladesh and its impact evaluation on the performance of commercial broilers", "Asian Journal of Science and Technology", null, "poultry"],
  [2017, "Effect of different soil types on growth and production of Napier-4 at the Regional Station of BLRI", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v3i2.33566", "fodder"],
  [2017, "Identification of possible causes of repeat breeding in dairy cows at Baghabari milk shed areas, Sirajgonj, Bangladesh", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v3i2.33567", "dairy"],
  [2017, "Breeding for the improvement of indigenous chickens in Bangladesh: performance of second generation", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v3i1.32038", "poultry"],
  [2017, "Breeding for the improvement of indigenous chickens of Bangladesh: evaluation of performance of first generation of indigenous chicken", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v3i1.32039", "poultry"],
  [2017, "Breeding for the improvement of indigenous chickens of Bangladesh: performance of foundation stock", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v3i1.32041", "poultry"],
  [2017, "Conservation and improvement of native chicken: performance of fourth generation", "Asian-Australasian Journal of Bioscience and Biotechnology", "10.3329/aajbb.v2i1.64044", "poultry"],
  [2017, "Dietary effect of mushroom (Agaricus bisporus) powder on growth performance of commercial broiler", "Asian-Australasian Journal of Bioscience and Biotechnology", "10.3329/aajbb.v2i1.64356", "poultry"],
  [2017, "Antibiotic use to the production performance of ISA Brown layer", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v2i4.30994", "poultry"],
  [2017, "Prevalence and identification of subclinical mastitis in cows at BLRI Regional Station, Sirajganj, Bangladesh", "Journal of Advanced Veterinary and Animal Research", "10.5455/javar.2017.d227", "dairy"],
  [2017, "Prevalence and molecular detection of the causal agents of sub-clinical mastitis in dairy cows in Sirajganj and Pabna districts, Bangladesh", "Journal of Advanced Veterinary and Animal Research", "10.5455/javar.2017.d238", "dairy"],
  [2016, "Conservation and improvement for the production of meat type quail in Bangladesh", "Asian-Australasian Journal of Bioscience and Biotechnology", null, "poultry"],
  [2016, "Assessment of present bio-security practices in live poultry markets in some selected areas of Bangladesh", "Asian-Australasian Journal of Bioscience and Biotechnology", null, "poultry"],
  [2016, "Performance of ISA Brown commercial layer after forced molting", "Asian-Australasian Journal of Bioscience and Biotechnology", null, "poultry"],
  [2016, "Effect of milk replacer on kid performance among small holder farmers", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v2i2.29082", "ruminant"],
  [2016, "Study on egg quality characteristics of three commercial layer strains under different storage conditions", "International Journal of Animal Resources", null, "poultry"],
  [2016, "Effect of urea molasses straw, urea treated straw and silage in the diets on growth performance of goats", "Asian-Australasian Journal of Bioscience and Biotechnology", null, "ruminant"],
  [2016, "Feeding effect of concentrate supplementation on growth and reproductive performance of growing lamb", "", null, "ruminant"],
  [2016, "Study on cutting intervals on biomass yield, nutritive value and their oxalate content of different high yielding Napier (P. purpureum) cultivars", "Asian-Australasian Journal of Bioscience and Biotechnology", null, "fodder"],
  [2016, "Effect of different types of organic manure on biomass yield, morphological characteristics and nutritive value of BLRI Napier-4 in Baghabari milk shed area, Sirajgonj", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v1i3.26498", "fodder"],
  [2016, "Effect of feeding tree forages on productive performances on growing sheep", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v1i3.26489", "ruminant"],
  [2015, "Effect of dietary fatty acid on blood lipid profile and induced bacterial infection in rat", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v1i2.25617", "other"],
  [2015, "Effect of modified feeding practice on milk production of cross bred dairy cows in Baghabari milk shed area, Sirajgonj", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v1i2.25619", "dairy"],
  [2015, "Effect of tree forage supplementation on growth performance of goats", "Asian Journal of Medical and Biological Research", "10.3329/ajmbr.v1i2.25613", "ruminant"],
  [2015, "Effect of intercropping on high yielding fodder production in bathan areas of Sirajgonj district", "Bangladesh Journal of Animal Science", "10.3329/bjas.v44i1.23124", "fodder"],
  [2014, "Effect of different levels of Dhania seed (Coriandrum sativum) on the performance of broiler", "Bangladesh Journal of Animal Science", "10.3329/bjas.v43i1.19383", "poultry"],
  [2014, "Effect of di-calcium phosphate on calcium balance and body condition score of dairy cows fed Napier grass", "Bangladesh Journal of Animal Science", "10.3329/bjas.v43i3.21648", "dairy"],
  [2014, "Trend of livestock population and nutritional evaluation of available feed resources in coastal areas of Noakhali district", "Bangladesh Journal of Animal Science", "10.3329/bjas.v43i3.21652", "other"],
  [2013, "Processed full fat rubber seed as a replacer of soybean meal and oil on the growth performance of Japanese quail (Coturnix japonica)", "Bangladesh Journal of Progressive Science & Technology", null, "poultry"],
];

const TOPICS = { all: "All", poultry: "Poultry", dairy: "Dairy & Cattle", fodder: "Fodder", ruminant: "Goat & Sheep", other: "Other" };
const INTERNATIONAL = /Animals \(MDPI\)|Journal of Advanced Veterinary|Asian Journal of Biological Sciences/;
const INITIAL = 10;

const state = { topic: "all", q: "", showAll: false };
const list = document.getElementById("pub-list");
const count = document.getElementById("pub-count");
const more = document.getElementById("pub-more");
const filter = document.getElementById("pub-filter");
const search = document.getElementById("pub-search");

const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function render() {
  const q = state.q.toLowerCase();
  const rows = PUBLICATIONS.filter(([y, t, j, , topic]) =>
    (state.topic === "all" || topic === state.topic) &&
    (!q || t.toLowerCase().includes(q) || j.toLowerCase().includes(q) || String(y) === q));
  const shown = state.showAll || q || state.topic !== "all" ? rows : rows.slice(0, INITIAL);
  list.innerHTML = shown.map(([y, t, j, doi]) => `
    <li class="pub${INTERNATIONAL.test(j) ? " highlight" : ""}">
      <span class="pub-year">${y}</span>
      <div>
        <p class="pub-title">${esc(t)}</p>
        <p class="pub-meta">${j ? `<em>${esc(j)}</em>` : ""}${doi ? `<a href="https://doi.org/${doi}" target="_blank" rel="noopener">DOI ↗</a>` : ""}</p>
      </div>
    </li>`).join("");
  count.textContent = `Showing ${shown.length} of ${rows.length} publication${rows.length === 1 ? "" : "s"}`;
  more.hidden = shown.length >= rows.length;
}

filter.innerHTML = Object.entries(TOPICS).map(([k, v]) =>
  `<button class="chip" data-topic="${k}" aria-pressed="${k === "all"}">${v}</button>`).join("");
filter.addEventListener("click", e => {
  const b = e.target.closest(".chip"); if (!b) return;
  state.topic = b.dataset.topic;
  filter.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c === b));
  render();
});
search.addEventListener("input", () => { state.q = search.value.trim(); render(); });
more.addEventListener("click", () => { state.showAll = true; render(); });
render();

// Nav: shadow on scroll, mobile toggle, active section
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 8), { passive: true });
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.addEventListener("click", e => { if (e.target.tagName === "A") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", false); } });

const navMap = new Map([...links.querySelectorAll("a")].map(a => [a.getAttribute("href").slice(1), a]));
const spy = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) { navMap.forEach(a => a.classList.remove("active")); navMap.get(en.target.id)?.classList.add("active"); }
}), { rootMargin: "-45% 0px -50% 0px" });
navMap.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });

document.getElementById("year").textContent = new Date().getFullYear();

// Gallery lightbox
const lb = document.getElementById("lightbox");
if (lb && lb.showModal) {
  const lbImg = document.getElementById("lb-img"), lbCap = document.getElementById("lb-cap");
  document.querySelectorAll(".g-open").forEach(btn => btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    lbImg.src = img.src; lbImg.alt = img.alt;
    lbCap.textContent = btn.parentElement.querySelector("figcaption")?.textContent || "";
    lb.showModal();
  }));
  lb.querySelector(".lb-close").addEventListener("click", () => lb.close());
  lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
}
