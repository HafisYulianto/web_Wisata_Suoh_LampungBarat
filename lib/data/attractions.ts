import type { Attraction } from '@/components/AttractionCard'

const data: Attraction[] = [
  {
    id: 'danau-lebar',
    name: 'Danau Lebar',
    category: 'Danau',
    featured: true,
    desc: 'Danau terluas di Suoh; spot foto populer dengan hamparan hijau mengelilingi air danau.',
    img: '/danau-lebar.jpg',
    lat: -5.25117498179086,
    lon: 104.27446463027002,
    tags: ['foto','sunset']
  },
  {
    id: 'danau-asam',
    name: 'Danau Asam',
    category: 'Danau',
    featured: false,
    desc: 'Dikenal karena kandungan asamnya; warna air bisa tampak kehijauan kebiruan.',
    img: '/danau-asam.jpg',
    lat: -5.233946680922697,
    lon: 104.27456272390768,
    tags: ['unik']
  },
  {
    id: 'danau-minyak',
    name: 'Danau Minyak',
    category: 'Danau',
    featured: true,
    desc: 'Konon terlihat seperti berkilau; lanskap lapang cocok untuk komposisi foto lebar.',
    img: '/danau-minyak.jpg',
    lat: -5.245747774320801,
    lon: 104.26698623819158,
    tags: ['landscape']
  },
  {
    id: 'danau-belibis',
    name: 'Danau Belibis',
    category: 'Danau',
    featured: false,
    desc: 'Lebih kecil dan tenang; habitat burung air musiman.',
    img: '/danau-belibis.jpg',
    lat: -5.229521381955325,
    lon: 104.28130438894776,
    tags: ['alami']
  },
  {
    id: 'keramikan',
    name: 'Keramikan (Geotermal)',
    category: 'Geotermal',
    featured: true,
    desc: 'Permukaan mineral putih kekuningan dengan lubang uap panas—ikon Suoh. Patuhi pagar pengaman.',
    img: '/keramikan.jpg',
    lat: -5.239231573580231,
    lon: 104.26347285621387,
    tags: ['geologi','hati-hati']
  },
  {
    id: 'nirwana',
    name: 'Kawah Nirwana',
    category: 'Geotermal',
    featured: false,
    desc: 'Kawasan uap panas dengan pola mineral warna-warni. Jaga jarak dari sumber uap.',
    img: '/nirwana.png',
    lat: -5.2370354160183945,
    lon: 104.25928742678423,
    tags: ['geologi']
  },
  {
    id: 'savana',
    name: 'Savana & Pasir Kuning',
    category: 'Savana',
    featured: true,
    desc: 'Padang rumput luas, terbaik saat kemarau (hindari api). Background foto yang dramatis.',
    img: '/savana.png',
    lat: -5.235685978605192,
    lon: 104.2672529424234,
    tags: ['savana','viewpoint']
  }
]

export default data
