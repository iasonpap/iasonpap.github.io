const projects = [
  {
    title: 'ANC Demonstrator',
    slug: 'anc-demonstrator',
    excerpt: 'A small active noise cancellation demonstrator built with DSP and microcontrollers.',
  },
  {
    title: 'DIY BT Airtags',
    slug: 'diy-bt-airtags',
    excerpt: 'Custom Bluetooth-based location tags for personal items.',
  },
  {
    title: 'DIY Portable Speaker',
    slug: 'diy-portable-speaker',
    excerpt: 'A compact, battery-powered speaker with custom enclosure and amplifier.',
  },
]

export function getAllProjects() {
  return projects
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}

export default {
  getAllProjects,
  getProjectBySlug,
}
