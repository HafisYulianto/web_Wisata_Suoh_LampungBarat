import type { Attraction } from '@/components/AttractionCard'

const data: Attraction[] = [
  { id: 'danau-lebar',  name: 'Danau Lebar',  category: 'Danau',     featured: true,  desc: 'Danau terluas di Suoh; spot foto populer dengan hamparan hijau mengelilingi air danau.', img: '/danau-lebar.jpg',  lat: -5.336, lon: 104.238 },
  { id: 'danau-asam',   name: 'Danau Asam',   category: 'Danau',     featured: false, desc: 'Dikenal karena kandungan asamnya; warna air bisa tampak kehijauan kebiruan.',         img: '/danau-asam.jpg',   lat: -5.343, lon: 104.243},
  { id: 'danau-minyak', name: 'Danau Minyak', category: 'Danau',     featured: true,  desc: 'Konon terlihat seperti berkilau; lanskap lapang cocok untuk komposisi foto lebar.',  img: '/danau-minyak.jpg', lat: -5.346, lon: 104.246},
  { id: 'danau-belibis',name: 'Danau Belibis',category: 'Danau',     featured: false, desc: 'Lebih kecil dan tenang; habitat burung air musiman.',                                img: '/danau-belibis.jpg',lat: -5.351, lon: 104.247},
  { id: 'keramikan',    name: 'Keramikan (Geotermal)', category: 'Geotermal', featured: true,  desc: 'Permukaan mineral putih kekuningan dengan lubang uap panas—ikon Suoh. Patuhi pagar pengaman.', img: '/keramikan.jpg',   lat: -5.357, lon: 104.255},
  { id: 'nirwana',      name: 'Kawah Nirwana',category: 'Geotermal', featured: false, desc: 'Kawasan uap panas dengan pola mineral warna-warni. Jaga jarak dari sumber uap.',     img: '/nirwana.png',     lat: -5.361, lon: 104.258,},
  { id: 'savana',       name: 'Savana & Pasir Kuning', category: 'Savana', featured: true, desc: 'Padang rumput luas, terbaik saat kemarau.', img: '/savana.png', lat: -5.349, lon: 104.240,},
]
export default data