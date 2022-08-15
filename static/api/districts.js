const districts = [
  {
    id: 1,
    name: 'Kab. Simeulue',
    province_id: '1'
  },
  {
    id: 2,
    name: 'Kab. Aceh Singkil',
    province_id: '1'
  },
  {
    id: 3,
    name: 'Kab. Aceh Selatan',
    province_id: '1'
  },
  {
    id: 4,
    name: 'Kab. Aceh Tenggara',
    province_id: '1'
  },
  {
    id: 5,
    name: 'Kab. Aceh Timur',
    province_id: '1'
  },
  {
    id: 6,
    name: 'Kab. Aceh Tengah',
    province_id: '1'
  },
  {
    id: 7,
    name: 'Kab. Aceh Barat',
    province_id: '1'
  },
  {
    id: 8,
    name: 'Kab. Aceh Besar',
    province_id: '1'
  },
  {
    id: 9,
    name: 'Kab. Pidie',
    province_id: '1'
  },
  {
    id: 10,
    name: 'Kab. Bireuen',
    province_id: '1'
  },
  {
    id: 11,
    name: 'Kab. Aceh Utara',
    province_id: '1'
  },
  {
    id: 12,
    name: 'Kab. Aceh Barat Daya',
    province_id: '1'
  },
  {
    id: 13,
    name: 'Kab. Gayo Lues',
    province_id: '1'
  },
  {
    id: 14,
    name: 'Kab. Kab. Aceh Tamiang',
    province_id: '1'
  },
  {
    id: 15,
    name: 'Kab. Nias',
    province_id: '2'
  },
  {
    id: 16,
    name: 'Kab. Mandailing Natal',
    province_id: '2'
  },
  {
    id: 17,
    name: 'Kab. Tapanuli Selatan',
    province_id: '2'
  },
  {
    id: 18,
    name: 'Kab. Tapanuli Tengah',
    province_id: '2'
  },
  {
    id: 19,
    name: 'Kab. Tapanuli Utara',
    province_id: '2'
  },
  {
    id: 20,
    name: 'Kab. Kepulauan Mentawai',
    province_id: '3'
  },
  {
    id: 21,
    name: 'Kab. Pesisir Selatan',
    province_id: '3'
  },
  {
    id: 22,
    name: 'Kab. Solok',
    province_id: '3'
  },
  {
    id: 23,
    name: 'Kab. Sijunjung',
    province_id: '3'
  },
  {
    id: 24,
    name: 'Kab. Tanah Datar',
    province_id: '3'
  },
  {
    id: 25,
    name: 'Kab. Padang Pariaman',
    province_id: '3'
  },
  {
    id: 26,
    name: 'Kab. Agam',
    province_id: '3'
  },
  {
    id: 27,
    name: 'Kab. Kuantan Sigingi',
    province_id: '4'
  },
  {
    id: 28,
    name: 'Kab. Indragiri Hulu',
    province_id: '4'
  },
  {
    id: 29,
    name: 'Kab. Indragiri Hilir',
    province_id: '4'
  },
  {
    id: 30,
    name: 'Kab. Pelalawan',
    province_id: '4'
  },
  {
    id: 31,
    name: 'Kab. Siak',
    province_id: '4'
  },
  {
    id: 32,
    name: 'Kab. Kampar',
    province_id: '4'
  },
  {
    id: 33,
    name: 'Kab. Rokan Hulu',
    province_id: '4'
  },
  {
    id: 34,
    name: 'Kab. Karimun',
    province_id: '5'
  },
  {
    id: 35,
    name: 'Kab. Bintan',
    province_id: '5'
  },
  {
    id: 36,
    name: 'Kab. Natuna',
    province_id: '5'
  },
  {
    id: 37,
    name: 'Kab. Lingga',
    province_id: '5'
  },
  {
    id: 38,
    name: 'Kab. Kepulauan Anambas',
    province_id: '5'
  },
  {
    id: 39,
    name: 'Kota Batam',
    province_id: '5'
  },
  {
    id: 40,
    name: 'Kota Tanjung Pinang',
    province_id: '5'
  },
  {
    id: 41,
    name: 'Kab. Kerinci',
    province_id: '6'
  },
  {
    id: 42,
    name: 'Kab. Merangin',
    province_id: '6'
  },
  {
    id: 43,
    name: 'Kab. Sarolangun',
    province_id: '6'
  },
  {
    id: 44,
    name: 'Kab. Batang Hari',
    province_id: '6'
  },
  {
    id: 45,
    name: 'Kab. Muaro Jambu',
    province_id: '6'
  },
  {
    id: 46,
    name: 'Kab. Tanjung Jabung Timur',
    province_id: '6'
  },
  {
    id: 47,
    name: 'Kab. Ogan Kemering Ulu',
    province_id: '7'
  },
  {
    id: 48,
    name: 'Kab. Ogan Kemering Ilir',
    province_id: '7'
  },
  {
    id: 49,
    name: 'Kab. Muara Enim',
    province_id: '7'
  },
  {
    id: 50,
    name: 'Kab. Lahat',
    province_id: '7'
  },
  {
    id: 51,
    name: 'Kab. Musi Rawas',
    province_id: '7'
  },
  {
    id: 52,
    name: 'Kab. Musi Banyuasin',
    province_id: '7'
  },
  {
    id: 53,
    name: 'Kab. Banyuasin',
    province_id: '7'
  },
  {
    id: 54,
    name: 'Kab. Bangka',
    province_id: '8'
  },
  {
    id: 55,
    name: 'Kab. Belitung',
    province_id: '8'
  },
  {
    id: 56,
    name: 'Kab. Bangka Barat',
    province_id: '8'
  },
  {
    id: 57,
    name: 'Kab. Bangka Timur',
    province_id: '8'
  },
  {
    id: 58,
    name: 'Kab. Bangka Selatan',
    province_id: '8'
  },
  {
    id: 59,
    name: 'Kota Pangkal Pinang',
    province_id: '8'
  }
]

export default districts
