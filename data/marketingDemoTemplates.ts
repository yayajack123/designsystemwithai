import type { MarketingTemplate } from '../composables/useMarketingTemplates'

export const createMarketingDemoTemplates = (today = new Date().toISOString().slice(0, 10)): MarketingTemplate[] => [
  { id: 'demo-kediri-coding-ai', name: 'Kediri · Coding & AI', image: 'kediri-coding-ai.jpg', height: 520.078 },
  { id: 'demo-kediri-upgrade-skill', name: 'Kediri · Upgrade skill', image: 'kediri-upgrade-skill.jpg', height: 520.078 },
  { id: 'demo-surabaya-trial-gratis', name: 'Surabaya · Trial gratis', image: 'surabaya-trial-gratis.jpg', height: 487.5 },
].map(item => ({
  id: item.id, name: item.name, status: 'Draft', country: 'Indonesia', branches: [], courses: [],
  periodStart: today, periodEnd: today, priority: 100, isDefault: false,
  createdAt: `${today}T00:00:00.000Z`, updatedAt: `${today}T00:00:00.000Z`, variables: [],
  blocks: [
    { id: `${item.id}-artwork`, type: 'image', name: item.name, content: item.name, imageSrc: `/marketing/demo/${item.image}`, x: 0, y: 0, width: 390, height: item.height, style: { imageFit: 'contain', padding: { top: 0, right: 0, bottom: 0, left: 0 }, borderWidth: 0 } },
    ...(item.id === 'demo-surabaya-trial-gratis' ? [{ id: `${item.id}-cta`, type: 'button' as const, name: 'Daftar sekarang', content: '', url: 'https://wa.me/{{branch_whatsapp}}', linkTarget: '_blank' as const, x: 61, y: 411, width: 269, height: 47, style: { fill: 'transparent', borderWidth: 0, padding: { top: 0, right: 0, bottom: 0, left: 0 }, opacity: 100 } }] : []),
    ...(item.id === 'demo-surabaya-trial-gratis' ? [
      { id: `${item.id}-heading`, type: 'heading' as const, name: 'Trial heading', content: 'Coba kelas coding gratis', x: 24, y: 512, width: 342, height: 64, fontSize: 24, color: 'primary', style: { fontWeight: 600 } },
      { id: `${item.id}-description`, type: 'text' as const, name: 'Trial description', content: 'Ajak anak mengenal coding lewat proyek seru bersama Timedoor Academy Surabaya. Hubungi tim kami untuk memilih jadwal trial dan kelas yang sesuai.', x: 24, y: 588, width: 342, height: 100, fontSize: 15 },
      { id: `${item.id}-trial-button`, type: 'button' as const, name: 'Jadwalkan trial gratis', content: 'Jadwalkan trial gratis', url: 'https://wa.me/{{branch_whatsapp}}?text=Halo%20Timedoor%20Surabaya%2C%20saya%20ingin%20menjadwalkan%20trial%20coding%20gratis.', linkTarget: '_blank' as const, x: 24, y: 704, width: 342, height: 44, fontSize: 15, color: 'primary' },
    ] : []),
  ],
}))
