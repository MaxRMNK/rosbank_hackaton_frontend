/** @type {import('next').NextConfig} */
const nextConfig = {
  // указать массив доменов с которых можно загружать изображения
  // https://stackoverflow.com/questions/64909447/got-an-error-invalid-src-prop-here-is-a-link-on-next-image-hostname-loca
  // Удалить перед деплоем !!!
  images: {
    domains: ['i.pinimg.com', 'localhost'],
  },
};

export default nextConfig;
