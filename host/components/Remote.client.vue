<script setup lang="ts">
import { loadRemoteModule } from "@softarc/native-federation";
import { defineAsyncComponent } from "vue";

const RemoteComponent: any = defineAsyncComponent(async () => loadRemoteModule("remote-app", "./remote-component"));

const helper : any = await loadRemoteModule("remote-app", "./utils/helper");
const day : any = await loadRemoteModule("remote-app", "./utils-days");

const Carousel = defineAsyncComponent(
  async () => await loadRemoteModule("remote-app", './Carousel')
)

const getDay = async () => {
  const today = new Date().toISOString();
  console.log({dayOfWeek: day.getDayFromDate(today)}) 
}

const helpFunction = async () => {
  const currency = helper.formatCurrency(1000000)
  console.log({currency})
}

onMounted(() => {
  helpFunction()
})

const media = [
  {
    image: 'article-1.png',
    title:
      'Securities Crowdfunding: Arti, Sistem Kerja, & Potensi Keuntungannya',
    description:
      'Dalam era digital yang semakin berkembang, metode pembiayaan baru seperti securities crowdfunding telah menjadi tren yang signifikan. Berikut penjelasan lengkap mengenai arti, sistem kerja, dan potensi keuntungan yang terkait dengan crowdfunding.',
    category: 'Edukasi, Investasi',
    read: '4 menit baca',
    link: 'https://www.bizhare.id/media/investasi/mengenal-lebih-dalam-mengenai-securities-crowdfunding'
  },
  {
    image: 'article-2.png',
    title: 'Skema Investasi Bisnis & Pendanaan di Bizhare, Transparan & Aman!',
    description:
      'Pasti banyak dari Anda yang bertanya-tanya, bagaimana skema investasi bisnis dan pengajuan dana di Bizhare? Apakah terbukti aman dan legal? Nah, di bawah ini Bizhare akan jelaskan secara lengkap tahapan dan prosedurnya, mulai dari awal sampai akhir.',
    category: 'Edukasi, Investasi',
    read: '5 menit baca',
    link: 'https://www.bizhare.id/media/investasi/skema-investasi-bisnis-bizhare'
  },
  {
    image: 'article-3.png',
    title: 'Panduan Berinvestasi di Bizhare',
    description:
      'Dengan hadirnya Bizhare, berinvestasi dan jadi pemilik bisnis menjadi lebih mudah. Terlebih, Bizhare sebagai platform securities crowdfunding sudah mengantongi izin dan diawasi langsung oleh Otoritas Jasa Keuangan. Bila ingin mengetahui panduan berinvestasi di Bizhare secara lengkap dan detail, Anda bisa simak panduannya berikut.',
    category: 'Edukasi, Investasi',
    read: '3 menit baca',
    link: 'https://www.bizhare.id/media/fitur/panduan-berinvestasi-di-bizhare'
  }
]
</script>

<template>
  <div>
    <RemoteComponent v-if="!!RemoteComponent" />
    <button @click="getDay">Get Day !</button>
  
    <Carousel
          :items="media"
          :space-between="24"
          slides-per-view="auto"
          slide-class="slide-min"
        >
          <template #content="each">
            <a class="card-article" :href="each.link" target="_blank">
              <div class="article-img">
              </div>
  
              <div class="article-content">
                <div class="article-content-title">
                  <h3>
                    {{ each.title }}
                  </h3>
                </div>
                <div class="article-content-description">
                  <p>
                    {{ each.description }}
                  </p>
                </div>
                <div class="article-content-info">
                  <p class="font-bold text-xs text-primary-navy">
                    {{ each.category }}
                  </p>
                  <p class="font-normal text-xs text-primary-gray">
                    {{ each.read }}
                  </p>
                </div>
              </div>
            </a>
          </template>
        </Carousel>
  </div>
</template>