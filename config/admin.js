module.exports = ({ env }) => ({
  // --- 1. YOUR EXISTING SECURITY SETTINGS (Keep these!) ---
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },

  // --- 2. THE NEW PREVIEW SETTINGS (Added here) ---
  preview: {
    enabled: true,
    config: {
      // Allow your frontend (localhost:3000 or your real site) to open the preview
      allowedOrigins: [env('CLIENT_URL') || 'http://localhost:3000'],

      // This function runs when you click "Preview" in the admin panel
      async handler(uid, { documentId, locale, status }) {
        
        // Fetch the specific entry to get its slug (if needed)
        const document = await strapi.documents(uid).findOne({ documentId });
        let pathname = null;

        // Logic to generate the correct URL based on the Collection Type
        switch (uid) {
          // Case 1: Your Main Blog
          case 'api::main-blog.main-blog':
            // If you have a 'slug' field, use it. Otherwise, use the ID.
            pathname = document.slug ? `/blog/${document.slug}` : `/blog/${documentId}`;
            break;

          // Case 2: Your Cards
          case 'api::card.card':
            pathname = `/cards/${documentId}`;
            break;

          default:
            return null; // Return null to disable preview for other types
        }

        // Create the secret URL parameters
        const urlSearchParams = new URLSearchParams({
          url: pathname,
          secret: env('PREVIEW_SECRET'), // Reads from your .env file
          status, // 'draft' or 'published'
        });

        // Return the full URL to your frontend API route
        return `${env('CLIENT_URL') || 'http://localhost:5173'}/api/preview?${urlSearchParams}`;
      },
    },
  },
});