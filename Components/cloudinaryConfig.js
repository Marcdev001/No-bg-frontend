import { Cloudinary } from '@cloudinary/url-gen';

// Replace 'cloud_name', 'api_key', and 'api_secret' with your Cloudinary credentials
export const cloudinary = new Cloudinary({
cloud: {
cloudName: 'dfjngumfu', // Replace with your Cloudinary cloud name
apiKey: '794656433416715', // Replace with your Cloudinary API key
apiSecret: 'xxL1RDk2w5-Mx2Wz8No-kGuuBnI', // Replace with your Cloudinary API secret
},
});