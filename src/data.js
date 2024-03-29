// Import alat images
// Ready
import slide1_1 from './assets/img/ready/Caterpillar 320D 2012/320D gambar 1.jpg';
import slide1_2 from './assets/img/ready/Caterpillar 320D 2012/320D gambar 2.jpg';

// Sold Out
import soldout1 from './assets/img/soldout/Komatsu D85SS-1/D85SS-1 gambar 1.jpg';
import soldout2 from './assets/img/soldout/Hitachi Zaxis 200/Zaxis 200 gambar 1.jpg';
import soldout3 from './assets/img/soldout/Caterpillar 320C/Sold Out to Majalengka/320C gambar 1.jpg';
import soldout4 from './assets/img/soldout/Caterpillar 320C/Sold Out to Pekanbaru/320C gambar 1.jpg';
import soldout5 from './assets/img/soldout/Caterpillar 320D 2011/320D gambar 1.jpg'
import soldout6 from './assets/img/soldout/Niigata/gambar 1.jpg';
import soldout7 from './assets/img/soldout/Niigata NFB6C/gambar 1.jpg';
import soldout8 from './assets/img/soldout/Caterpillar 320C + instalasi breaker/320C + instalasi breaker gambar 1.jpg';
import soldout9 from './assets/img/soldout/Komatsu D65P-11/D65P-11 gambar 1.jpg';
import soldout10 from './assets/img/soldout/Sakai TS 205/TS 205 gambar 1.jpg';
import soldout11 from './assets/img/soldout/Niigata NFB6W 4,5m/NFB6W 4,5m gambar 1.jpg';
import soldout12 from './assets/img/soldout/Dynapac CC 222/CC 222 gambar 1.jpg'
import soldout13 from './assets/img/soldout/Dynapac CC 224HF/CC 224HF gambar 1.jpg'

// Import agents images
import founder from './assets/img/agents/founder.jpg';
import testi1 from './assets/img/agents/me.jpeg';

// Icons
import { BsCheckCircle } from 'react-icons/bs';
export const itemReady = [
  {
    id: 1,
    type: 'Excavator',
    name: 'Caterpillar 320D Instalasi Breaker',
    detail: { 
      merek: 'Caterpillar',
      tipe: '320D',
      kondisi: 'Used Recondition',
      unit: 'Ready to work',
      berat: '8-10 Tons',
      deskripsi: 'For more detais, contact the contact listed !',
    },
    image: {
      slide1: slide1_1,
      slide2: slide1_2,
    },
    status: 'Ready',
    mesin: <BsCheckCircle className="text-green-500" />,
    surat: 'Invoice',
    tahun: '2012',
    price: '390.000.000',
    agent: {
      image: founder,
      name: 'Ulun Syahroni',
      phone: '081228134488',
    },
  }
];

export const itemTerjual = [
  {
    id: 13,
    type: 'Tandem Roller',
    name: 'Dynapac CC 224HF',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: soldout13,
    status: 'Sold Out',
    mesin: <BsCheckCircle className="text-green-500" />,
    surat: 'Importir',
    tahun: '2023',
    price: 'Call',
    agent: {
      image: founder,
      name: 'Ulun Syahroni',
      phone: '081228134488',
    },
    city: '-',
  },
  {
    id: 12,
    type: 'Tandem Roller',
    name: 'Dynapac CC 222',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: soldout12,
    status: 'Sold Out',
    mesin: <BsCheckCircle className="text-green-500" />,
    surat: 'Importir',
    tahun: '2015',
    price: 'Call',
    agent: {
      image: founder,
      name: 'Ulun Syahroni',
      phone: '081228134488',
    },
    city: '-',
  },
  {
    id: 11,
    type: 'Ashpalt Finisher',
    name: 'Niigata NFB6W 4,5m',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: soldout11,
    status: 'Sold Out',
    mesin: <BsCheckCircle className="text-green-500" />,
    surat: 'Importir',
    tahun: '2018',
    price: 'Call',
    agent: {
      image: founder,
      name: 'Ulun Syahroni',
      phone: '081228134488',
    },
    city: '-',
  },
  {
    id: 10,
    type: 'Tire Roller',
    name: 'Sakai TS 205',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: soldout10,
    status: 'Sold Out',
    mesin: <BsCheckCircle className="text-green-500" />,
    surat: 'SPH',
    tahun: '2015',
    price: 'Call',
    agent: {
      image: founder,
      name: 'Ulun Syahroni',
      phone: '081228134488',
    },
    city: '-',
  },
  {
    id: 9,
    type: 'Dozer',
    name: 'Komatsu D65P-11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: soldout9,
    status: 'Sold Out',
    mesin: <BsCheckCircle className="text-green-500" />,
    surat: 'Invoice',
    tahun: '2002',
    price: '300.000.000',
    agent: {
      image: founder,
      name: 'Ulun Syahroni',
      phone: '081228134488',
    },
    city: 'Tasikmalaya',
  },
  {
    id: 8,
    type: 'Dozer',
    name: 'Komatsu D85SS-1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: soldout1,
    status: 'Sold Out',
    mesin: <BsCheckCircle className="text-green-500" />,
    surat: 'SPH',
    tahun: '2000',
    price: '190.000.000',
    agent: {
      image: founder,
      name: 'Ulun Syahroni',
      phone: '081228134488',
    },
    city: 'Tanjung Pinang',
  },
  {
    id: 7,
    type: 'Excavator',
    name: 'Hitachi Zaxis 200',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: soldout2,
    status: 'Sold Out',
    mesin: <BsCheckCircle className="text-green-500" />,
    surat: 'Invoice',
    tahun: '2010',
    price: '250.000.000',
    agent: {
      image: founder,
      name: 'Ulun Syahroni',
      phone: '081228134488',
    },
    city: 'Tangerang',
  },
  {
    id: 6,
    type: 'Excavator',
    name: 'Caterpillar 320C',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: soldout3,
    status: 'Sold Out',
    mesin: <BsCheckCircle className="text-green-500" />,
    surat: 'Invoice',
    tahun: '2004',
    price: '200.000.000',
    agent: {
      image: founder,
      name: 'Ulun Syahroni',
      phone: '081228134488',
    },
    city: 'Majalengka',
  },
  {
    id: 5,
    type: 'Excavator',
    name: 'Caterpillar 320C',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: soldout4,
    status: 'Sold Out',
    mesin: <BsCheckCircle className="text-green-500" />,
    surat: 'Invoice',
    tahun: '2004',
    price: '200.000.000',
    agent: {
      image: founder,
      name: 'Ulun Syahroni',
      phone: '081228134488',
    },
    city: 'Pekanbaru',
  },
  {
    id: 4,
    type: 'Excavator',
    name: 'Caterpillar 320D',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: soldout5,
    status: 'Sold Out',
    mesin: <BsCheckCircle className="text-green-500" />,
    surat: 'Invoice',
    tahun: '2011',
    price: '185.000.000',
    agent: {
      image: founder,
      name: 'Ulun Syahroni',
      phone: '081228134488',
    },
    city: 'Jakarta',
  },
  {
    id: 3,
    type: 'Ashpalt finisher',
    name: 'Niigata',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: soldout6,
    status: 'Sold Out',
    mesin: <BsCheckCircle className="text-green-500" />,
    surat: 'SPH',
    tahun: '2000',
    price: '185.000.000',
    agent: {
      image: founder,
      name: 'Ulun Syahroni',
      phone: '081228134488',
    },
    city: 'Kalimantan',
  },
  {
    id: 2,
    type: 'Ashpalt finisher',
    name: 'Niigata NFB6C',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: soldout7,
    status: 'Sold Out',
    mesin: <BsCheckCircle className="text-green-500" />,
    surat: 'SPH',
    tahun: '2000',
    price: '80.000.000',
    agent: {
      image: founder,
      name: 'Ulun Syahroni',
      phone: '081228134488',
    },
    city: 'Jakarta',
  },
  {
    id: 1,
    type: 'Excavator',
    name: 'Caterpillar 320C + Instalasi Breaker',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: soldout8,
    status: 'Sold Out',
    mesin: <BsCheckCircle className="text-green-500" />,
    surat: 'Invoice',
    tahun: '2010',
    price: '185.000.000',
    agent: {
      image: founder,
      name: 'Ulun Syahroni',
      phone: '081228134488',
    },
    city: 'Jakarta',
  },
];

export const testimoniData = [
  {
    id: 1,
    people: {
      image: testi1,
      name: 'Zainul',
      phone: '088298813114',
    },
    description: 'Barang sudah diterima dengan baik, dan semua berfungsi dengan baik',
    country: 'Cikarang',
  },
];
